import { ISeason } from "../../domain/ISeason";
import CardScaled from "../CardScaled";

const SeasonCard = ({ season }: SeasonCardProps) => {
  return <CardScaled card={season} />;
};

export default SeasonCard;

interface SeasonCardProps {
  season: ISeason;
}
