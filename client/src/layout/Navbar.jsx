import React from 'react'
import { Link } from 'react-router-dom'
import { navigations } from '../data/NavData'

const Navbar = () => {
  return (
    <div className='z-50 w-full bg-indigo-600  py-4 px-16 flex justify-between items-center gap-4'>
      {/* Logo */}
      <div className="max-w-44 max-h-44">
        <Link to={'/'}><img src="./assets/3lancerLogo.png" alt="Logo" /></Link>
      </div>

      {/* Naviations */}
      <div className="flex justify-around items-center gap-8">
        {navigations.map((item, index) => (
          <Link className='text-white  font-semibold hover:text-[1.2rem] cursor-pointer text-lg' key={index} to={item.navigate}>{item.title }</Link>
        ))}
        <Link className='text-white  font-semibold hover:text-[1.2rem] cursor-pointer text-lg' to={'/login'}>Login</Link>
        <Link className='text-white bg-pink-600 rounded-md py-2 px-4  font-semibold  cursor-pointer text-lg' to={'/register'}>Register</Link>
      </div>
      
    </div>
  )
}

export default Navbar
