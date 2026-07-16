import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/pages/Home'
import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <h1>Mohammad Ziya Shameem</h1>
      <Header/>
    </>
  )
}

export default App
