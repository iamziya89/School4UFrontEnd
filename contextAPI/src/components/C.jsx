import React, { useContext } from 'react'
import { MyContext } from '../Mycontext'

const C = () => {
  const data = useContext(MyContext);
  return (
    <div className="bg-yellow-500 text-white p-10 w-15 h-15 m-2">
      
      C
      <p>{data}</p>
    </div>
  )
}

export default C
