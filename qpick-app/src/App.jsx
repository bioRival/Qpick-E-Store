import { useState } from 'react'
import {Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MerchCard from './components/MerchCard.jsx'
import Shop from './pages/shop/Shop.jsx'
import Cart from './pages/cart/Cart.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Shop/>
      <Footer/>
    </>
  )
}

export default App
