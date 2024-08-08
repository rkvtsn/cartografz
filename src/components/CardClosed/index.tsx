import { ICard } from "../../domain/ICard";
import Card from "../Card";

const CLOSED_CARD: ICard = {
  id: "",
  img: "base/card_closed.jpg",
};

const CardClosed = ({ className }: CardClosedProps) => {
  return <Card card={CLOSED_CARD} className={className} />;
};

export default CardClosed;

interface CardClosedProps {
  className: string;
}
