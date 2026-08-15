import { useState } from 'react'
import './App.css'
import A from './components/A'
import B from './components/B'

function App() {

  return (
    <div className='w-screen h-screen bg-red-300 flex flex-col justify-center items-center'>
      <h1 className='w-[500px] h-[500px] border text-center text-2xl font-bold'>
        APP
        <div className='w-[490px] h-[490px] border flex flex-col'>
          <A/>
          <B/>
        </div>
      </h1>
    </div>
  )
}

export default App
