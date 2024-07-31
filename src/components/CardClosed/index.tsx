import { ICard } from "../../domain/ICard";
import Card from "../Card";

const CLOSED_CARD: ICard = {
  id: "",
  img: "base/card_closed.jpg",
};

const CardClosed = () => {
  return <Card card={CLOSED_CARD} />;
};

export default CardClosed;
