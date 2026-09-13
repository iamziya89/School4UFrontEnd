import { useState } from "react";


const App=() =>{
  const [photo, setPhoto]=useState([])
 async function test(){
  try{
    const resp =await fetch('https://jsonplaceholder.typicode.com/photos')
    const data =await resp.json()
    console.log(data);
    setPhoto(data)
  }
  catch(err){
    console.log(err);
  }
 }
  return(
    <div>
      <h2>Fetching API and Data</h2>
      <button onClick={test}>Click Me</button>
      <div>
        {
          photo.map((items, index)=>{
            return(
              <div key={index}>
                <img src={items.url} alt="" />
                <h3>{items.title}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App;