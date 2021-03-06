import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      className="h-64"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div className="grid pb-4 lg:grid-cols-2 lg:col-gap-4">
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <div>
        <p>
          {item.title}
          {`  `}
          {item.variant.title === !'Default Title' ? item.variant.title : ''}
        </p>

        <p>Quantity: {item.quantity}</p>
        <button
          className="p-2 mt-2 mb-2 bg-red-500 border rounded border-red-500"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default LineItem
