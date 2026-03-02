import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // function greet(){
  //   setCount(prev=>prev+1)
  // }
  // function handler(){
  //   console.log("Input me kuch change hua");
  // }

  // function testing(e){
  //   console.log(e.target);
  // }
  // function val(name){
  //   console.log(name);
    
  // }
 
  function sumHand(e){
    e.preventDefault();
    console.log("Trigger ho gya....");
  }


  return (
    <>
     <form onSubmit={sumHand} action="">
      <input type="text" placeholder='Enter Name ' />
      <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default App
