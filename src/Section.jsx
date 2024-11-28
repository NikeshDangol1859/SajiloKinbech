import React from 'react'
import Login from './component/pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './component/pages/Register'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Product from './component/pages/Product'
import ProductDetails from './component/pages/ProductDetails'
import Cart from './component/pages/Cart'

function Section() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/ProductDetails" element={<ProductDetails/>} />
    </Routes>
      
    </>
  )
}

export default Section
