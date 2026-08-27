import { useState } from "react";

const App= () =>{
  const [input, setInput]=useState("")
  const [data, setData]=useState([])
  function addList(){
    setData([
      ...data,
      input
    ])
  }
  return(
    <div style={{
      minHeight:'100vh',
      minWidth:'100%',
      background:'black',
      color:'white',
      gap :'2rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <h2>MOHAMMAD ZIYA SHAMEEM</h2>
      <ul>
        {
          data.map((items, index)=>{
            return(
              <li key={index}>{items}</li>
            )
          })
        }
      </ul>
      <input type="text"
      value={input}
      placeholder="Enter Product Details"
      onChange={(e)=>setInput(e.target.value)}
      style={{
        width:'350px',
        padding:'0.5rem 0.3rem',
      }}
      />
      <button style={{
        padding:'6px 14px',
        cursor:'pointer',
        fontWeight:"bold",
        border:'none',
        borderRadius:'1rem',
        background:'aqua',
        color:'black',
        fontSize:'1rem'
      }} onClick={addList}>Adding Me</button>
    </div>
  )
}
export default App;