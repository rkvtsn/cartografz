import { ISeason } from "../../domain/ISeason"
import Card from "../Card"

const SeasonCard = ({ season }: SeasonCardProps) => {
    return (
        <Card card={season} />
    )
}

export default SeasonCard

interface SeasonCardProps {
    season: ISeason
}
