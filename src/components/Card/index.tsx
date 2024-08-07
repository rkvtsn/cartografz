import { useCallback } from "react";
import { ICard } from "../../domain/ICard";
import { getImageUrl } from "../../utils/getImageUrl";
import "./styles.css";

const Card = <T extends ICard>({ card, className, onClick }: CardProps<T>) => {
  const handleOnClick = useCallback(() => {
    onClick && onClick(card);
  }, [card, onClick]);

  className = className ? "card " + className : "card";

  return (
    <div className={className}>
      <img
        onClick={handleOnClick}
        className="img"
        src={getImageUrl(card.img)}
      />
    </div>
  );
};

export default Card;
interface CardProps<T extends ICard> {
  card: T;
  onClick?: (card: T) => void;
  className?: string;
}
