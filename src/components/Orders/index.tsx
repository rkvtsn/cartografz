import { IOrder } from "../../domain/IOrder"
import OrderCard from "../OrderCard"

const Orders = ({ orders }: OrdersProps) => {
    return (
        <div className="orders">
            {orders.map((order) => (<OrderCard key={order.id} order={order} />))}
        </div>
    )
}

export default Orders

interface OrdersProps {
    orders: IOrder[]
}