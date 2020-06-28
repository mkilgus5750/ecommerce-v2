import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map((item) => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      {lineItems}
      <h2>Subtotal</h2>
      <p className="pt-2 border-t-2 border-gray-300">
        $ {checkout.subtotalPrice}
      </p>
      <br />
      <h2>Taxes</h2>
      <p className="pt-2 border-t-2 border-gray-300">$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p className="pt-2 border-t-2 border-gray-300">$ {checkout.totalPrice}</p>
      <br />
      <button
        className="bg-yellow-200 p-2 border rounded border-yellow-200"
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>
    </div>
  )
}

export default Cart
