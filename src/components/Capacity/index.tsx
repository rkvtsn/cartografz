import { PropsWithChildren } from "react"
import { SeasonEnum } from "../../domain/SeasonEnum"
import "./styles.css"

const Capacity = ({ children, season }: CapacityProps) => {
    return (
        <div className={`capacity capacity-season-${season}`}>
            <span>{children}</span>
        </div>
    )
}

export default Capacity

interface CapacityProps extends PropsWithChildren {
    season: SeasonEnum
}