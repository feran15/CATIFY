import React from 'react'
import CatBag from '../Image/Black.jpg'
import Canvas from '../Image/Canvas.avif'
import Message from '../Image/Messenger_Bag.avif'
import Style from '../Image/Stylish.jpg'
import Whiskers from '../Image/Whiskers.avif'
const CartBags = () => {
  return (
    <div>
       <div className="head">
      <div className="border-line"></div>
         <h6 className='best text-center '> BEAUTIFUL CAT BAGS</h6>
         <div className="border-right"></div>
      </div>
      <div className="CartBag p-4 mt-4 d-flex gap-2 ms-3">
        <div className="bag-img">
          <img className='Bag-cat' src={CatBag} alt="" />
          <span className="bag-img text-center">
            <p>Designer Leather Cat Ear & Whiskers</p>
            <p><span className='number'>$36.99</span> <span className='colored-number'>$32.99</span></p>
          </span>
        </div>
        <div className="cat-handbag">
          <img width={250} src={Canvas} alt="" />
          <span className='text-center'>
            <p>Canvas Cat Handbag</p>
            <p><span className='number'>$13.99</span> <span className='colored-number'>$11.99</span></p>
          </span>
        </div>
        <div className="cool-cat">
          <img width={250} src={Message} alt="" />
          <span className="text-center">
            <p>Cool Cat Messenger Bag</p>
            <p><span className='number'>$ 19.99</span> <span className='colored-number'> $ 13.99</span></p>
          </span>
        </div>
        <div className="stylish-cat">
          <span className="text-center">
            <img width={242} src={Style} alt="" />
            <p>Stylish Cat Moon Leather Handbag</p>
            <p><span className='number'>$ 48.22</span> <span className='colored-number'> $ 34.99</span></p>
          </span>
        </div>
        <div className="whiskers">
          <span className="text-center">
            <img width={251} src={Whiskers} alt="" />
            <p>Cat Whiskers Wings Leather Handbag</p>
            <p><span className='number'>$ 48.22</span> <span className='colored-number'> $ 34.99</span></p>
          </span>
        </div>
      </div>
      <div className="btn-carrier d-flex justify-content-center">
        <button className='btnn'>VIEW ALL</button>
      </div>
    </div>
  )
}

export default CartBags
