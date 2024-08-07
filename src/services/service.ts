import { IStorage } from "../storages/IStorage";
import { LocalStorage } from "../storages/LocalStorage";
import { IContext } from "./context";

export interface IService<T> {
  getAll: <F = Record<string, string>>(params?: F) => Promise<T[]>;
  getOne: <F = Record<string, string>>(params?: F) => Promise<T>;
  saveStore: <R>(action: string, data: R) => Promise<R>;
  getStore: <R>(action: string) => Promise<R> | null;
  /**
   * TODO:put,post,delete
   */
}

export class Service<T> implements IService<T> {
  _url: string = "";
  _ctx: IContext;
  _actions: Set<string> = new Set();
  _storage: IStorage;

  constructor(
    url: string,
    ctx: IContext,
    storage: IStorage = new LocalStorage()
  ) {
    this._ctx = ctx;
    this._url = url;
    this._storage = storage;
  }

  getAll<F = Record<string, string>>(params?: F) {
    return this._ctx.get<T[], F>(this._url, params);
  }
  getOne<F = Record<string, string>>(params?: F) {
    return this._ctx.getOne<T, F>(this._url, params);
  }

  saveStore<R>(action: string, data: R) {
    const key = this.getActionMapper(action);
    this._actions.add(key);
    return this._storage.setItem(key, data);
  }

  getStore<R>(action: string) {
    return this._storage.getItem<R>(this.getActionMapper(action));
  }

  getActionMapper(action: string) {
    return [this._url, action].join("#");
  }

  withStore = async <R>(action: string, fn: () => Promise<R>): Promise<R> => {
    if (!this.getStore(action)) {
      const data = await fn();
      this.saveStore(action, data);
    }
    return this.getStore<R>(action) as R;
  };

  clearStore = () => {
    localStorage.clear();
  };
}
