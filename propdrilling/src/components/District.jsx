import React from 'react'
import Block from './Block'

const District = ({money, name}) => {
  return (
    <>
      <h3>District Level</h3>
      <Block money={money} name={name} />
    </>
  )
}

export default District
