import { useState } from "react";
const App = () =>{
  const [showImage, setShowImages]=useState(true);
  const [input, setInput] =useState(" ")
  return (
    <div style={{
      minHeight    : '100vh',
      background: '#ddd'
    }}>
      <div style={{
        background   : 'white',
        padding      : 48,
        width        : "50%",
        margin       : "0 auto"
      }}>

        <div style={{
          display   : 'flex',
          flexDirection: 'column',
          alignItems:'center'
          
        }}>
          <h1 style={{padding:0, margin:0}}>Coding Ott</h1>
          <p style={{padding:0, margin:0, color:'gray'}}>State Management React Apllications</p>
        </div>

        <div style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          gap : '0.5rem'
        }}>
          <h2>Show and Hide App</h2>
          {showImage && <img src="./Poster.jpg" alt="404 || No Images" width={400} height={400} />}
          <button style={{padding : '10px 30px', borderRadius:'2rem', fontSize:'1rem', fontWeight:'bold',background:'black', color:'white', cursor:'pointer'}} onClick={()=>{
            setShowImages(!showImage)
          }}>{showImage ? 'HIDE' : 'SHOW'}</button>
        </div>

        <div>
          <h2>Live Input Preview</h2>
          <h1>{input}</h1>
          <input
           type="text"
           placeholder="Type your input here"
           value={input}
           style={{
            border :'1px solid #ccc',
            padding :8,
            width :300
           }}
           onChange={(e)=>{
            setInput(e.target.value);
           }}
          />
          <br />
          <button style={{
            padding : '10px 30px', borderRadius:'2rem', fontSize:'1rem', fontWeight:'bold',background:'black', color:'white', cursor:'pointer', margin:'0.5rem 1rem',
          }} onClick={()=>{setInput("")}}>Erase Input</button>
        </div>

      </div>
    </div>
  )
}
export default App;