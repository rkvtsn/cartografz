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

  getDeck = async (ambushes: number = -1): Promise<IDeckCard[]> => {
    const data = await this.getCards();
    let ambushesWere = 0;
    return shuffleArray(
      data.filter((card) => {
        if (!card.isAmbush || ambushes < 0) {
          return true;
        }
        if (ambushesWere < ambushes) {
          ambushesWere += 1;
          return true;
        } else {
          return false;
        }
      }),
      true
    );
  };
}

export const serviceDeckCards = new ServiceDeckCards();
