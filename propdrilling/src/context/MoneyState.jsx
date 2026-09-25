import React from 'react'
import MyContext from './Mycontext'

const MoneyState = (props) => {
    let money=100000;
    let myName = "MOHD ZIYA";
    let address="223 SITKAHAN TANDA";
  return (
    <MyContext.Provider value={{money, myName, address}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MoneyState
