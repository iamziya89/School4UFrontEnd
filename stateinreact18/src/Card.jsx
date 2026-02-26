import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Card=()=>{
    let [count, setCount]=useState(0);
    useEffect(()=>{
        console.log("main useEffect ke ander hu....");
    },[])


    function increment(){
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(prev=>prev+1);
        // setCount(prev=>prev+1);
        // setCount(prev=>prev+1);
        setCount(prev=>prev+1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Card