import { useState } from 'react'

// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState("MOHD ZIYA")
  console.log(count);

  function kabutar(x){
    console.log(x);
  }
  
  return (
    <div>
      <Header count={count} funct={kabutar}/>
      <Layout count={count}/>
      <Footer count={count}/>
      
    </div>
  )
}

export default App
