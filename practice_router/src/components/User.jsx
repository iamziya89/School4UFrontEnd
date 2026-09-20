import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user =[
        {id:1, name:'superman',gmail:'superman@gmail.com'},
        {id:2, name:'spiderman',gmail:'spiderman@gmail.com'},
        {id:3, name:'batman',gmail:'batman@gmail.com'},
        {id:4, name:'ironman',gmail:'ironman@gmail.com'}
    ]
  return (
    <div style={{
                    marginTop :'4rem'
                }}>
        {
            user.map((data)=>(
                <div key={Math.random()}>
                    <Link to={`/users/${data.id}`}>{data.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default User
