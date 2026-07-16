import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

let App=()=>{
  let [count, setCount]=useState(0)
  let [dec, setDec]=useState(0)
  function increment(){
    setCount((prev)=>prev+1)
  }

  function decrement(){
    setDec(function(dec){
      return(dec-1)
    })
  }

  useEffect(function(){
    console.log("Mohammad Ziya SHameem");
    
  },[dec, count])

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Add Me</button>

      <h3>{dec}</h3>
      <button onClick={decrement}>Substract Me</button>
    </div>
  )
}

export default App
