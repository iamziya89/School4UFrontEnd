import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { useState } from "react";

const App=()=>{
  const [data, setData] = useState(0);
  function kabutar(data1){
    console.log(data1);
  }
  return(
    <div>
      <Header data={data} funct={kabutar} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  )
}
export default App;