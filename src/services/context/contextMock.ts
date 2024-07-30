import { IContext } from ".";
import { MOCK_DB } from "../../assets/mocks/db";

export class MockContext implements IContext {
    _db: Record<string, unknown[]>
    constructor(db: Record<string, unknown[]>) {
        this._db = db
    }

    get = <T, F = Record<string, string>>(url: string, filters?: F) => {
        return new Promise<T>((resolve) => {
            if (!this._db[url]) {
                throw new Error("No such table in Database")
            }
            const data = this._db[url] as T
            if (filters) {
                // TODO: filters
                // resolve(data.filter())
            } else {
                resolve(data)
            }
        })
    };
    getOne = <T, F = Record<string, string>>(url: string, filters?: F) => {
        return new Promise<T>((resolve) => {
            if (!this._db[url]) {
                throw new Error("No such table in Database")
            }
            if (filters) {
                //TODO: filters
                // resolve(data.filter())
            }
            const data = this._db[url][0] as T
            resolve(data)
        })
    };
    put = () => {
        throw new Error("Not implemented")
    };
    post = () => {
        throw new Error("Not implemented")
    };
    delete = () => {
        throw new Error("Not implemented")
    };
}

export const CONTEXT_MOCK = new MockContext(MOCK_DB)