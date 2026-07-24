import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import App from './App.jsx'

const router=createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children:[
            {
              path    :'',
              element :<Home/>
            },
            {
              path    :'about',
              element : <About/>
            },
            {
              path    :'contact',
              element : <Contact/>
            }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
