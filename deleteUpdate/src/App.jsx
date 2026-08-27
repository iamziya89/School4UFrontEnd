import { useState } from "react";


const App = () =>{
  const[students, setStudents] = useState([
    "Babu Bhai",
    "Raju",
    "Danish",
    "Meethu",
    "Absar",
    "Faraz",
    "Amaan Pahalwan",
    ...value
  ])
  const [value, setValue]=useState([])
  function deleteList(index){
    const copyArr = [...students];
    copyArr.splice(index, 1)
    setStudents(copyArr)
  }
  function addList(){
    setStudents(value)
  }

  return(
    <div>
      <h1>Deleting Arrays</h1>
      <ul>
        {
          students.map((items, index)=>(
            <li key={index}>
              {items}
              <button onClick={()=>deleteList(index)}>Delete</button>
            </li>

          ))
        }
      </ul>
      <input type="text"
      onChange={(e)=>setValue(e.target.value)}
      value={value}
       />
      <button onClick={addList}>Add</button>
    </div>
  )
}
export default App;