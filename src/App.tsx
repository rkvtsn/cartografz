import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Game from "./views/Game";
import Maps from "./components/Maps";
import { GameContext } from "./contexts/GameContext";
import { IGame } from "./domain/IGame";
import { serviceGame } from "./services/serviceGame";
import GameControl from "./components/GameControl";
import ModalLoading from "./components/ModalLoading";

function App() {
  const [game, setGame] = useState<IGame | null>(null);
  const context = useMemo(() => ({ game, setGame }), [game]);

  useEffect(() => {
    serviceGame.getCurrentGame().then((game) => {
      setGame(game);
    });
  }, []);

  return (
    <>
      <GameContext.Provider value={context}>
        <div className="app">
          <Header version={import.meta.env.APP_VERSION}>
            <Maps />
            <GameControl />
          </Header>
          <Game />
        </div>
      </GameContext.Provider>
      <ModalLoading />
    </>
  );
}

export default App;
