import { IGoal } from "../../domain/IGoal"
import Card from "../Card"

const GoalCard = ({ goal }: GoalCardProps) => {
    return (
        <div className="goal-card">
            <Card card={goal} />
        </div>
    )
}

export default GoalCard

interface GoalCardProps {
    goal: IGoal
}