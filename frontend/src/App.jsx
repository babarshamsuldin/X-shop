import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Shop from './pages/shop/Shop'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
