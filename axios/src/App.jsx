import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const fetchData = async () => {
    const data=await axios.get({
      url:'https://6a441ba16dba791499abdb90.mockapi.io/users'
    })
    console.log(data);
  }

  return (
    <>
      <h3>Axios Data</h3>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
