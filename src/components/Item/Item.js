import React from 'react'
import { Link } from 'gatsby'
import { Img } from '~/utils/styles'

export default function Item({ edge, price }) {
  return (
    <div className="p-4 text-gray-500 bg-indigo-200 border rounded-lg">
      <Link to={`/product/${edge.node.handle}/`}>
        {edge.node.images[0] && edge.node.images[0].localFile && (
          <Img
            fluid={edge.node.images[0].localFile.childImageSharp.fluid}
            alt={edge.node.handle}
          />
        )}
        <p>{edge.node.title}</p>
        <p className="pt-4 pb-4 text-xl text-indigo-900">{price}</p>
      </Link>
    </div>
  )
}
