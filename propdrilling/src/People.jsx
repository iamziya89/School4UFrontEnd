import React, { useContext } from 'react'
// import MyState from './context/MyState'
import MyContext from './context/Mycontext';

const People = () => {
    let data = useContext(MyContext);
    console.log(data);
    
  return (
    <>
      <h2>PEOPLES</h2>
      <h3>{data.money}</h3>
      <h3>{data.name}</h3>
      <h3>{data.setVal(100002535)}</h3>
      <h3>{data.val}</h3>
    </>
  )
}

export default People
