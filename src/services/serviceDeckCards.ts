import { IDeckCard } from "../domain/IDeckCard";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

class ServiceDeckCards extends Service<IDeckCard> {
    constructor() {
        super("deck-cards", CONTEXT_MOCK)
    }
    /**
     * Shuffles and remove some ambush cards
     * @param ambushCount how many ambush cards left in deck
     * @returns 
     */
    getDeck = async (ambushCount: number = 2): Promise<IDeckCard[]> => {
        return this.withStore("init", async () => {
            const data = await this.getAll()
            let ambushes = 0
            return shuffleArray(data, true).filter(({ isAmbush }) => {
                if (isAmbush) {
                    ambushes++
                }
                return !isAmbush || ambushes > ambushCount
            })
        })
    }
}

export const serviceDeckCards = new ServiceDeckCards()
