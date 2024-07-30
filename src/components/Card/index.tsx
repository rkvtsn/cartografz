import { useState } from "react"
import { ICard } from "../../domain/ICard"
import Modal from "../Modal"
import "./styles.css"


const Card = ({ card }: CardProps) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const handleOnClick = () => {
        setIsActive(prev => !prev)
    }

    return (
        <>
            <div className="card">
                <img onClick={handleOnClick} className="img" src={card.img} />
            </div>
            {isActive && (
                <Modal>
                    <div className="card">
                        <img onClick={handleOnClick} className="img" src={card.img} />
                    </div>
                </Modal>)}
        </>
    )
}

export default Card
interface CardProps {
    card: ICard
}