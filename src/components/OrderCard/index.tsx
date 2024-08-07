import { IOrder } from "../../domain/IOrder";
import Card from "../Card";

const OrderCard = ({ order }: OrderCardProps) => {
  return <Card card={order} />;
};

export default OrderCard;

interface OrderCardProps {
  order: IOrder;
}
