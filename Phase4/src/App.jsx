import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // async function fetchAPI(){
  //   let response =await fetch('https://jsonplaceholder.typicode.com/users');
  //   let data     =response.json();
  //   console.log(data);
  // }

  // async function fetchAPI() {
  //   let response =await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response);
  // }

  // const config = {
  //   url : 'https://jsonplaceholder.typicode.com/users',
  //   // header : {
  //   //   Accept : 'application/json'
  //   // },
  //   // timeout : '500'
  //   params : {
  //     name : 'Ziya',
  //     age  : 30
  //   }
  // }

  const [user, setUser] = useState([]);

  const fetchAPI = async () =>{
      const response = await axios('https://6a785123f0f1cdf392244dc9.mockapi.io/users')
      setUser(response.data);
  }
  
  const postData = async () =>{
    const response = await axios({
      url : 'https://6a785123f0f1cdf392244dc9.mockapi.io/users',
      method : 'post',
      data : {
        name : 'Mohammad Ziya Shameem',
        age  : 25,
      }
    });
    console.log(response);
    

  }
  






  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center gap-4 bg-black text-white'>
      <h1 className='font-bold text-2xl'>API Fetch & JSON</h1>
      <button className='border py-2 px-4 rounded-2xl bg-amber-400 text-black font-bold cursor-pointer' onClick={fetchAPI}>Click Me To Fetch Data !</button>
      <button className='border py-2 px-4 rounded-2xl bg-amber-400 text-black font-bold cursor-pointer' onClick={postData}>Click Me To POST Data !</button>
      {
        user.map((userDetails)=>{
          return(
            <div className='rounded-2xl border-2 py-2 px-4 bg-gray-500 text-center content-center' key={userDetails.id}>
              <h3>{userDetails.name}</h3>
              <h4>{userDetails.age}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
