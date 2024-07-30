import { ICard } from "../../domain/ICard"
import "./styles.css"


const Card = ({ card }: CardProps) => {
    return (
        <div className="card">
            <img className="img" src={card.img} />
        </div>
    )
}

export default Card
interface CardProps {
    card: ICard
}