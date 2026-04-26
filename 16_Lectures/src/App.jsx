import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Button'

function App() { 

  function click1(){
    console.log("Click Me First Button")
  }
  function click2(){
    console.log("Click Me Second Button");
  }


  return (
    <div>
      <Card func={click1} />
      <Card func={click2} />
    </div>
  )
}

export default App
