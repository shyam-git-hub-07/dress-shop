import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand2.png'
import arrow_icon from '../Assets/arrow2.png'
import hero_image from '../Assets/hero5.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="img" />
            </div>
            <p><span className='spana'>Collection</span></p>
            <p><span className='spanb'>for everyone</span></p>
          </div>
          <div className="hero-latest-btn">
            <a href="#new-collections"><div>Latest Collection</div></a>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="img" />
        </div>
    </div>
  )
}
