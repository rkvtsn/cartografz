import { ISeason } from "../domain/ISeason";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

export const serviceGoals = new Service<ISeason>("seasons", CONTEXT_MOCK)
