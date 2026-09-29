import { useEffect, useState } from 'react'

// import './App.css'

function App() {

  let [count, setCount] = useState(0)
  
  useEffect(()=>{
    console.log("useEffect is coming.....");
    document.title = `counter : ${count}`
  },[count])

  return (
    <>
      <h1>Use Effect Hooks</h1>
      <h2>Counter : {count}</h2>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase by 1</button>

    </>
  )
}

export default App
