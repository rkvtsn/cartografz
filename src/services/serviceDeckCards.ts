import { IDeckCard } from "../domain/IDeckCard";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceDeckCards extends Service<IDeckCard> {
  constructor() {
    super("deck-cards", CONTEXT_MOCK);
  }

  getCards = async (): Promise<IDeckCard[]> => {
    return this.withStore("cards", async () => await this.getAll());
  };

  getAmbushes = async (): Promise<IDeckCard[]> => {
    return shuffleArray(
      (await this.getCards()).filter(({ isAmbush }) => isAmbush)
    );
  };

  getInvestigations = async (): Promise<IDeckCard[]> => {
    return shuffleArray(
      (await this.getCards()).filter(({ isAmbush }) => !isAmbush)
    );
  };
}

export const serviceDeckCards = new ServiceDeckCards();
