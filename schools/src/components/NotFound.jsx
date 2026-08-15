import React from 'react'

const NotFound = () => {
  return (
    <div style={{
      width : "100%",
      background:'#f5f5f5',
      height: "100vh",
      display:"flex",
      flexDirection:"column",
      gap : "2rem",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <img src="./Images/page_not_found.svg" alt="" width="420" />
      <h2 style={{
        fontSize : 25,
        color :'#3f3d56',
      }}>404 || Not Found Page</h2>
    </div>
  )
}

export default NotFound
