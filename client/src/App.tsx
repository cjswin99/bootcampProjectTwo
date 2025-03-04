
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

{/* imports the  cart context and cart 
  import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
*/}

function App() {

  return (
    <>
      {/*<CartProvider>*/}
        <Navbar />
        {/*<Cart />*/}
        <Outlet />
      {/*</CartProvider>*/}
    </>
  )
}

export default App
