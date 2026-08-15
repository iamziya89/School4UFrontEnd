import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav>
        <ul style={{
        width:'100%',
        height:'10%',
        backgroundColor: 'blueviolet',
        color :"white",
        display:'flex',
        justifyContent:"space-between",
        padding: "1rem",
        fontWeight:"bold",
        cursor:"pointer",
        // position:"fixed",
        // top:'0'
        // flexDirection:"column"

      }}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>HELP</li>
          <li>LOGO</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
