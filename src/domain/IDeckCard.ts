import { ICard } from "./ICard";

export interface IDeckCard extends ICard {
    isAmbush?: boolean
    isRuins?: boolean
} 