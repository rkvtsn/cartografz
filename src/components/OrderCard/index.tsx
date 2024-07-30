import { IOrder } from "../../domain/IOrder"
import Card from "../Card"

const OrderCard = ({ order }: OrderCardProps) => {
    return (
        <div className="order-card">
            <Card card={order} />
        </div>
    )
}

export default OrderCard

interface OrderCardProps {
    order: IOrder
}