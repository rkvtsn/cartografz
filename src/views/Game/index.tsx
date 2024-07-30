import { useCallback } from 'react'
import { useFetch } from '../../useFetch'
import { serviceOrders } from '../../services/serviceOrders'
import { serviceGoals } from '../../services/serviceGoals'
import { serviceDeckCards } from '../../services/serviceDeckCards'
import Orders from '../../components/Orders'
import Goals from '../../components/Goals'
import Seasons from '../../components/Seasons'
import { serviceSeasons } from '../../services/serviceSeasons'
import Card from '../../components/Card'


const Game = () => {
  const { state: orders } = useFetch([], useCallback(() => serviceOrders.initOrders(), []))
  const { state: goals } = useFetch([], useCallback(() => serviceGoals.getGoals(), []))
  const { state: deckCards } = useFetch([], useCallback(() => serviceDeckCards.getDeck(), []))
  const { state: seasons } = useFetch([], useCallback(() => serviceSeasons.getAll(), []))

  return (
    <div className="game d-flex">
      <div className="seasons-display">
        <Seasons seasons={seasons} />
      </div>
      <div className="orders-display">
        <Orders orders={orders} />
        <Goals goals={goals} />
        <div className="d-flex" style={{ width: "30%" }}>
          {deckCards?.[0] && (
            <Card card={deckCards?.[0]} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Game
