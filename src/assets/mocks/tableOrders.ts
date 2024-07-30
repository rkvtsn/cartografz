import { IOrder } from "../../domain/IOrder";
import { OrderEnum } from "../../domain/OrderEnum";

export const MOCK_TABLE_ORDERS: IOrder[] = [
    {
        id: "1",
        img: "src/assets/base/orders/A.jpg",
        type: OrderEnum.A
    },
    {
        id: "2",
        img: "src/assets/base/orders/B.jpg",
        type: OrderEnum.B
    },
    {
        id: "3",
        img: "src/assets/base/orders/C.jpg",
        type: OrderEnum.C
    },
    {
        id: "4",
        img: "src/assets/base/orders/D.jpg",
        type: OrderEnum.D
    }
]