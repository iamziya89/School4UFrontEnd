import React from 'react'
import { useState } from 'react'

const App = () => {
  let [input, setInput]=useState('');
  let [data, setData] =useState([]);
  function addList(){
    setData([...data,input])
  }

  
  return (
    <div>
      <input type="text"
      placeholder='Please Enter Something Here...'
      value={input}
      style={{
        width:350,
        padding:6,
        marginRight:6,
      }}
      onChange={(e)=>{setInput(e.target.value)}}
      />
      <button style={{
        padding:8,
        background:'blue',
        fontWeight:'bold',
        color:"white",
        border:'none',
        borderRadius:6,
        cursor:'pointer',
        width:'6rem',
        fontSize: '0.8rem'
      }}
      onClick={addList}
      >Click Me</button>
      <ul>
        {
          data.map((items, index)=>{
            return(
              <li key={index}>{items}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App

