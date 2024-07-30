import { IGoal } from "../domain/IGoal";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceGoals extends Service<IGoal> {
    async initGoals(): Promise<IGoal[]> {
        const data = await this.getAll()
        console.log(data)
        return data
    }
}

export const serviceGoals = new ServiceGoals("goals", CONTEXT_MOCK)