import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const fetchData=async ()=>{
    // const response=await fetch('https://jsonplaceholder.typicode.com/users ');
    // const data=await response.json();
    // console.log(data);
    await fetch('https://jsonplaceholder.typicode.com/users ').then((res))
  }
  
  return (
    <>
      <h2>Learning API Through Examples</h2>
      <button onClick={fetchData}>Click Me</button>
    </>
  )
}

export default App
