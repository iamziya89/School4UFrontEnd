import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.imageURL} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
    </div>
  )
}

export default Card
