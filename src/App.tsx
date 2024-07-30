import { useCallback } from 'react'
import Orders from './components/Orders'
import { serviceOrders } from './services/serviceOrders'
import { useFetch } from './useFetch'
import { serviceGoals } from './services/serviceGoals'
import Goals from './components/Goals'
import { serviceDeckCards } from './services/serviceDeckCards'

function App() {
  const { state: orders } = useFetch([], useCallback(() => serviceOrders.initOrders(), []))
  const { state: goals } = useFetch([], useCallback(() => serviceGoals.getGoals(), []))
  const { state: deckCards } = useFetch([], useCallback(() => serviceDeckCards.initDeck(), []))

  return (
    <>
      <div className="">
        <Orders orders={orders} />
        <Goals goals={goals} />
      </div>
    </>
  )
}

export default App
