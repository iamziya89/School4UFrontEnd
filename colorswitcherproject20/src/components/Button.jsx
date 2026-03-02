import React from 'react'

const Button = ({color,children}) => {
    console.log(color);
  return (
    <>
        <button
        style={{
            backgroundColor: color,
        }}
        >{children}</button>
    </>
  )
}

export default Button
