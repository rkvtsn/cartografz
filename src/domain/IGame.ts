import { IDeckCard } from "./IDeckCard";
import { IGoal } from "./IGoal";
import { SeasonEnum } from "./SeasonEnum";

export interface IGame {
  id: string | null;
  season: SeasonEnum;
  deckCardIndex: number;
  capacity: number;
  isOver?: boolean;
  ambushes: string[];
  historyCards: IDeckCard[];
  deck: IDeckCard[];
  isNewSeason?: boolean;
  goals: IGoal[];
}
