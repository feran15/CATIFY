import React from 'react'
import Bag from '../Image/Black.jpg'
import Home from '../Image/Home Decor.jpg'
import Gold from '../Image/Gold Collection.jpg'
import Under from '../Image/Under £10.jpg'
const Collection = () => {
  return (
    <div>
      <div className="collection-body">
        <h2 className='text-center mt-4'>Collection List</h2>
        <div className="collection p-3 d-flex gap-4">
            <img width={230} src={Bag} alt="" />
           <img width={230} src={Home} alt="" />
           <img className='Gold' width={230} src={Gold} alt="" />
           <img className='socks' width={230} src={Under} alt="" />
        </div>
        <div className="catify-theme p-4 ms-4">
          <h2>Cat Themed Gifts from Catify Co</h2>
          <p className='mt-5'> Thank you for visiting us! We love sharing the passion of cats to the world through our cat lovers accessories, home cat decor and cat themed clothing . These are great items for cat owners, cat lovers and more. These can be great cat themed gifts for others or yourself. From a community that adores cats we are here to take care of all your feline needs. Shop now and check out our great selection and don't forget to follow us to get exclusive deals and offers! <br /> <br />
We have a wide selection of items that are going to make your day that much better. Our hope is that these items be gifts for yourself or someone you like. It delights us whenever we see other smile, whether it's because they think the cat sweater they got was adorable or if they found the perfect cat themed gift for a crazy cat lady. <br /> <br />

In addition to providing quality products we have the best customer service. We are available for direct contact on our Facebook and Instagram or give us a mail through our contact form. Whether this is a question about a product or need help picking out a gift for other cat lovers, or something in between. Need to just chat about kitties? Give us an email, we'll respond and let you know how we feel! <br /> <br />

We also have a great selection accessories especially cat pins!</p>
        </div>
      </div>
    </div>
  )
}

export default Collection
