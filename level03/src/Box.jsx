import React from 'react'
import './App.css'
const Box = ({name="Default Parameters"}) => {
    // console.log(props.name);
    
  return (
    <div className='box'>
      <h2>MOHD ZIYA</h2>
      <h3>Web Developer</h3>
      <h4>{name}</h4>
    </div>
  )
}

export default Box
