import { useContext, useState } from 'react'
import A from './components/A'
import B from './components/B'
import './App.css'
import { MyContext } from './Mycontext';

function App() {

  const data = useContext(MyContext);

  return (
    <div className="bg-red-500 text-white p-4 w-100 h-100">
      APP
      {data}
      <A/>
      <B/>
    </div>
  )
}

export default App
