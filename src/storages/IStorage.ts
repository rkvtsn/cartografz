export interface IStorage<
  S extends Record<string, string> = Record<string, string>,
  F = unknown,
  R = unknown
> {
  setItem<C>(key: keyof S, item: C): Promise<C>;
  getItem<C>(key: keyof S, filter?: (context: F) => R): Promise<C>;
}
