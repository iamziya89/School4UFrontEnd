import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import User from './components/User'
import Dynamic_user from './components/Dynamic_user'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/help-us' element={<Help />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<User />} />
        <Route path='/users/:slug' element={<Dynamic_user />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
