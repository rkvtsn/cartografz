import { IGoal } from "../../domain/IGoal"
import GoalCard from "../GoalCard"
import "./styles.css"

const Goals = ({ goals }: GoalsProps) => {
    return (
        <div className="goals">
            {goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
        </div>
    )
}

export default Goals

interface GoalsProps {
    goals: IGoal[]
}