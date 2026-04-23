import React from 'react';
import 'animate.css';
import { BookOpenText, Contact, Home, Pencil, User2 } from 'lucide-react';
import Button from './components/shared/Button';

const App=()=>{
  return(
    <div className='bg-gray-200 min-h-screen py-12'>
      <div className='bg-white w-[60%] p-12 rounded-2xl mx-auto shadow-lg animate__animated animate__backInDown'>
        <h1 className='text-4xl font-bold'>Welcome Back !!!</h1>
        <p className='text-black/70 mt-2 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus numquam aliquid voluptatem facere a obcaecati qui, facilis corporis beatae animi in ducimus atque dolores illum quae ut eaque quod voluptatibus minus neque quos unde aliquam. Similique sapiente vero provident adipisci praesentium facere officia aspernatur consequuntur recusandae, delectus quibusdam aperiam! Eius.</p>
        <div className='mt-4 flex gap-6 flex-wrap'>
          <Button theme="one">Home</Button>
          <Button theme="two">Register</Button>
          <Button theme="three">Sign up</Button>
          <Button theme="four">About</Button>
          <Button theme="five"></Button>
        </div>
      </div>
    </div>
  )
}
export default App;