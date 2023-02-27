import {Link} from 'react-router-dom'

import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <img
      src="https://res.cloudinary.com/nagaphani/image/upload/v1677305401/miniprojectr/no_order_legcfl.png"
      alt="empty cart"
      className="empty-cart-image"
    />
    <h1>No Order Yet!</h1>
    <p>Your cart is empty. Add something from the menu.</p>
    <Link to="/">
      <button type="button" className="order-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCart
