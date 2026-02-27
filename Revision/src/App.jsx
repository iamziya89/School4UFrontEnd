import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
// import Layout from './Layout'
function App() {
  const [data, setData]=useState('Mohammad Ziya Shameem')
  // console.log(data,setData);
  function kabutar(data){
    setData(data)
  }
  
  return (
    <>
      <Header data={data} func={kabutar}/>
      <Footer data={data}/>
      <Layout data={data}/>
    </>
  )
}

export default App
