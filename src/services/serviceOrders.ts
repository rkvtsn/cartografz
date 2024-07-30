import { IOrder } from "../domain/IOrder";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceOrders extends Service<IOrder> {
    // TODO: implement specific logic
    async initOrders(): Promise<IOrder[]> {
        return shuffleArray(await this.getAll(), true)
    }
}

export const serviceOrders = new ServiceOrders("orders", CONTEXT_MOCK)