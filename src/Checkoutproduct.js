import React from 'react'
import './Checkoutproduct.css'

function Checkoutproduct(image, title, price, rating) {
  return (
    <div className="checkoutproduct">
      <img src={image} alt=''/>
    </div>
  )
}

export default Checkoutproduct
