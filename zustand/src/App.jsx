import { useState } from 'react'
import useMystore from './store'
// import './App.css'
import Navbar from './components/Navbar';

function App() {
  const data = useMystore();
  console.log(data);
  

  return (
    <div className='bg-red-500'>
        <Navbar />
        <h1>MOHD ZIYA SHAMEEM</h1>
    </div>
  )
}

export default App
