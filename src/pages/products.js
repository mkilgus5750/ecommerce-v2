import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="grid justify-center text-4xl">All Inventory</h1>
    <ProductGrid />
  </>
)

export default IndexPage
