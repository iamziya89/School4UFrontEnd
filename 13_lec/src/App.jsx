import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHome } from "react-icons/fa";
import { TbHomeSignal } from "react-icons/tb";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Icons</h1>
      <FaHome className='text-6xl' />
      <TbHomeSignal className='text-9xl'/>
    </>
  )
}

export default App
