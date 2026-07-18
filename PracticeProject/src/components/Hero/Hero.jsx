import React from 'react'
import './Hero.css'
import Card from '../Card/Card'
import bmw from '../../assets/bmw.jpg'
import lam from '../../assets/lami.jpg'
import mar from '../../assets/mar.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <Card name="BMW" price="$ 2,00, 000" imageURL={bmw} />
      <Card name="Lamborghini" price="$ 3,00, 000" imageURL={lam} />
      <Card name="Mercedes" price="$ 4,00, 000" imageURL={mar} />
    </div>
  )
}

export default Hero
