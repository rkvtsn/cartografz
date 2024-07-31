import { IOrder } from "../../domain/IOrder";
import { OrderEnum } from "../../domain/OrderEnum";

export const MOCK_TABLE_ORDERS: IOrder[] = [
  {
    id: "1",
    img: "base/orders/A.jpg",
    type: OrderEnum.A,
  },
  {
    id: "2",
    img: "base/orders/B.jpg",
    type: OrderEnum.B,
  },
  {
    id: "3",
    img: "base/orders/C.jpg",
    type: OrderEnum.C,
  },
  {
    id: "4",
    img: "base/orders/D.jpg",
    type: OrderEnum.D,
  },
];
