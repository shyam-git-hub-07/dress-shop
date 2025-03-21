import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/hero2.png'
// import exclusive_image from '../Assets/exclusive.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>only on best sellers products</p>
            <a href="#new-collections"><button>Check Now</button></a>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
