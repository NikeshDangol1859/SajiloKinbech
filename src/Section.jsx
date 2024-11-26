import React from 'react'
import Login from './component/pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './component/pages/Register'
import Home from './component/pages/Home'

function Section() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
      
    </>
  )
}

export default Section
