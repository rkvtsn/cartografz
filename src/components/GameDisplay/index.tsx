import CardScaled from "../CardScaled";
import CardClosed from "../CardClosed";
import { ISeason } from "../../domain/ISeason";
import { ICard } from "../../domain/ICard";
import IconNext from "../SvgIcon/IconNext";
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
        {<CardScaled card={currentSeason} />}
        {currentCard ? <CardScaled card={currentCard} /> : <CardClosed />}
        <button
          className="game-display__btn-next-card"
          disabled={isOver}
          onClick={onNewCard}
        >
          <IconNext width="24" height="24" />
        </button>
      </div>
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
