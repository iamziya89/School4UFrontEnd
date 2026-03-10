import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // const arr = ["Mohd", "Anas", "Arbaz", "Shameem"]
  let arr=[['A ',' B',' C',' D'], ['AA ','BB ','CC ','DD ','EE']]

  return (
    <>
      <div>
        <h2>List Rendering</h2>
        {
          arr.map((item)=>{
            return(
              <>
                {
                  item.map((nested)=>{
                    return <h3>{nested}</h3>
                  })
                }
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default App
