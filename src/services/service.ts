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
}