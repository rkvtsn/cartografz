import Header from "./components/Header";
import Modal from "./components/Modal";
import Game from "./views/Game";
import { useLoadImages } from "./useLoadImages";
import Maps from "./components/Maps";

function App() {
  const { isLoading, hide } = useLoadImages();

  return (
    <div className="app">
      <Header>
        <Maps />
      </Header>
      <Game />

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
