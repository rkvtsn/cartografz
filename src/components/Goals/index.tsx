import { IGoal } from "../../domain/IGoal"
import GoalCard from "../GoalCard"

const Goals = ({ goals }: GoalsProps) => {
    return (
        <div>
            {goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
        </div>
    )
}

export default Goals

interface GoalsProps {
    goals: IGoal[]
}