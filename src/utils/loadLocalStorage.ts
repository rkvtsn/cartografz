export const loadLocalStorage = <T>(key: string): T | null => {
    const value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value) as T
    }
    return null
}
