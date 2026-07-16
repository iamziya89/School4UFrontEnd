import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount((prevCount)=>{
      prevCount=prevCount+1;
      console.log(prevCount);
      return prevCount;
      
    })
    
  }
  return (
    <>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
