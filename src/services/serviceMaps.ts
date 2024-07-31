import { ICard } from "../domain/ICard";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

export const serviceMaps = new Service<ICard>("maps", CONTEXT_MOCK);
