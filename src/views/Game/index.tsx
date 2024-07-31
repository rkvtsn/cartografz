import { useCallback, useMemo } from 'react'
import { useFetch } from '../../useFetch'
import { serviceOrders } from '../../services/serviceOrders'
import { serviceGoals } from '../../services/serviceGoals'
import { serviceDeckCards } from '../../services/serviceDeckCards'
import Orders from '../../components/Orders'
import Goals from '../../components/Goals'
import Seasons from '../../components/Seasons'
import { serviceSeasons } from '../../services/serviceSeasons'
import Card from '../../components/Card'
import { serviceGame } from '../../services/serviceGame'
import Capacity from '../../components/Capacity'


const Game = () => {
  const { state: orders } = useFetch([], useCallback(() => serviceOrders.initOrders(), []))
  const { state: goals } = useFetch([], useCallback(() => serviceGoals.getGoals(), []))
  const { state: deckCards } = useFetch([], useCallback(() => serviceDeckCards.getDeck(), []))
  const { state: seasons } = useFetch([], useCallback(() => serviceSeasons.getAll(), []))
  const { state: gameState, setState: setGameState } = useFetch(null, useCallback(() => serviceGame.getCurrentGame(), []))

  const currentCard = useMemo(() => {
    if (!gameState) {
      return null
    }
    return deckCards?.[gameState.deckCardIndex]
  }, [deckCards, gameState])

  const handleOnNewCard = useCallback(() => {
    setGameState(serviceGame.getNextDeckCard(deckCards, seasons))
  }, [deckCards, seasons, setGameState])

  const handleOnNewGame = useCallback(async () => {
    setGameState(await serviceGame.newGame())
  }, [setGameState])

  const currentSeason = useMemo(() => {
    if (!gameState) {
      return null
    }
    return seasons.find(({ type }) => type == gameState.season)
  }, [gameState, seasons])

  if (!gameState) {
    return <div>Game is loading...</div>
  }

  return (
    <div className="game d-flex">
      <div className="seasons-display" style={{ width: "75%", minWidth: "100px" }}>
        <Seasons seasons={seasons} />
        <Capacity season={gameState.season}>{gameState.capacity}</Capacity>
        <button onClick={handleOnNewGame}>Новая игра</button>
      </div>
      <div className="orders-display">
        <Orders orders={orders} />
        <Goals goals={goals} />
        <div className="d-flex">
          <div>
            <div>{currentSeason && <Card card={currentSeason} />}</div>
          </div>

          <button disabled={gameState.isOver} onClick={handleOnNewCard}>Новая карта</button>
          <div>
            {currentCard && (
              <Card card={currentCard} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
