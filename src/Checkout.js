import React from 'react'
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal'

function Checkout() {

const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="" />
        </div>

        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
        </div>
        
        <div className="checkout__right">
            <Subtotal />
            <h2>
                The subtotal will go there
            </h2>    
            {basket

            .map(item => ( 

            <Checkoutproduct
                // id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}

               
            /> 
            ))}



        </div>

    </div>
  )
}

export default Checkout
