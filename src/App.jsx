import React from 'react'
import Nav from './Components/Nav'
import Lowernav from './Components/Lowernav'
import BestSelling from './Components/BestSelling'
import NewProducts from './Components/NewProducts'
import CartBags from './Components/CartBags'
import Collection from './Components/Collection'
import Footer from './Components/Footer'
import Signup from './Components/Signup'

const App = () => {
  return (
    <div className='body' style={{backgroundColor:' rgb(249,249,249)', fontFamily:'Roboto ', overflow:'hidden'}}>
        < Nav />
        < Lowernav />
      < BestSelling />
      <NewProducts />
      <CartBags />
      <Collection />
      <Footer />
   {/* < Signup />  */}
    </div>
  )
}

export default App
