import { loadLocalStorage } from "../utils/loadLocalStorage";
import { saveLocalStorage } from "../utils/saveLocalStorage";
import { IStorage } from "./IStorage";

export class LocalStorage implements IStorage {
  setItem<C>(key: string, item: C): Promise<C> {
    return new Promise((resolve, reject) => {
      try {
        saveLocalStorage<C>(key, item);
        resolve(item);
      } catch (e) {
        console.log(e);
        reject(null);
      }
    });
  }
  getItem<C>(key: string): Promise<C> {
    return new Promise((resolve, reject) => {
      try {
        resolve(loadLocalStorage(key) as C);
      } catch (e) {
        console.log(e);
        reject(null);
      }
    });
  }
}
