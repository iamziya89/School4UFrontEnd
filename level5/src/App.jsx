import './App.css'

function App() {
  let data =["Apple", "Macbook", "Facebook", "Twitter", "Instagram"]
  return (
    <>
    <h1>MOHD ZIYA</h1>
      <ul>
        {
          data.map((items, index)=>{
            <li>{items}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
