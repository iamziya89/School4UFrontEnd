import React from 'react'
import { Home,Pencil, BookOpenText, Contact } from 'lucide-react';

const Button = ({children="Button", theme}) => {
    console.log(theme);
  if(theme==="one")  
  return (
    <button className='bg-indigo-600 text-white px-8 py-2 rounded transition duration-300 hover:bg-indigo-700 hover:scale-110 cursor-pointer flex items-center gap-2'>
                <Home className='w-4 h-4'/>
                {children}</button>
  )
  if(theme==="two")
    return(
<button className='bg-rose-600 text-white flex items-center gap-2 px-8 py-2 rounded transition duration-300 hover:bg-rose-700 hover:scale-110 cursor-pointer'>
            <Pencil className='w-4 h-4'/>
            {children}</button>)

if(theme==="three")
    return(
 <button className='bg-amber-600 text-white flex items-center gap-2 px-8 py-2 rounded transition duration-300 hover:bg-amber-700 hover:scale-110 cursor-pointer'>
            <BookOpenText className='w-4 h-4'/>
            {children}</button>
)

if(theme==="four")
    return(
<button className='bg-green-600 text-white flex items-center gap-2 px-8 py-2 rounded transition duration-300 hover:bg-green-700 hover:scale-110 cursor-pointer'>
            <Contact className='w-4 h-4' />
            {children}</button>
)

}

export default Button
