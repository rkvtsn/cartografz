import { IOrder } from "../../domain/IOrder";
import { ISeason } from "../../domain/ISeason";

export interface GameState {
  orders: IOrder[];
  seasons: ISeason[];
}

export const DEFAULT_STATE: GameState = {
  orders: [],
  seasons: [],
};
