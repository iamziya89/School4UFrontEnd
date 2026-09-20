import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic_user = () => {
    // console.log("UseParams = ",useParams());

    const {slug} =useParams()
    
  return (
    <div style={{
        marginTop : '4rem'
    }}>Slug = {slug}</div>
  )
}

export default Dynamic_user
