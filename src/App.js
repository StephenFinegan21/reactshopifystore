import React from 'react'
import { Router } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/product/:handle' element = {<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App