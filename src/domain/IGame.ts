import { SeasonEnum } from "./SeasonEnum"

export interface IGame {
    id: string | null
    season: SeasonEnum
    deckCardIndex: number
    capacity: number
    isOver?: boolean
}