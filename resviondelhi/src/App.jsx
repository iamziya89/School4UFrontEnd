import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar title="Navbar_1" link="Google.com" num={315} />
     <Navbar title="falna" />
     <Navbar link="falna.com" />
    </>
  )
}

export default App
