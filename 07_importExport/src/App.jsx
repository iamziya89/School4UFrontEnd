import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Header, Card, Card3} from './Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App</h2>
      <Header/>
      <Card/>
      <Card3/>
    </>
  )
}

export default App
