import { useState } from "react";



let Card=({title, age})=>{
    // console.log(props);
    const [count, setCount]=useState(0);
    function increment(){
        setCount(count+1)
    }
    return(
        <div className="grid">
            <h4>{title}</h4>
            <h4>{count}</h4>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Card;