import Header from "./Header"

const App=()=>{
  // let fruits=["Mango", "Banana", "Apple","Papaya","Orange"]
  let elm=<h4>Heading 5</h4>
  return(
    <div>
      {/* {
        fruits.map(function(items){
          return <h2 style={{backgroundColor:"red",color:"black",padding:"2rem",margin:"1rem"}}>{items}</h2>
        })
      } */}
      <Header title="Mohd Ziya Shameem"/>
      <Header title={elm}/>
    </div>
  )
}
export default App;