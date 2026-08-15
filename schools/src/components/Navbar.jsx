import React from 'react'

const Navbar = () => {
  return (
    <nav style={{
        backgroundColor:'white',
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding: "0 2.5rem",
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
               width="60px"
               srcset=""
            />
           <h1>Code School</h1>
        </div>

        <ul style={{
            display :"flex",
            gap     :"2.5rem",
            listStyle:"none"
        }}>
            <li>
                <a href="#" style={{
                    textDecoration:"none",
                    color : "#323232",
                    fontSize :"17px"
                }}>Home</a>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Teacher</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
