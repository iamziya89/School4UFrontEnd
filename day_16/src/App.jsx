import { useState } from "react";


const App = () =>{
  // const [students, setStudents] = useState('')
  // const [data, setData]=useState([])
  // const addList = () =>{
  //   setData([
  //     ...data,
  //     students
  //   ])
  // }
  
  return(
    <div style={{
      minHeight:"100vh",
      maxWidth:'100%',
      // border:'1px solid red',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:'2rem',
      background:'#3d5bf2',
    }}>
      {/* <h1> Add Task In List</h1>
      <input type="text"
      placeholder="Enter Task Add"
      style={{
        maxWidth: "18rem !important",
        padding:'0.5rem 0.3rem',
        borderRadius:'0.5rem',
        cursor: 'pointer',
        border:'none'
        
      }}
      onChange={(e)=>setStudents(e.target.value)}
      />
      <button style={{
      padding: "8px 12px",
      cursor: 'pointer',
      fontSize:'1rem',
      fontWeight:'bold',
      borderRadius:'0.8rem',
      border : 'none'
      }} onClick={addList}>Click Me To Add</button>
      <ul style={{color:'white'}}>
        {
          data.map((items, index)=>(
            <li key={index}>{items}</li>
          ))
        }
      </ul> */}
    </div>
  )
}
export default App;