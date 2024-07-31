import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Game from "./views/Game";
import { CardMapNameEnum } from "./domain/CardMapNameType";
import CardMap from "./components/CardMap";
import { useLoadImages } from "./useLoadImages";

function App() {
  const [mapName, setMapName] = useState<CardMapNameEnum>(CardMapNameEnum.NONE);

  const showMap = (name: CardMapNameEnum) => () => {
    setMapName(name);
  };

  const { isLoading, hide } = useLoadImages();

  return (
    <div className="app">
      <Header>
        <button onClick={showMap(CardMapNameEnum.A)}>Карта A</button>
        <button onClick={showMap(CardMapNameEnum.B)}>Карта B</button>
      </Header>
      <Game />

      {mapName !== CardMapNameEnum.NONE && (
        <Modal onClose={showMap(CardMapNameEnum.NONE)}>
          <CardMap name={mapName} />
        </Modal>
      )}
      {isLoading && (
        <Modal onClose={hide}>
          <Modal.Panel>
            <h1>Выполнятеся загрузка</h1>
          </Modal.Panel>
        </Modal>
      )}
    </div>
  );
}

export default App;
