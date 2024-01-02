import React from 'react'
import { GrSearch } from "react-icons/gr";
import { LuSubtitles } from "react-icons/lu";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardCommandKey, MdOutlineSearch  } from "react-icons/md";

const Hero = () => {
  return (
    <section id='hero' className='h-[85vh] bg-indigo-600 w-full flex flex-col justify-center gap-8'>
          <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-9xl text-white font-[1000]">3Lancer</h1>
              <p className="text-lg font-bold text-white">One Stop Solution For Job Posting and Finding</p>

              {/* Search Form */}
              <div className="w-[80%] lg:w-8/12 flex justify-center items-center bg-white rounded-md p-5">
                  <form className='flex flex-col   items-center lg:flex-row justify-center lg:items-end gap-4'>
                      
                      <div className="flex flex-col justify-center gap-2">
                          <label htmlFor="job-title" className='font-bold text-lg flex gap-2 items-center'>Job Title <span><LuSubtitles  className='text-indigo-600' size={20}/></span></label>
                          <input type="text" name='job-title' className='rounded-md w-96 lg:w-fit border-2 border-black border-opacity-50 px-3 py-2 ' />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                          <label htmlFor="job-keyword" className='font-bold text-lg flex gap-2 items-center'>Keyword <span><MdOutlineKeyboardCommandKey  className='text-indigo-600' size={20}/></span></label>
                          <input type="text" name='job-keyword' className='rounded-md w-96 lg:w-fit border-2 border-black px-3 py-2 ' />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                          <label htmlFor="job-location" className='font-bold text-lg flex gap-2 items-center'>Location <span><FaLocationDot  className='text-indigo-600' size={20}/></span></label>
                          <input type="text" name='job-location' className='rounded-md w-96  lg:w-fit border-2 border-black px-3 py-2 ' />
                      </div>
                     
                      <button className='text-white px-3 py-2 cursor-pointer font-bold h-full bg-indigo-600 w-40 rounded-md flex items-center gap-2 justify-center'>Find <span><GrSearch  className='text-white' size={20}/></span> </button>
                  
                      
                  </form>
              </div>
          </div>
    </section>
  )
}

export default Hero
