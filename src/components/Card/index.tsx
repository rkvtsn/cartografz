import { useState } from "react";
import { ICard } from "../../domain/ICard";
import Modal from "../Modal";
import "./styles.css";
import { getImageUrl } from "../../utils/getImageUrl";

const Card = ({ card }: CardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <img
          onClick={handleOnClick}
          className="img"
          src={getImageUrl(card.img)}
        />
      </div>
      {isActive && (
        <Modal>
          <div className="card">
            <img
              onClick={handleOnClick}
              className="img"
              src={getImageUrl(card.img)}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
interface CardProps {
  card: ICard;
}
