  import React from "react";
  import './App.css';
  import Card from "./Card";
  
  const App=()=>{
    return(
      <div className="grid_1">
        <Card title="Pahla" age={1}/>
        <Card title="Doosra" age={2}/>
        <Card title="Teesra" age={3}/>
        <Card title="Chautha" age={4}/>
        <Card title="Paanchwa" age={5}/>
      </div>
    )
  }
  export default App;
