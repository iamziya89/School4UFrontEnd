import React, { use, useRef, useState } from 'react'

const Index = () => {
    // const title=useRef(null)
    // const btn=useRef(null)
    // function test(){
    //     title.current.style.color='red';
    //     title.current.style.background="black";
    //     title.current.style.marginTop="1rem"
    //     btn.current.style.marginTop="5rem"
    // }
    let input=useRef(null)
    const [name, setName] =useState("")
    let test=() =>{
       setName(input.current.value);
    }

  return (
    <div>
      {/* <h3 ref={title}>useRef Hooks in React</h3> */}
      <input value={name} ref={input} type="text" onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={test}>Click Me!</button>
      <h1>{name}</h1>
    </div>
  )
}

export default Index
