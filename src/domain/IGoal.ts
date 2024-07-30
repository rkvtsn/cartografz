import { ICard } from "./ICard";
import { OrderEnum } from "./OrderEnum";

export interface IGoal extends ICard {
    type: OrderEnum
    description?: string
}