import { ICard } from "./ICard"
import { OrderEnum } from "./OrderEnum"
import { SeasonEnum } from "./SeasonEnum"

export interface ISeason extends ICard {
    type: SeasonEnum
    orders: OrderEnum[]
    capacity: number
}

