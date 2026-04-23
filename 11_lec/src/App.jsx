import { useState } from 'react'
import Card from './Card '
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-red-500'>Kaise Ho Bhai Log</h1>
        <Card />
      </div>
    </>
  )
}

export default App
