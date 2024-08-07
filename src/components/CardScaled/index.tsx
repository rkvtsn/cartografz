import { useState } from "react";
import { ICard } from "../../domain/ICard";
import Modal from "../Modal";
import Card from "../Card";

const CardScaled = ({ card, className }: CardScaledProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev);
  };

  const cardComponent = (
    <Card card={card} onClick={handleOnClick} className={className} />
  );

  return (
    <>
      {cardComponent}
      {isActive && <Modal>{cardComponent}</Modal>}
    </>
  );
};

export default CardScaled;

interface CardScaledProps {
  card: ICard;
  className?: string;
}
