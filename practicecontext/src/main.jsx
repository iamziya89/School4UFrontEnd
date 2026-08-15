import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContext } from './Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <Mycontext.Provider value={"My Context API"}>
      <App />
  </Mycontext.Provider>,
)
