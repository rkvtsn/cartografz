import { IStorage } from "./IStorage";

export class IndexedDbStorage<S extends Record<string, string>>
  implements IStorage<S, IDBObjectStore, IDBRequest>
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
          // resolve(openRequest.result);
        });
      };
    });
  };

  _migrate = async (db: IDBDatabase, forced: boolean = false) => {
    for (const schemaKey of Object.keys(this._schema)) {
      let hasKey = db.objectStoreNames.contains(this._schema[schemaKey]);
      if (forced && hasKey) {
        hasKey = false;
        db.deleteObjectStore(this._schema[schemaKey]);
      }
      if (!hasKey) {
        db.createObjectStore(this._schema[schemaKey], {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    }
  };

  _deleteDb = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(this._dbName);
      console.log(request);
      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  };

  _withTransaction = (
    schemaKey: keyof S,
    type: IDBTransactionMode = "readwrite"
  ) => {
    return async (
      callback: (table: IDBObjectStore, transaction: IDBTransaction) => void
    ) => {
      const db = await this.getContext();

      const transaction = db.transaction(this._schema[schemaKey], type);
      const table = transaction.objectStore(this._schema[schemaKey]);
      return callback(table, transaction);
    };
  };

  setItem<C>(tableName: keyof S, item: C): Promise<C> {
    return new Promise((resolve, reject) => {
      this._withTransaction(tableName)((table, transaction) => {
        if (Array.isArray(item)) {
          item.forEach((it) => table.put(it));
          transaction.oncomplete = () => {
            resolve(item);
          };
          transaction.onerror = () => {
            reject(transaction.error);
          };
        } else {
          const request = table.put(item);
          request.onerror = () => {
            reject(request.error);
          };
          request.onsuccess = () => {
            resolve(item);
          };
        }
      });
    });
  }

  getItem<C>(
    tableName: keyof S,
    filter?: (table: IDBObjectStore) => IDBRequest<C>
  ): Promise<C> {
    return new Promise((resolve, reject) => {
      this._withTransaction(tableName)((table) => {
        const request = filter !== undefined ? filter(table) : table.getAll();
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
