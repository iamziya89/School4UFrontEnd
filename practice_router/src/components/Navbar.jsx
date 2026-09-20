import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        background : '#04aa6d',
        minHeight : "3rem",
        color: 'white',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '1000',

    }}>
        <div style={{
            marginLeft : '1.5rem'
        }}>
            <img src='/Lion_Images.jpeg' alt='Lion Images' width='80px' height='80px' style={{
                borderRadius:'50%',
                marginRight : '10px',
            }} />
        </div>
        <div style={{
            display :'flex',
            gap : '2rem',
            marginRight : '1.5rem',
            fontWeight  : 'bold',
            fontSize    : "1.4rem",
        }}>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/help-us'>HELP US</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            <NavLink to='/users'>USERS</NavLink>
        </div>
    </div>
  )
}

export default Navbar
