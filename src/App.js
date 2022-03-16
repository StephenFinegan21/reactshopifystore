import React from 'react'
import { Router } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Nav from './components/Nav'
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

function App() {
  return (
  
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/product/:handle' element = {<Product />}></Route>
        <Route path='/cart' element = {<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App