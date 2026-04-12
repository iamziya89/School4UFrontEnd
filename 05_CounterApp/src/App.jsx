import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  // function reset(){
  //   setCount(0)
  // }
  return (
    <>
      <h2>Counter App</h2>
      <h4>Count : {count}</h4>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>– Decrement</button>
      <button onClick={()=>setCount(0)}>× Rename</button>
    </>
  )
}

export default App
