import React from 'react'
import useMystore from '../store'

const Navbar = () => {
    const data1 = useMystore();
    console.log(data1);
    
  return (
    <div>
      Navbar
      <p>{data1.name}</p>
      <p>{data1.count}</p>
    </div>
  )
}

export default Navbar
