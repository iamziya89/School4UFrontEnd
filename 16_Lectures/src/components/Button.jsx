import React from 'react'

const Button = ({func}) => {
    // console.log(func);
    
  return (
    <div>
      <button onClick={func}>Click Me</button>
    </div>
  )
}

export default Button
