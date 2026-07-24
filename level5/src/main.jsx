import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    Children:[{
      path : '',
      element : <Home />
    },
    {
      path : '/About',
      element : <About />
    },
    {
      path : '/Contact',
      element : <Contact />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
