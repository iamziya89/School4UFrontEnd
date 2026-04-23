import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='bg-red-300 py-5'>
        <header className='flex justify-between items-center text-xl text-black/80 max-w-[60rem] m-auto'>
          <h1 className='text-3xl'><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
          <div className='flex items-center gap-7'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Portfolio</a>
          </div>
          <button className='bg-[tomato] rounded-lg px-3 py-1'>Join Us</button>
        </header>
      </div>
    </div>
  )
}

export default Header
