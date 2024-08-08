import { ICardMap } from "../domain/ICardMap";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceMaps extends Service<ICardMap> {
  constructor() {
    super("maps", CONTEXT_MOCK);
  }

  getMaps = () => {
    return this.withStore("maps", () => {
      return this.getAll();
    });
  };
}

export const serviceMaps = new ServiceMaps();
