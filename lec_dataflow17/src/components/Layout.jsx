import React, { useState } from "react";
import Hero from "./Hero";
import About from "./About";
const Layout=(props)=>{
    console.log(props)
    const [data, setData]=useState(10000)
    return(
        <div style={{backgroundColor:'gray', width:'100vw', padding:'2rem'}}>
            Layouts
            <Hero count={props.count} data={data}/>
            <About count={props.count} data={data}/>
        </div>
    )
}
export default Layout