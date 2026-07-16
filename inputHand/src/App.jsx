import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState({
    name : " ",
    email : " ",
  })
  console.log(data)
  function nameHandler(e){
    setData({...data, name : e.target.value})
  }

  function emailHandler(e){
    setData({...data, email : e.target.value})
  }
  return (
    <div>
      <input type="text"
      placeholder='Enter your name'
      value={data.name}
      onChange={nameHandler} />
      <br/>
      <br />
      <input type="text"
      placeholder='Enter your email'
      value={data.email}
      onChange={emailHandler} />
      
      <br />
      <br />
      <button onClick={() => setData({name : " ", email : " "})}>Clear</button>
      <br />
      <p>{data.name}</p>
      <p>{data.email}</p> 
    </div>
  )
}

export default App
