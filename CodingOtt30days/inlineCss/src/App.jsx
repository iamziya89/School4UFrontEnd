import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Box from './components/Box'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-red-300 flex justify-center'>
      <h3 className='color-white fontweight-bolder'>Colors Switchers</h3>
      <Button></Button>
      
    </div>
    <Box />
    </>
  )
}

export default App
