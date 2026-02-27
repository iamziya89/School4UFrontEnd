import React from 'react'
import Hero from './Hero'
import About from './About'
import { useState } from 'react';

const Layout = ({data}) => {
    console.log(data);
    const [count, setCount]=useState(55)
    
  return (
    <div>
        Layout
      <Hero data={data} count={count}/>
      <About data={data} count={count}/>
    </div>
  )
}

export default Layout
