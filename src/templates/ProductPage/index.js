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
      <div className="grid p-4 mt-2 text-gray-500 bg-indigo-200 border rounded lg:col-gap-4 lg:grid-cols-2 lg">
        <Img
          fluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.images[0].id}
          alt={product.title}
        />
        <div>
          <h1 className="pb-4">{product.title}</h1>
          <div
            className="pt-4 pb-4 "
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
