import React, { useState } from 'react'
import MyContext from './Mycontext'

const MyState = (props) => {
    let money=10000;
    let name ="MOHD ZIYA SHAMEEM";
    const [val, setVal] =useState(5000)
  return (
    <MyContext.Provider value={{money, name, val, setVal}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
