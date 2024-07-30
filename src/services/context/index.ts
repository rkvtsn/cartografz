export interface IContext {
    get: <T, F = Record<string, string>>(url: string, filters?: F) => Promise<T>
    getOne: <T, F = Record<string, string>>(url: string, filters?: F) => Promise<T>
    put: <T>(url: string, body: T) => Promise<T>
    post: <T>(url: string, body: T) => Promise<T>
    delete: <T>(url: string, body: T) => Promise<T>
}
