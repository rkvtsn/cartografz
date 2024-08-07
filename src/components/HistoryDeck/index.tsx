import { ICard } from "../../domain/ICard";
import CardScaled from "../CardScaled";
import "./styles.css";

const HistoryDeck = ({ historyDeck }: HistoryDeckProps) => {
  return (
    <div className="history-deck">
      {!historyDeck.length && <h1>...</h1>}
      {historyDeck.map((card) => (
        <CardScaled key={card.id} card={card} />
      ))}
    </div>
  );
};

export default HistoryDeck;

interface HistoryDeckProps {
  historyDeck: ICard[];
}
