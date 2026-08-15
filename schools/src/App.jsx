import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Teachers from './components/Teachers';
import Holiday from './components/Holiday';
import Contactus from './components/Contactus';
import NotFound from './components/NotFound';
const App= () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teacher' element={<Teachers />} />
        <Route path='/holiday' element={<Holiday />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;