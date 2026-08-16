import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer";

const Teachers = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "280px",
          backgroundImage:
            "radial-gradient( circle farthest-corner at 17.6% 50.7%,  rgba(25,0,184,1) 0%, rgba(0,0,0,1) 90% )",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header style={{
          height :280,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <h1 style={{
            fontSize :60,
            color    :'white'
          }}>
            <i className="ri-user-voice-line" style={{marginRight:16}}></i>
            Teacher
          </h1>
        </header>

        <section>
          <div>
            <img src="./teachers/image_1.jpg" alt="" width={80} height={80} style={{borderRadius:'50%'}} />
            <h2 style={{padding:0, margin:0}}>Rahul Singh</h2>
            <p style={{padding:0, margin:0}}>B.tech (Computer Science & Engg)</p>
          </div>
        </section>

        
      </div>
      <Footer />
    </>
  );
};

export default Teachers;
