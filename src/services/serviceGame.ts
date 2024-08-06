import { IDeckCard } from "../domain/IDeckCard";
import { IGame } from "../domain/IGame";
import { ISeason } from "../domain/ISeason";
import { SeasonEnum } from "../domain/SeasonEnum";
import { shuffleArray } from "../utils/shuffleArray";
import { CONTEXT_MOCK } from "./context/contextMock";
import { Service } from "./service";
import { serviceDeckCards } from "./serviceDeckCards";
import { serviceGoals } from "./serviceGoals";

const CURRENT_GAME_TAG = "current-game";

class ServiceGame extends Service<IGame> {
  getCurrentGame = () => {
    return this.withStore(CURRENT_GAME_TAG, async () => {
      const game = await this.getOne();
      if (game != null) {
        return game;
      }
      const deck = await serviceDeckCards.getDeck(1);
      const goals = await serviceGoals.getGoals();
      return { ...DEFAULT_GAME, deck, goals };
    });
  };

  startSeason = async (game: IGame): Promise<IGame> => {
    game.isNewSeason = true;
    const cards = await serviceDeckCards.getCards();

    const ambushCard = cards.find(
      ({ isAmbush, id }) => isAmbush && !game.ambushes.includes(id)
    );
    game.deck = game.deck.filter(({ id }) => !game.ambushes.includes(id));

    if (ambushCard) {
      game.deck.push(ambushCard);
    }
    game.deck = shuffleArray(game.deck);
    game.historyCards = [];
    game.capacity = 0;
    game.season += 1;
    game.deckCardIndex = -1;
    return await this.saveGame(game);
  };

  getNextDeckCard = async (
    cards: IDeckCard[],
    seasons: ISeason[]
  ): Promise<IGame> => {
    const game = await this.getCurrentGame();
    if (!game) {
      // TODO: implement different cases
      throw new Error("Not implemented edge cases");
    }
    const seasonIndex = seasons.findIndex(
      (season) => season.type == game.season
    );
    if (seasonIndex < seasons.length || game.deckCardIndex < cards.length) {
      game.deckCardIndex += 1;
      const card = cards[game.deckCardIndex];
      game.historyCards.push(card);
      if (card.isAmbush) {
        game.ambushes.push(card.id);
      }
      game.capacity += card.capacity ?? 0;
      const season = seasons[seasonIndex];
      if (season.capacity <= game.capacity) {
        if (seasonIndex + 1 == seasons.length) {
          return this.gameOver(game);
        }
        return this.startSeason(game);
      }
    } else {
      return this.gameOver(game);
    }
    this.saveStore(CURRENT_GAME_TAG, game);
    return game;
  };

  gameOver = (game: IGame): IGame => {
    game.isOver = true;
    this.saveStore(CURRENT_GAME_TAG, game);
    return game;
  };

  newGame = () => {
    this.saveStore(CURRENT_GAME_TAG, "");
    return this.getCurrentGame();
  };

  saveGame = async (game: IGame): Promise<IGame> => {
    this.saveStore(CURRENT_GAME_TAG, game);
    return await this.getCurrentGame();
  };
}

export const serviceGame = new ServiceGame("games", CONTEXT_MOCK);

export const DEFAULT_GAME: IGame = {
  id: null,
  capacity: 0,
  deckCardIndex: -1,
  season: SeasonEnum.SPRING,
  ambushes: [],
  historyCards: [],
  deck: [],
  goals: [],
};
