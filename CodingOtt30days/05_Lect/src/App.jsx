import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
const App=()=>{
  return(
    <>
     <div>
      <h2 style={{
        height:"15px",
        width : 20
      }}>Mohd Ziya</h2>
      <p>www.codingott.com</p>
      <Navbar/>
      <Footer/>
      <Section/>
     </div>
    </>
  )
}
export default App;