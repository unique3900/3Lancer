import React from 'react'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Navbar from './layout/Navbar'
import { Routes, Route } from 'react-router-dom';
import Register from './components/Authentication/Register';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
      
      {/* <Testimonials/> */}
    </div>
  )
}

export default App
