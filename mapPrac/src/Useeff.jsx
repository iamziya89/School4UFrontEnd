import React, { useState } from 'react'
import { useEffect } from 'react'

const Useeff = () => {
    let [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect is Runnings........")
        document.title=count
    },[count])
  return (
    <div>
      <h3>UseEffect Hooks : {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <br />
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}

export default Useeff
