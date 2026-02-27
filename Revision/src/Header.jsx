import React from 'react'

const Header = (props) => {
    function change(){
      props.func("Data Le ke ja bhai")
    }
  return (
    <div>
      <h3 onClick={change}>Header</h3>
    </div>
  )
}

export default Header
