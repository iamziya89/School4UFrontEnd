import { useState } from 'react'
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

import './App.css'

function App() {
  const option='c';
  let content=<h2>How are you brother......</h2>
  if(option ==='a'){
    content=<CompA/>
  }
  else if(option ==='b'){
    content=<CompB/>
  }
  else if(option ==='c'){
    content=<CompC/>
  }
  else{
    content=<h1>Other Components</h1>
  }

  return(
    <div>
    {content}
  </div>
  )
}

export default App
