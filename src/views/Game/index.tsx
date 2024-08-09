import { useContext, useEffect, useState } from "react";
import { serviceOrders } from "../../services/serviceOrders";
import { serviceSeasons } from "../../services/serviceSeasons";
import GameBoard from "./GameBoard";
import { DEFAULT_STATE, GameState } from "./state";
import { GameContext } from "../../contexts/GameContext";
import "./styles.css";

const Game = () => {
  const [state, setState] = useState<GameState>(DEFAULT_STATE);
  const { game, setGame } = useContext(GameContext);

  useEffect(() => {
    Promise.all([serviceOrders.initOrders(), serviceSeasons.getAll()]).then(
      ([initOrders, allSeasons]) => {
        setState({
          orders: initOrders,
          seasons: allSeasons,
        });
      }
    );
  }, [setGame]);

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
