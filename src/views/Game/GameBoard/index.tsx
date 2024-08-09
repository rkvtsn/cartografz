import { useCallback, useMemo } from "react";
import { IGame } from "../../../domain/IGame";
import { ISeason } from "../../../domain/ISeason";
import { IOrder } from "../../../domain/IOrder";
import { serviceGame } from "../../../services/serviceGame";
import Seasons from "../../../components/Seasons";
import Capacity from "../../../components/Capacity";
import Orders from "../../../components/Orders";
import Goals from "../../../components/Goals";
import Modal from "../../../components/Modal";
import SeasonNotification from "../../../components/SeasonNotification";
import HistoryDeck from "../../../components/HistoryDeck";
import GameDisplay from "../../../components/GameDisplay";
import "./styles.css";

const GameBoard = ({ game, seasons, orders, setGame }: GameBoardProps) => {
  const currentCard = useMemo(() => {
    if (game.deckCardIndex == -1) {
      return null;
    }
    return game.deck?.[game.deckCardIndex];
  }, [game.deck, game.deckCardIndex]);

  const handleOnNewCard = useCallback(async () => {
    const newState = await serviceGame.getNextDeckCard(game.deck, seasons);
    setGame(newState);
  }, [game.deck, seasons, setGame]);

  const handleOnNewGame = useCallback(async () => {
    setGame(await serviceGame.newGame());
  }, [setGame]);

  const currentSeason = useMemo(() => {
    const season = seasons.find(({ type }) => type == game.season);
    return season ?? seasons[0];
  }, [game, seasons]);

  const historyDeck = useMemo(() => {
    return [...game.historyCards].reverse();
  }, [game.historyCards]);

  const onCloseNewSeason = useCallback(async () => {
    setGame(await serviceGame.saveGame({ ...game, isNewSeason: false }));
  }, [game, setGame]);

  return (
    <>
      <div className="orders-display">
        <Orders orders={orders} />
        <Goals goals={game.goals} />

        <GameDisplay
          currentCard={currentCard}
          currentSeason={currentSeason}
          isOver={!!game.isOver}
          onNewCard={handleOnNewCard}
        />

        <HistoryDeck historyDeck={historyDeck} />
      </div>
      <div className="seasons-display">
        <Seasons seasons={seasons} />
        <Capacity season={game.season}>{game.capacity}</Capacity>
      </div>
      {game.isNewSeason && (
        <Modal onClose={onCloseNewSeason}>
          <SeasonNotification currentSeason={currentSeason} />
        </Modal>
      )}
      {game.isOver && (
        <Modal onClose={handleOnNewGame}>
          <Modal.Panel>
            <h1>Игра окончена.</h1>
            <h2>Закройте окно для начала новой игры</h2>
          </Modal.Panel>
        </Modal>
      )}
    </>
  );
};

export default GameBoard;

interface GameBoardProps {
  seasons: ISeason[];
  game: IGame;
  setGame: React.Dispatch<React.SetStateAction<IGame | null>>;
  orders: IOrder[];
}
