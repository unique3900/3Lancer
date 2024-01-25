import React from 'react'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Navbar from './layout/Navbar'
import { Routes, Route } from 'react-router-dom';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
      
      {/* <Testimonials/> */}
    </div>
  )
}

export default App
