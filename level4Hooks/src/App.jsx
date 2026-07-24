import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'
const App = () => {
  let inputValue=useRef(0)
  console.log(inputValue)

  return (
    <div className='App'>
     <input type='text' ref={inputValue} value="Virtual Code" />
    </div>
  )
}

export default App
