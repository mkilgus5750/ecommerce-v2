import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Img } from '~/utils/styles'

const HeadjointGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(filter: { productType: { eq: "Headjoint" } }){
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <div className="headjoint_grid_container">
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <div key={id} className="p-2">
            <div className="bg-indigo-200 p-4 text-gray-500 border rounded-lg">
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile &&
                  (<Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />)}
                <p>{title}</p>
                <p className="text-indigo-900 text-xl pt-4 pb-4">{getPrice(firstVariant.price)}</p>
              </Link>
            </div>
          </div>
        ))
        : <p>No Products found!</p>}
    </div>
  )
}

export default HeadjointGrid