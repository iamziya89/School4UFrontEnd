import React, { useState } from 'react'
import About from './About'
import Hero from './Hero'
const Layout = (props) => {
    console.log(props);
    const [count, setCount]=useState(55);
    
  return (
    <div className='bg-red-200 mt-2 text-center h-[25vh]'>
      <h4>Layout Components</h4>
      <About data={props.data} count={count}/>
      <Hero data={props.data} count={count} />
    </div>
  )
}

export default Layout
