import Header from "./components/Header";
import Modal from "./components/Modal";
import Game from "./views/Game";
import { usePreLoadImages } from "./usePreLoadImages";
import Maps from "./components/Maps";

function App() {
  const { isLoading, hide } = usePreLoadImages();

  return (
    <div className="app">
      <Header version={import.meta.env.APP_VERSION}>
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
