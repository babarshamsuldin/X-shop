import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
