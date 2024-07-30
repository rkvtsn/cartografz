import { IOrder } from "../domain/IOrder";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceOrders extends Service<IOrder> {
    async initOrders(): Promise<IOrder[]> {
        return (await this.getAll()).sort((a, b) => (a.type > b.type ? 1 : -1))
    }
}

export const serviceOrders = new ServiceOrders("orders", CONTEXT_MOCK)