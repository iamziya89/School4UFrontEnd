import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let arr=[
    [1, "Mohd Ziya","SitkahanTanda"],
    [2,"Anas Ziya","Illahibagh"],
    [3,"Arbaz","Mushan"]
    
  ]

  

  return (
    <div>
      {
        arr.map((items)=>(
          items.map((x)=>(
            <>
              <h2>{x}</h2>
            </>
          ))
        ))
      }
    </div>
  )
}

export default App
