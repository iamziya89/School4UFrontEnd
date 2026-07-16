import React from 'react'
import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={image1} alt="" width="300px" height="200px" />
      <img src={image2} alt="" width="300px" height="200px" />
      <img src={image3} alt="" width="300px" height="200px" />
    </div>
  )
}

export default Hero
