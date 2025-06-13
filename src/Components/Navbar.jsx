import React from 'react'

const Navbar = () => {
    
  return (
    <nav className='fixed top-0 left-0 w-full py-4 flex justify-between font-bold text-white'>
      <div className="logo hover:text-[#ffffff] duration-300  text-xl hover:text-2xl ml-9 cursor-pointer">Remind Me</div>
      <ul className='flex gap-6 xl:gap-11 mr-8 xl:mr-24'>
          <li className='hover:text-[#ffffff] hover:text-lg duration-300'><a href="http:#">Home</a></li>
          <li className='hover:text-[#ffffff] hover:text-lg duration-300'><a href="http:#">Link</a></li>
          <li className='hover:text-[#ffffff] hover:text-lg duration-300'><a href="https://github.com/ParkourAG" target='_blank'>About</a></li>
          <li className='hover:text-[#ffffff] hover:text-lg duration-300'><a href="http:#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar