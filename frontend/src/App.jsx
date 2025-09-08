import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
