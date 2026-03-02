import React, { useState } from 'react'

const Header = (props) => {
  props.funct("MOHAMMAD ZIYA SHAMEEM");

  let [data, setData]=useState(0)
  console.log(data, setData);
   function increment(){
     setData(data=>data+1)
   }
  
  return (
    <div>
      <h3 onClick={increment}>Header {data}</h3>
    </div>
  )
}

export default Header
