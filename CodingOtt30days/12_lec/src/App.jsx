import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='bg-gray-200 min-h-screen py-10'>
      <div className='w-[60%] mx-auto'>
        <Card />
      </div>
     </div>
  )
}

export default App
