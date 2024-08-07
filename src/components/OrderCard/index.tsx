import { IOrder } from "../../domain/IOrder";
import CardScaled from "../CardScaled";

const OrderCard = ({ order }: OrderCardProps) => {
  return <CardScaled card={order} />;
};

export default OrderCard;

interface OrderCardProps {
  order: IOrder;
}
