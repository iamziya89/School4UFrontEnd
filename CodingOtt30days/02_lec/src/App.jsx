 
 import './App.css'
 const App=()=>{
  const myname="Mohd Ziya"
  const roll = 15
  const sub="Maths"
  const product={
    title : "red Shirt",
    price :1500,
    discount : "20%"
  }
  const arr=["mohd", "maruti", "suzuki"]
  let date=new Date()
  const p='What is your name.....'
  return(
    <>
      <h2>Coding Ott {myname} {roll}</h2>
      <p>www.codingott.com {sub}</p>
      <p>{JSON.stringify(product)}</p>
      <p>{arr.toLocaleString()}</p>
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleString()}</p>
      <input type="text" placeholder={p} />
    </>
  )
 }
 export default App;