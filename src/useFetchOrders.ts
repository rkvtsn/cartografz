import { useCallback, useEffect, useState } from "react"
import { IOrder } from "./domain/IOrder"
import { serviceOrders } from "./services/serviceOrders"

export const useFetchOrders = (): UseFetchOrders => {
    const [orders, setOrders] = useState<IOrder[]>([])

    const fetchData = useCallback(async () => {
        setOrders(await serviceOrders.initOrders())
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { orders }
}

interface UseFetchOrders {
    orders: IOrder[]
}