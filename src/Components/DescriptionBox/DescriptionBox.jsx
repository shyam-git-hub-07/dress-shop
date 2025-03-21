import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (177)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an outline platform that facilitate buying and selling of products or services over the internet serves as a virtual marketplace where businesses and individed showcase their products, interact with customers, and conduct transactions without the need for a physical presense. E-commerce websites have gained immense popularity due to their convenial accessbility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services a detailed descriptions, images, prices, and any available varities (e.g., sizes, colors). Each product usually has its own with relevant information.</p>
        </div>
    </div>
  )
}
