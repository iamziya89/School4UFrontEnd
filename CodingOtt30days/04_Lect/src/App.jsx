

const App=()=>{
  const myName="Mohd Ziya"
  console.log(myName);
  
  return(
    <>
      <div style={
        {
          padding: "24px"
        }
      }>
        <h2 style={{
          fontFamily :'sans-serif',
          fontFamily: 100
        }}>{myName} Welcome To The Lecture 4</h2>
        <p style={{
          fontFamily :'verdana',
          fontSize :60
        }}>www.codingott.com</p>
        <button style={{
          padding : "8px 24px",
          border : 'none',
          backgroundColor:"dodgerblue",
          color : 'white',
          fontWeight : 'bold',
          borderRadius:'8px'
        }} onMouseOver={()=>alert("Hi Mohd Ziya Shameem")}>Test</button>
      </div>
    </>
  )
}
export default App;