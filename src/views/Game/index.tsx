import { useEffect, useState } from "react";
import { serviceOrders } from "../../services/serviceOrders";
import { serviceSeasons } from "../../services/serviceSeasons";
import { DEFAULT_GAME, serviceGame } from "../../services/serviceGame";
import GameBoard from "./GameBoard";
import { DEFAULT_STATE, GameState } from "./state";
import { IGame } from "../../domain/IGame";
import "./styles.css";

const Game = () => {
  const [state, setState] = useState<GameState>(DEFAULT_STATE);
  const [game, setGame] = useState<IGame>(DEFAULT_GAME);

  useEffect(() => {
    Promise.all([
      serviceOrders.initOrders(),
      serviceSeasons.getAll(),
      serviceGame.getCurrentGame(),
    ]).then(([initOrders, allSeasons, currentGame]) => {
      setState({
        orders: initOrders,
        seasons: allSeasons,
      });
      setGame(currentGame);
    });
  }, []);

  if (!game) {
    return <div>Game is loading...</div>;
  }

  return (
    <div className="game d-flex">
      <GameBoard
        orders={state.orders}
        game={game}
        setGame={setGame}
        seasons={state.seasons}
      />
    </div>
  );
};

export default Game;
