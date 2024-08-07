import { IStorage } from "./IStorage";

export class IndexedDbStorage<S extends Record<string, string>>
  implements IStorage<S>
{
  _dbName: string;
  _schema: S;
  _db: IDBDatabase | null = null;

  constructor(dbName: string, schema: S) {
    this._dbName = dbName;
    this._schema = schema;
    this._db = null;
  }

  async getContext(): Promise<IDBDatabase> {
    if (!this._db) {
      return await this._connect();
    }
    return this._db;
  }

  _connect = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open(this._dbName, 1);

      openRequest.onsuccess = () => {
        resolve(openRequest.result);
      };
      openRequest.onerror = () => {
        reject(openRequest.error);
      };
      openRequest.onupgradeneeded = async () => {
        // migration possible only in onupgradeneeded context
        this._migrate(openRequest.result, true).then(() => {
          resolve(openRequest.result);
        });
      };
    });
  };

  _migrate = async (db: IDBDatabase, forced: boolean = false) => {
    console.log("on migrate");
    console.log("migrate:", this._schema);
    for (const schemaKey of Object.keys(this._schema)) {
      console.log("has names: ", db.objectStoreNames);
      let hasKey = db.objectStoreNames.contains(this._schema[schemaKey]);
      if (forced && hasKey) {
        hasKey = false;
        db.deleteObjectStore(this._schema[schemaKey]);
      }
      if (!hasKey) {
        db.createObjectStore(this._schema[schemaKey], { keyPath: "id" });
      }
    }
    console.log("done migrate");
  };

  _deleteDb = () => {
    console.log("on delete db");
    return new Promise((resolve, reject) => {
      console.log("delete promise");
      const request = indexedDB.deleteDatabase(this._dbName);
      console.log(request);
      request.onerror = () => {
        console.log("delete error");

        reject(request.error);
      };
      request.onsuccess = () => {
        console.log("delete");

        resolve(request.result);
      };
    });
  };

  _withTransaction = (
    schemaKey: keyof S,
    type: IDBTransactionMode = "readwrite"
  ) => {
    return async (callback: (table: IDBObjectStore) => void) => {
      const db = await this.getContext();
      const transaction = db.transaction(this._schema[schemaKey], type);
      const table = transaction.objectStore(this._schema[schemaKey]);

      return callback(table);
    };
  };

  setItem<C>(tableName: keyof S, item: C): Promise<C> {
    return new Promise((resolve, reject) => {
      this._withTransaction(tableName)((table) => {
        const request = table.put(item);
        request.onerror = () => {
          reject(request.error);
        };
        request.onsuccess = () => {
          resolve(item);
        };
      });
    });
  }

  /**
   *
   * @param {keyof S} tableName
   * @returns {C[]} always Array
   */
  getItem<C>(tableName: keyof S): Promise<C> {
    return new Promise((resolve, reject) => {
      this._withTransaction(tableName)((table) => {
        const request = table.getAll();
        request.onerror = () => {
          reject(request.error);
        };
        request.onsuccess = () => {
          resolve(request.result as C);
        };
      });
    });
  }
}
