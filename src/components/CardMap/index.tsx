import { CardMapNameEnum } from "../../domain/CardMapNameType"
import { CARD_MAPS } from "./constants"

const CardMap = ({ name }: CardMapProps) => {
    return (
        <div className="card">
            <img className="img" src={CARD_MAPS[name]} />
        </div>
    )
}

export default CardMap

interface CardMapProps {
    name: CardMapNameEnum
}