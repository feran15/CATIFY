import React from 'react'
import hanger from '../Image/Smartmockups.webp'
import Avocado from '../Image/Avocatdo_3.webp'
import Book from '../Image/Books.webp'
import Welcome from '../Image/Welcome_cat.avif'
const NewProducts = () => {
  return (
    <div>
       <div className="head">
      <div className="border-line"></div>
         <h6 className='best text-center'> NEW PRODUCTS</h6>
         <div className="border-right"></div>
      </div>
          <div className="image-content ">
            <div className="img-context p-4 mt-5 d-flex gap-2">
              <div className="img-a">
                <img className='style-hanger' src={hanger} alt="" />
                <span className='text-center'>
                <p>Black Cat Two Tone Sweatshirt</p>
            <p className='opaque'>₦22,816.00 NGN</p>
                </span>
              </div>
              <div className="img-context2">
                <img className='Avocado-style' src={Avocado} alt="" />
                <span className='text-center'>
                <p>Avocatdo T-Shirt</p>
                <p className='opaque'>₦22,816.00 NGN</p>
                </span>
              </div>
              <div className="img-context3">
                <img width={320} src={Book} alt="" />
                <span className='text-center'>
                <p>All I Need Is Books & Cats Shirt</p>
                <p className='opaque'>from ₦22,816.00 NGN</p>
                </span>
              </div>
              <div className="img-context4">
                <img width={320} src={Welcome} alt="" />
                <span className='text-center'>
                <p>Cute Animal Welcome Home Mat</p>
                <p className='opaque'> ₦14,406.00 NGN</p>
                </span>
              </div>
            </div>
            <div className="butttt d-flex justify-content-center">
              <button className='btnn'>VIEW ALL</button>
            </div>
          </div>
    </div>
  )
}

export default NewProducts
