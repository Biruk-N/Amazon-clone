import React from 'react'
import './Checkoutproduct.css'

function Checkoutproduct(image, title, price, rating) {
  return (
    <div className="checkoutproduct">
      <img className='checkoutproduct__image' src={image} alt=''/>
      
      <div className='checkoutproduct__info'>
        
        <p className='checkproduct__title'>
          {title}

        </p>

        <p className='checkproduct__price'>
          <small>$</small>
          <strong> {price} </strong>
        </p>

        <div className='checkoutproduct__rating'>
          {rating}
        </div>

      </div>
    </div>
  )
}

export default Checkoutproduct
