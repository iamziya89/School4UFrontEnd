import { useState } from 'react'
import './App.css'
import Header from './Header'
const App=()=>{
  function parentData(receive){
    console.log(receive);
  }
  return(
    <div>
      <Header funct={parentData}/>
    </div>
  )
}
export default App