import React from 'react'

const Navbar = () => {
    
  return (
    <nav className='bg-blue-900 py-2 flex justify-between font-bold text-white'>
      <div className="logo hover:text-[#ffffffcf] duration-300  text-xl ml-9 cursor-pointer">Remind Me</div>
      <ul className='flex gap-11 mr-5'>
          <li className='hover:text-[#ffffffcf] duration-300'><a href="http:#">Home</a></li>
          <li className='hover:text-[#ffffffcf] duration-300'><a href="http:#">Link</a></li>
          <li className='hover:text-[#ffffffcf] duration-300'><a href="https://github.com/ParkourAG" target='_blank'>About</a></li>
          <li className='hover:text-[#ffffffcf] duration-300'><a href="http:#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar