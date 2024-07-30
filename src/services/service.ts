import { loadLocalStorage } from "../utils/loadLocalStorage"
import { saveLocalStorage } from "../utils/saveLocalStorage"
import { IContext } from "./context"

export interface IService<T> {
    getAll: <F = Record<string, string>>(params?: F) => Promise<T[]>
    getOne: <F = Record<string, string>>(params?: F) => Promise<T>
    /**
     * TODO:put,post,delete
     */
}

export class Service<T> implements IService<T> {
    _url: string = ""
    _ctx: IContext
    _actions: Set<string> = new Set()

    constructor(url: string, ctx: IContext) {
        this._ctx = ctx
        this._url = url
    }
    getAll<F = Record<string, string>,>(params?: F) {
        return this._ctx.get<T[], F>(this._url, params)
    }
    getOne<F = Record<string, string>>(params?: F) {
        return this._ctx.getOne<T, F>(this._url, params)
    }

    saveStore<R>(action: string, data: R) {
        const key = this.getActionMapper(action)
        this._actions.add(key)
        saveLocalStorage(key, data)
    }

    getStore<R>(action: string): R | null {
        return loadLocalStorage<R>(this.getActionMapper(action))
    }

    getActionMapper(action: string) {
        return [this._url, action].join("#")
    }

    withStore = async<R>(action: string, fn: () => Promise<R>): Promise<R> => {
        if (!this.getStore(action)) {
            const data = await fn()
            this.saveStore(action, data)
        }
        return this.getStore<R>(action) as R
    }

    clearStore = () => {
        localStorage.clear()
    }
}