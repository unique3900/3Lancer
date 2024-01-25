import React from 'react'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Navbar from './layout/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Testimonials/>
    </div>
  )
}

export default App
