import { ICard } from "../../domain/ICard"


const Card = ({ card }: CardProps) => {
    return (
        <div className="card">
            <img src={card.img} />
        </div>
    )
}

export default Card
interface CardProps {
    card: ICard
}