import { ICard } from "./ICard";
import { OrderEnum } from "./OrderEnum";

export interface IOrder extends ICard {
    type: OrderEnum
}