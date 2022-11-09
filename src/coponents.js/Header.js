import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import {Link} from "react-scroll"

const Header= ({toggle})=>{
  return (
  <header className='flex w-full h-28 bg-black items-center justify-around '>
  <div className='  w-28 '>
<img className='ml-0 ' src={ require("../assets/suju.jpg")}></img>
  </div>
  <div>
    <ul className='md:flex  hidden text-white'>
    <Link to='home' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-5 cursor-pointer'>Home</li>
    </Link>
    <Link to='About Us' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-5 cursor-pointer'>About Us</li>
    </Link>
    <Link to='Sponcers' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-5 cursor-pointer'>Sponcers</li>
    </Link>
    <Link to='Contact' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-5 cursor-pointer'>Contact</li>
    </Link>
        
    </ul>
  </div>
  <div className='flex justify-center items-center'>
  <button className='hover:bg-red-700 px-5 py-3 font-bold text-white bg-red-500 rounded-xl'>Register</button>
  <div onClick={toggle} className="hamburger  p-4 md:hidden">
                <div class="line h-0.5 w-6 my-1 bg-white"></div>
                <div class="line h-0.5 w-6 my-1 bg-white"></div>
                <div class="line h-0.5 w-6 my-1 bg-white"></div>
            </div>
            </div>
  </header>
  )
}

export default Header