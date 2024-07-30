import { IOrder } from "../../domain/IOrder";
import { OrderEnum } from "../../domain/OrderEnum";

export const MOCK_TABLE_ORDERS: IOrder[] = [
    {
        id: "1",
        img: "hello",
        type: OrderEnum.A
    }
]