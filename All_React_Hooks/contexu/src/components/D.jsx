import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const D = () => {
    let data=useContext(MyContext)
    console.log(data);
    
    
    
  return (
    <div>
      <h1>D Components</h1>
      <h2>{data.obj.Add}</h2>
      <h2>{data.name}</h2>

    </div>
  )
}

export default D
