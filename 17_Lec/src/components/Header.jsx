import React from 'react'

const Header = (props) => {
    props.funct("Kabutar Ja ja")
    
  return (
    <div className='bg-blue-400 h-[10vh] text-center'>
      <h2>Header Components</h2>
    </div>
  )
}

export default Header
