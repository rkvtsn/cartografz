import { useCallback, useContext } from "react";
import { serviceGame } from "../../services/serviceGame";
import { GameContext } from "../../contexts/GameContext";
import IconNew from "../SvgIcon/IconNew";
import IconReset from "../SvgIcon/IconReset";

const GameControl = () => {
  const { setGame } = useContext(GameContext);

  const handleOnNewGame = useCallback(async () => {
    setGame(await serviceGame.newGame());
  }, [setGame]);

  const handleReset = useCallback(async () => {
    serviceGame.clearStore();
    setGame(await serviceGame.newGame());
  }, [setGame]);

  return (
    <>
      <button onClick={handleOnNewGame}>
        <IconNew fill="transparent" color="#000" height={23} />
      </button>
      <button onClick={handleReset}>
        <IconReset fill="#000" color="#000" height={23} />
      </button>
    </>
  );
};

export default GameControl;
