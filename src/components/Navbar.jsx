import React from 'react'

const Navbar = () => {
  return (
  <div className="Navbar flex my-4">
    <div className="logo">
        <img className='mx-5 my-1' src='/images/brand_logo.png'></img>
    </div>
    <div className="menu">
        <ul className='flex mx-107 font-bold'>
            <a className='mx-2'>Menu</a>
            <a className='mx-2'>Location</a>
            <a className='mx-2'>About</a>
            <a className='mx-2'>Contact</a>
        </ul>
    </div>
    <div className="btn">
        <button className='bg-red-700 rounded-md text-sm font-bold m-1 px-1 py-0.5 hover:bg-red-800'>Login</button>
    </div>
  </div>
  )
}

export default Navbar
