import { IGoal } from "../../domain/IGoal";
import Card from "../Card";

const GoalCard = ({ goal }: GoalCardProps) => {
  return <Card card={goal} />;
};

export default GoalCard;

interface GoalCardProps {
  goal: IGoal;
}
