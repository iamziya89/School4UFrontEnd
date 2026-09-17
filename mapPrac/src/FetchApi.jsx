import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [apidata, setApidata] =useState([])
    useEffect(()=>{
        const fetchdata = async () =>{
            const api= await fetch('https://jsonplaceholder.typicode.com/todos');
            const data=await api.json()
            setApidata(data)
        }
        fetchdata();
    }, [])
  return (
    <div>
      <div>{apidata.map((items)=>(
        <h4 key={Math.random()}>{items.title}</h4>
      ))}</div>
    </div>
  )
}

export default FetchApi
