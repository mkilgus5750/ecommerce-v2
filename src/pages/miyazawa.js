import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import { Img } from '~/utils/styles'
import Items from '../components/Items/Items'
import Item from '../components/Item/Item'
import Seo from '../components/seo'

const MiyazawaPage = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(filter: { vendor: { eq: "Miyazawa" } }) {
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

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <React.Fragment>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Items title="Miyazawa">
        {data.allShopifyProduct ? (
          data.allShopifyProduct.edges.map(edge => (
            <Item
              key={edge.node.id}
              edge={edge}
              price={getPrice(edge.node.variants[0].price)}
            />
          ))
        ) : (
          <p>No Products found!</p>
        )}
      </Items>
    </React.Fragment>
  )
}

export default MiyazawaPage
