import { IGoal } from "../../domain/IGoal";
import CardScaled from "../CardScaled";

const GoalCard = ({ goal }: GoalCardProps) => {
  return <CardScaled card={goal} />;
};

export default GoalCard;

interface GoalCardProps {
  goal: IGoal;
}
