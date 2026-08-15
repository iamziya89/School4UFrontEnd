import React, { useContext } from 'react'
import E from './E'
import F from './F'
import { MyContext } from '../Mycontext'

const B = () => {
  
  return (
    <div className='bg-blue-500 w-[440px] h-[215px] border my-auto'>
      B
      <E/>
      
      <F/>
    </div>
  )
}

export default B
