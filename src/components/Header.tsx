import React from 'react'
import logo from "../assets/logo.png";
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='bg-white h-20 flex items-center px-4 shadow-lg justify-between  lg:px-16 lg:gap-14 lg:justify-normal'>
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" className='h-14'/>
          <h1 className='font-extrabold text-3xl'><span className='text-blue-700'>dev</span>blog</h1>
        </div>
        <NavBar />
    </header>
  )
}

export default Header