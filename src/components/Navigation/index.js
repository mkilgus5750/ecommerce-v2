import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { Outline } from '../../components/Icons/Icons.js'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
			<div>
				<Link to='/cart'>
					
					<div className="w-12 h-12 p-2 border border-black rounded mb-2">
						<Outline.ShoppingCart />
					</div>
				</Link>
			</div>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
