import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className = 'header'>
        <img 
            className="header
            __logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
       />

        <div 
        className="header__search"> 
            <input
            className="header__searchIn
            put" type="text" />

        </div>

        <div 
        className="header__nav"> 
            <div className='header__option'>
               <span className='header__optionLineOne'>
                Hello Guest 
                </span>
               <span className='header__optionLineTwo'>
                sign in 
                </span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>
                 Returns 
                </span>
                <span className='header__optionLineTwo'>
                &  Orders 
                </span>
           
                 
            </div>

            <div className='header__option'>
               
                <span className='header__optionLineOne'>
                 Your 
                 </span>
                <span className='header__optionLineTwo'>
                 Prime 
                 </span>
           
            </div>

        </div>
        
    </div>
  )
}

export default Header
