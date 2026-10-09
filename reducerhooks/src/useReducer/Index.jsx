import React, { useRef, useState } from 'react'

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
    let test=() =>{
        console.log(input.current.value);
    }

  return (
    <div>
      {/* <h3 ref={title}>useRef Hooks in React</h3> */}
      <input ref={input} type="text" />
      <button onClick={test}>Click Me!</button>
    </div>
  )
}

export default Index
