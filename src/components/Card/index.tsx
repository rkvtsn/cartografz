import { useCallback } from "react";
import { ICard } from "../../domain/ICard";
import { useImageSrc } from "../../hooks/useImageSrc";
import "./styles.css";

const Card = <T extends ICard>({ card, className, onClick }: CardProps<T>) => {
  const handleOnClick = useCallback(() => {
    onClick && onClick(card);
  }, [card, onClick]);

  className = className ? "card " + className : "card";

  const imageSrc = useImageSrc(card);

  return (
    <div className={className}>
      <img z-index="2" onClick={handleOnClick} className="img" src={imageSrc} />
    </div>
  );
};

export default Card;
interface CardProps<T extends ICard> {
  card: T;
  onClick?: (card: T) => void;
  className?: string;
}
