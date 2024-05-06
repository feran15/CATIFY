import React, {useState} from 'react'

const Footer = () => {
  const [user, SetUser] = useState()
  const [loader, setLoader] = useState(false)
      function handleInput(e) {
        SetUser(e.target.value)
        e.preventDefault();
      }
      const handeleClick = () => {
        setLoader(true)
        setTimeout(() => {
          alert('your account has been created')
          console.log(user)
          setLoader(false)
        }, 2000)
        }
        return (
    <div>
        <div className="footetr-body d-flex" style={{backgroundColor:'rgb(242,242,242)'}}>
        <div className="footer">
          <ul className="footer-list p-5">
            CUSTOMER SERVICE
            <li className="footer-item mt-4">About Us</li>
            <li className="footer-item">Blog</li>
            <li className="footer-item">FAQ</li>
            <li className="footer-item">Return Policy</li>
            <li className="footer-item">Shipping</li>
            <li className="footer-item">Track Order Status</li>
            <li className="footer-item">Contact Us</li>
          </ul>
        </div>
        <div className="Follow mt-5 ms-5">
          <ul className="follow-list">
            FOLLOW US
            <li className="follow-item">Facebook</li>
            <li className="follow-item">Twitter</li>
            <li className="follow-item">Pintrest</li>
            <li className="follow-item">Instagram</li>
          </ul>
        </div>
        <div className="sign">
        <h6>NEWSLETTER</h6>

        <p>Suscribe now to get updates, special offers and discounts</p>
        <span className='details d-flex gap-1'>
        <input className='input-rounded p-2' type="email" placeholder='Your email address' required  onInput={handleInput}/>
        <button className='sub text-white  px-2' onClick={handeleClick} disabled = {loader}>
          {loader ? <div className='loading p-2'></div> : 'SUBSCRIBE'}
          </button>
        </span>
        <p className='spam'>Don't worry we don't spam</p>
        </div>
      </div>

         
    </div>
  )
}

export default Footer

