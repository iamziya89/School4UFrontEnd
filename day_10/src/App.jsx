import React from 'react'
import { useState } from 'react'

const App = () => {
  let [show, setShow] =useState("Mohd");

  function test(){
    setShow(!show)
  }
  
  return (
    <div>
      <h1>Mohd Ziya Shameem</h1>
      <button onClick={()=>{alert("MOHD ZIYA SHAMEEM")}}>Click Me!</button>
    </div>
  )
}

export default App

