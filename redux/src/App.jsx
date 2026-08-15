import React from "react";
import Nav from "./Nav";

const App = () =>{
  return(
    <div>
      <Nav/>
      <section
      style={{
        width:"75%",
        height:"80%",
        backgroundColor:"red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        margin:"48px auto",
        padding:"12px 0",
        fontSize:'2rem',
        fontWeight:"bold",
        // marginTop:"2rem"


      }}
      >This is Section</section>
      <footer
      style={{
        backgroundColor:"#323232",
        color:"white",
        textAlign:"center",
        padding:"12px",
        fontSize:"20px",
        fontWeight:"bold"

      }}
      >This is Footer</footer>
    </div>
  )
}
export default App;