import React from "react";

const Navbar=({title, num, link})=>{
    // console.log(props);
    
    return(
        <>
            <h2>{title}</h2>
            <h2>{link}</h2>
            <h2>{num}</h2>
        </>
    )
}
export default Navbar

