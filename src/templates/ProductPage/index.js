import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import './styles.css'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <div>
      <SEO title={product.title} description={product.description} />
          <div className="mt-2 bg-indigo-200 text-gray-500 p-4 border rounded lg">
            <div className="pb-4">{product.title}</div>
              <div className="pb-4">
                {product.images.map(image => (
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    key={image.id}
                    alt={product.title}
                  />
                ))}
              </div>
              <div>
                Description:
                <div
                  className="pb-4 pt-4 "
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
                <ProductForm product={product} />
              </div>
          </div>
      </div>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
