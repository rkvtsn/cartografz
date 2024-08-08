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
      const ambushes = await serviceDeckCards.getAmbushes();
      const deck = this._addAmbushToDeck(
        await serviceDeckCards.getInvestigations(),
        ambushes
      );

      const goals = await serviceGoals.getGoals();

      return { ...DEFAULT_GAME, deck, goals, ambushes };
    });
  };

  _addAmbushToDeck = (
    deck: IDeckCard[],
    ambushes: IDeckCard[],
    playedAmbushes: string[] = []
  ): IDeckCard[] => {
    const newDeck = deck.filter(({ id }) => !playedAmbushes.includes(id));

    if (ambushes.length) {
      const newAmbush = ambushes.pop();
      if (newAmbush) {
        newDeck.push(newAmbush);
      }
    }
    return shuffleArray(newDeck, true);
  };

  startSeason = async (game: IGame): Promise<IGame> => {
    game.isNewSeason = true;
    game.deck = this._addAmbushToDeck(
      game.deck,
      game.ambushes,
      game.playedAmbushes
    );

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
      const season = seasons[seasonIndex];
      if (season.capacity <= game.capacity) {
        if (seasonIndex + 1 == seasons.length) {
          return this.gameOver(game);
        }
        return this.startSeason(game);
      }
      game.deckCardIndex += 1;
      const card = cards[game.deckCardIndex];
      game.historyCards.push(card);
      if (card.isAmbush) {
        game.playedAmbushes.push(card.id);
      }
      game.capacity += card.capacity ?? 0;
    } else {
      return this.gameOver(game);
    }
    return this.saveStore(CURRENT_GAME_TAG, game);
  };

  gameOver = async (game: IGame): Promise<IGame> => {
    game.isOver = true;
    await this.saveStore(CURRENT_GAME_TAG, game);
    return game;
  };

  newGame = async (): Promise<IGame> => {
    await this.saveStore(CURRENT_GAME_TAG, "");
    return this.getCurrentGame();
  };

  saveGame = async (game: IGame): Promise<IGame> => {
    await this.saveStore(CURRENT_GAME_TAG, game);
    return this.getCurrentGame();
  };
}

export const serviceGame = new ServiceGame("games", CONTEXT_MOCK);

export const DEFAULT_GAME: IGame = {
  id: null,
  capacity: 0,
  deckCardIndex: -1,
  season: SeasonEnum.SPRING,
  playedAmbushes: [],
  ambushes: [],
  historyCards: [],
  deck: [],
  goals: [],
};
