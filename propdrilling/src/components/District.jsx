import React, { useContext } from 'react'
import Tahseel from './Tahseel'
import MyContext from '../context/Mycontext'
// import MyState from '../context/MyState'

const District = () => {
    const {money,name, val, setVal} =useContext(MyContext)
  return (
    <>
      <h2>District Level</h2>
      <Tahseel />
      Name : {name} <br />
      Money : {money} <br />
      val : {val} <br />
      SetVal : {setVal(2037417)}

    </>
  )
}

export default District
