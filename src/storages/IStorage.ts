export interface IStorage<
  S extends Record<string, string> = Record<string, string>
> {
  setItem<C>(key: keyof S, item: C): Promise<C>;
  getItem<C>(key: keyof S): Promise<C>;
}
