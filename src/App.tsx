import './App.css'
import Orders from './components/Orders'
import { useFetchOrders } from './useFetchOrders'

function App() {
  const { orders } = useFetchOrders()
  return (
    <>
      <div className="">
        <Orders orders={orders} />
      </div>
    </>
  )
}

export default App
