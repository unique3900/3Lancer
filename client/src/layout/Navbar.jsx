import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigations } from '../data/NavData'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [navState, setNavstate] = useState(false);
  return (
    <div className='relative z-50 w-full bg-indigo-600  py-4 px-16 flex justify-between items-center gap-4'>
      {/* Logo */}
      <div className="max-w-44 max-h-44">
        <Link to={'/'}><img src="./assets/3lancerLogo.png" alt="Logo" /></Link>
      </div>

      {/* Naviations */}
      <div className=" flex justify-around items-center gap-8">
        {navigations.map((item, index) => (
            <Link className='hidden lg:flex text-white  font-semibold hover:text-[1.2rem] cursor-pointer text-lg' key={index} to={item.navigate}>{item.title }</Link>
        ))}

        <Link className='text-white  font-semibold hover:text-[1.2rem] cursor-pointer text-lg' to={'/login'}>Login</Link>
        <Link className='text-white bg-pink-600 rounded-md py-2 px-4  font-semibold  cursor-pointer text-lg' to={'/register'}>Register</Link>
        <GiHamburgerMenu size={40} className={`${navState?'hidden':'flex'} lg:hidden cursor-pointer text-white`} onClick={() => setNavstate(!navState)} />
        
        {navState && (
          <NavMobileMenu navState={navState} setNavstate={setNavstate } /> 
        )}
        

        
      </div>
      
    </div>
  )
}

const NavMobileMenu = ({navState,setNavstate}) => (
  <div className="fixed left-0 top-0 lg:hidden min-h-screen flex flex-col w-[400px] justify-center items-center gap-4 bg-white">
  <IoIosCloseCircleOutline size={40} className={`${!navState ? 'hidden' : 'flex'} absolute top-5 right-5 lg:hidden cursor-pointer text-black`} onClick={() => setNavstate(!navState)} />
  <Link to={'/'} className='w-56 mb-8'><img src="./assets/3lancerLogo.png" alt="Logo" /></Link>
    {navigations.map((item, index) => (
      <div className=''>
        <Link className=' text-black  font-semibold hover:text-[1.2rem] cursor-pointer text-lg' key={index} to={item.navigate} onClick={(e)=> setNavstate(!navState)}>{item.title}</Link>
  </div>
  
))}
</div>
)
export default Navbar
