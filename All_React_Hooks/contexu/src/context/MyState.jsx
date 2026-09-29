import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = (props) => {
    let obj={
        Add : "Golf Course Road Gurugram",
        company : "C5 Intelligence",
        type    : "Market Reasearch"
    }
    const [name, setName] =useState("MOHD ZIYA SHAMEEM")
  return (
    <MyContext.Provider value={{obj,name, setName}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
