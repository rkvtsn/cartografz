import { useCallback, useEffect, useState } from "react"

/**
 * 
 * @param {() => Promise<T>} fetchCallback should be memoized
 * @returns {UseFetch<T>}
 */
export const useFetch = <T>(defaultValue: T, fetchCallback: () => Promise<T>): UseFetch<T> => {
    const [state, setState] = useState<T>(defaultValue)

    const refetch = useCallback(async () => {
        setState(await fetchCallback())
    }, [fetchCallback])

    useEffect(() => { refetch() }, [refetch])

    return {
        state,
        setState,
        refetch,
    }
}

interface UseFetch<T> {
    state: T
    setState: React.Dispatch<React.SetStateAction<T>>
    refetch: () => void
}