import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
        backgroundColor:'white',
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding: "8px 2.5rem",
        boxShadow:"0 8px 8px 0 rgba(0,0,0,0.1)"
    }}>
        <div style={{
            display : "flex",
            alignItems:"center",
            gap:"1rem"
        }}>
            <img
               src="./Images/logo.png"
               alt="No Images"
               width="50px"
               srcset=""
            />
           <h1>Code School</h1>
        </div>

        <ul style={{
            display :"flex",
            gap     :"2.5rem",
            listStyle:"none",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <li>
                <Link to="/" style={{
                    textDecoration:"none",
                    color : "#323232",
                    fontSize :"20px",
                    fontWeight:"bold"
                }}>Home</Link>
            </li>
            <li>
                <Link to="/teacher" style={{
                    textDecoration:"none",
                    color : "#323232",
                    fontSize :"20px",
                    fontWeight:"bold"
                }}>Teacher</Link>
            </li>
            <li>
                <Link to="/holiday" style={{
                    textDecoration:"none",
                    color : "#323232",
                    fontSize :"20px",
                    fontWeight:"bold"
                }}>Holiday</Link>
            </li>
            <li>
                <Link to="/contact-us" style={{
                    textDecoration:"none",
                    color : "#323232",
                    color:"white",
                    fontSize :"20px",
                    fontWeight:"bold",
                    background:"#8700ff",
                    padding:"8px 20px",
                    borderRadius:8,
                }}>Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
