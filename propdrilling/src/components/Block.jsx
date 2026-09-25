import React, { useContext } from 'react'
import Mohallah from './Mohallah'
import MyContext from '../context/Mycontext'

const Block = () => {
    // console.log("useContext : ", useContext(MyContext))
    let data =useContext(MyContext)
    console.log(data)
  return (
    <>
      <h3>Block Level</h3>
      <Mohallah />
      <p>{data.money}</p>
      <p>{data.myName}</p>
      <p>{data.address}</p>
    </>
  )
}

export default Block
