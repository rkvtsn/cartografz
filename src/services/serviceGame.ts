import { IDeckCard } from "../domain/IDeckCard";
import { IGame } from "../domain/IGame";
import { ISeason } from "../domain/ISeason";
import { SeasonEnum } from "../domain/SeasonEnum";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";

const CURRENT_GAME_TAG = "current-game"

class ServiceGame extends Service<IGame> {
    getCurrentGame = () => {
        return this.withStore(CURRENT_GAME_TAG, async () => {
            const game = await this.getOne()
            if (game != null) {
                return game
            }
            return { ...DEFAULT_GAME }
        })
    }

    getNextDeckCard = (cards: IDeckCard[], seasons: ISeason[]): IGame => {
        const game = this.getStore<IGame>(CURRENT_GAME_TAG)
        if (!game) {
            // TODO: implement different cases
            throw new Error("Not implemented edge cases")
        }
        console.log({ cards })
        let seasonIndex = seasons.findIndex(season => season.type == game.season)
        if (seasonIndex < seasons.length || game.deckCardIndex < cards.length) {
            game.deckCardIndex += 1
            const card = cards[game.deckCardIndex]
            console.log({ card })
            console.log({ game })
            game.capacity += (card.capacity ?? 0)
            const season = seasons[seasonIndex]
            if (season.capacity <= game.capacity) {
                seasonIndex += 1
                if (seasonIndex == seasons.length) {
                    return this.gameOver(game)
                }
                game.capacity = 0
                game.season = seasons[seasonIndex].type
            }
        } else {
            return this.gameOver(game)
        }
        this.saveStore(CURRENT_GAME_TAG, game)
        return game
    }

    gameOver = (game: IGame): IGame => {
        game.isOver = true
        this.saveStore(CURRENT_GAME_TAG, game)
        return game
    }

    newGame = () => {
        this.saveStore(CURRENT_GAME_TAG, "")
        return this.getCurrentGame()
    }
}

export const serviceGame = new ServiceGame("games", CONTEXT_MOCK)

const DEFAULT_GAME: IGame = {
    id: null,
    capacity: 0,
    deckCardIndex: -1,
    season: SeasonEnum.SPRING,
}