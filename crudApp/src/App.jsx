// import { useRef } from "react";

import { useState } from "react";


const App = () =>{
  const [userData, setUserData]=useState([])
  function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json();
    }).then((user)=>{
      console.log(user)
      setUserData(user);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return(
    <div style={{
      width   : '70%',
      margin: '0 auto'
    }}>
      <h2 style={{
        textAlign : 'center',
      }}>CodingOtt</h2>
      <button style={{
        border : 'none',
        padding: '8px 15px',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize:15,
        fontWeight:'bold',
        background:'blue',
        color:'white'
      }}
      onClick={fetchData}>Fetch Data</button>
      {
        userData.map((items, index)=>{
          return(
            <div key={index} style={{
        marginTop:'1rem',
        border :'1px solid #ddd',
        padding: '1.0rem 0',
        boxShadow: '0 0 10px #ddd',
        borderRadius:5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: '#abcffc'
      }}>
        <div style={{
          padding: '0.5rem 0.8rem',
          width:'50%',
          height:'50%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'1rem',
          background:'#b04520',
          color:'White',
          borderRadius:'0.5rem',
          boxShadow: '10 20 30px #ddd',
        }}>
          <h3>Name : {items.name}</h3>
          <h4>Email  : {items.email} </h4>
          <h5>Phone No : {items.phone} </h5>
        </div>
      </div>
          )
        })
      }
    </div>
  )
}
export default App;