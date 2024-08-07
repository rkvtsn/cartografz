import CardScaled from "../CardScaled";
import CardClosed from "../CardClosed";
import { ISeason } from "../../domain/ISeason";
import { ICard } from "../../domain/ICard";

import "./styles.css";

const GameControls = ({
  currentSeason,
  onNewCard,
  currentCard,
  isOver,
}: GameControlsProps) => {
  if (!currentSeason) {
    return null;
  }
  return (
    <div className="game-controls">
      <div>
        <div>{<CardScaled card={currentSeason} />}</div>
      </div>

      <button disabled={isOver} onClick={onNewCard}>
        Исследовать
      </button>
      <div>
        {currentCard ? <CardScaled card={currentCard} /> : <CardClosed />}
      </div>
    </div>
  );
};

export default GameControls;

interface GameControlsProps {
  currentSeason: ISeason | null;
  currentCard: ICard | null;
  isOver: boolean;
  onNewCard: () => void;
}
