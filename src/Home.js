import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
  
        <div className='home__container'>
            <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                
            />
            <div className="home__row">
                <Product
                 title="The Lean Startup: How Constant
                    Innovation Creates Radicaly Successful
                    Businesses Paperback"
                 price={29.99} 
                 image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                 rating = {5} 
                />
                

              

                <Product
                 title='Kenwood KMIX Stand Mixer for
                    Baking, Stylish Kitchen Mixer with
                    K-beater'
                 price={239.0} 
                 image="https://m.media-amazon.com/images/I/51phvy7cpKL._AC_UY327_FMwebp_QL65_.jpg"
                 rating = {5} 
                />
                
            
                
            </div>

            <div className="home__row">
            <Product
               
                title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends"
                price={199.99}
                rating={3} 
                image="https://m.media-amazon.com/images/I/61e0vvMItLL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
               
                title="Echo Studio + Amazon Smart Plug, Works with Alexa - Smart Home Starter Kit"
                price={98.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/91Nc+ETy25L._AC_UY327_FMwebp_QL65_.jpg"

            />
                <Product
                    
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)"
                    price= {598.99}
                    //  Silver (4th Generation)"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81+OdxRLJOL._AC_UY327_FMwebp_QL65_.jpg"
                />
                </div>

            <div className="home__row">
                <Product
                
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3} 
                image="https://m.media-amazon.com/images/I/41QlkHl7EdL._AC_SS250_.jpg"
                />
               
            </div>

        </div>
    </div>
  )
}

export default Home