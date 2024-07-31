import { IDeckCard } from "../domain/IDeckCard";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceDeckCards extends Service<IDeckCard> {
  constructor() {
    super("deck-cards", CONTEXT_MOCK);
  }

  getDeck = async (ambushes: number = -1): Promise<IDeckCard[]> => {
    return this.withStore("init", async () => {
      const data = await this.getAll();
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
    });
  };
}

export const serviceDeckCards = new ServiceDeckCards();
