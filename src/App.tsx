import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Game from './views/Game'
import { CardMapNameEnum } from './domain/CardMapNameType'
import CardMap from './components/CardMap'

function App() {
  const [mapName, setMapName] = useState<CardMapNameEnum>(CardMapNameEnum.NONE)

  const showMap = (name: CardMapNameEnum) => () => {
    setMapName(name)
  }

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

    </div>
  )
}

export default App
