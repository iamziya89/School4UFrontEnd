import React, { useContext } from 'react'
import C from './C'
import D from './D'
import { MyContext } from '../Mycontext'

const A = () => {

  const data = useContext(MyContext)
  
  return (
    <div className='bg-blue-200 w-[440px] h-[215px] border my-auto'>
      A <br />
      {data}
      <C/>
      <D/>
    </div>
  )
}

export default A
