import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <h2>LOGO</h2>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
