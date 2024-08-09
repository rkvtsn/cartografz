import { createContext } from "react";
import { IGame } from "../domain/IGame";

type TGameContext = {
  game: IGame | null;
  setGame: React.Dispatch<React.SetStateAction<IGame | null>>;
};

export const GameContext = createContext<TGameContext>({
  game: null,
  setGame: () => {},
});
