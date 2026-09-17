import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display: 'flex',
        gap    : '10px',
        background:'pink',
        padding : '10px'

    }}>
      <NavLink style={({isActive})=>({
        color : isActive ? 'white' : 'blue',
        background: isActive ? 'green' : 'transparent',
        padding : '5px 10px',
        borderRadius: '5px',
        textDecoration: "none"
      })} to={'/'}>HOME</NavLink>
      <NavLink style={({isActive})=>({
        color : isActive ? 'white' : 'blue',
        background: isActive ? 'green' : 'transparent',
        padding : '5px 10px',
        borderRadius: '5px',
        textDecoration: "none"
      })} to={'/about'}>ABOUT</NavLink>
      <NavLink style={({isActive})=>({
        color : isActive ? 'white' : 'blue',
        background: isActive ? 'green' : 'transparent',
        padding : '5px 10px',
        borderRadius: '5px',
        textDecoration: "none"
      })} to={'/contact'}>CONTACT US</NavLink>
    </div>
  )
}

export default Navbar
