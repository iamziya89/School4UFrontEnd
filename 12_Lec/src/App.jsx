import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <div className='max-w-[55rem] m-auto text-center py-[8rem]'>
        <h1 className='text-7xl font-serif font-bold'>The Best Way To <span className='bg-red-300 rounded-2xl px-3'>Review</span> Creative Assets </h1>
        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum totam porro dignissimos sit ab architecto molestiae ut quos ipsa recusandae!</p>
      </div>
    </>
  )
}

export default App
