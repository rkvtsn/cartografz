import { IGoal } from "../domain/IGoal";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceGoals extends Service<IGoal> {
    async getGoals(): Promise<IGoal[]> {
        return this.withStore<IGoal[]>("init", async () => {
            const data = shuffleArray(await this.getAll(), true)
            const groups = new Set()
            const goals = []
            for (const goal of data) {
                if (!groups.has(goal.type)) {
                    goals.push(goal)
                    groups.add(goal.type)
                }
            }

            return goals.sort((a, b) => (a.type < b.type) ? -1 : 1)
        })
    }
}

export const serviceGoals = new ServiceGoals("goals", CONTEXT_MOCK)