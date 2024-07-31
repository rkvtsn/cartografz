import { useCallback, useMemo } from "react";
import { IGame } from "../../../domain/IGame";
import { ISeason } from "../../../domain/ISeason";
import { IOrder } from "../../../domain/IOrder";
import { serviceGame } from "../../../services/serviceGame";
import Seasons from "../../../components/Seasons";
import Capacity from "../../../components/Capacity";
import Orders from "../../../components/Orders";
import Goals from "../../../components/Goals";
import Card from "../../../components/Card";
import CardClosed from "../../../components/CardClosed";
import Modal from "../../../components/Modal";
import SeasonNotification from "../../../components/SeasonNotification";

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
  const handleReset = useCallback(async () => {
    serviceGame.clearStore();
    setGame(await serviceGame.newGame());
  }, [setGame]);

  const onCloseNewSeason = useCallback(async () => {
    setGame(await serviceGame.saveGame({ ...game, isNewSeason: false }));
  }, [game, setGame]);

  return (
    <>
      <div
        className="seasons-display"
        style={{ width: "30%", minWidth: "100px" }}
      >
        <Seasons seasons={seasons} />
        <Capacity season={game.season}>{game.capacity}</Capacity>
        <button onClick={handleOnNewGame}>Новая игра</button>

        <button onClick={handleReset}>RESET</button>
      </div>
      <div className="orders-display">
        <Orders orders={orders} />
        <Goals goals={game.goals} />
        <div className="d-flex">
          <div>
            <div>{currentSeason && <Card card={currentSeason} />}</div>
          </div>

          <button disabled={game.isOver} onClick={handleOnNewCard}>
            Исследовать
          </button>
          <div>
            {currentCard ? <Card card={currentCard} /> : <CardClosed />}
          </div>
        </div>

        <div className="history-deck">
          {historyDeck.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      {game.isNewSeason && (
        <Modal onClose={onCloseNewSeason}>
          <SeasonNotification currentSeason={currentSeason} />
        </Modal>
      )}
    </>
  );
};

export default GameBoard;

interface GameBoardProps {
  seasons: ISeason[];
  game: IGame;
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
  orders: IOrder[];
}
