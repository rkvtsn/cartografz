import { useState } from "react";
import { ICard } from "../../domain/ICard";
import Modal from "../Modal";
import Card from "../Card";
import "./styles.css";

const CardScaled = ({ card, className }: CardScaledProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <Card
        card={card}
        onClick={handleOnClick}
        className={"card-scaled " + className}
      />
      {isActive && (
        <Modal>
          <Card card={card} onClick={handleOnClick} className={className} />
        </Modal>
      )}
    </>
  );
};

export default CardScaled;

interface CardScaledProps {
  card: ICard;
  className?: string;
}
