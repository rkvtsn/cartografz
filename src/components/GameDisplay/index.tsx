import CardScaled from "../CardScaled";
import CardClosed from "../CardClosed";
import { ISeason } from "../../domain/ISeason";
import { ICard } from "../../domain/ICard";

import "./styles.css";

const GameDisplay = ({
  currentSeason,
  onNewCard,
  currentCard,
  isOver,
}: GameDisplayProps) => {
  if (!currentSeason) {
    return null;
  }
  return (
    <>
      <div className="game-display">
        {currentCard ? (
          <CardScaled card={currentCard} />
        ) : (
          <CardClosed className="card-control" />
        )}
        {<CardScaled card={currentSeason} />}
      </div>
      <button disabled={isOver} onClick={onNewCard}>
        Исследовать
      </button>
    </>
  );
};

export default GameDisplay;

interface GameDisplayProps {
  currentSeason: ISeason | null;
  currentCard: ICard | null;
  isOver: boolean;
  onNewCard: () => void;
}
