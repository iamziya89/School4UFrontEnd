import { useState } from "react";


function Simpleform(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log("Name : ", name);
        console.log("Email : ", email);
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" value={name}>Name :</label><input type="text" onChange={(e)=>setName(e.target.value)}/>
                <br />
                <label htmlFor="" value={email}>Email :</label><input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Simpleform;