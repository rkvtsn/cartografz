import { ISeason } from "../../domain/ISeason"
import SeasonCard from "../SeasonCard"

const Seasons = ({ seasons }: SeasonsProps) => {
    return (
        <div className="seasons">
            {seasons.map(season => <SeasonCard key={season.id} season={season} />)}
        </div>
    )
}

export default Seasons

interface SeasonsProps {
    seasons: ISeason[]
}
