import { ICard } from "../domain/ICard";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

export const serviceGallery = new Service<ICard>("gallery", CONTEXT_MOCK);
