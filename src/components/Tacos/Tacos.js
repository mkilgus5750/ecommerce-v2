import React from 'react'
import slug from 'slug'
import Img from 'gatsby-image'
import Seo from '../seo'

export function Tacos({ children, title, description }) {
  return (
    <div id={slug(title)}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <div className="tacos-grid grid-gap padding rows columns">{children}</div>
    </div>
  )
}

export function Taco({ edge }) {
  return (
    <div>
      <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
      <h3>{edge.node.frontmatter.title}</h3>
      <h3>{edge.node.frontmatter.description}</h3>
      <Link to={edge.node.fields.slug}>Learn more</Link>
    </div>
  )
}

export function TacosPage() {
  ;<div>
    <Seo title="TACO TUESDAY" />
    <Tacos
      title="Terrific Tacos"
      description="Every day is taco ipsum tuesday. Fish tacos with cabbage slaw and a side of chips and guac. TACOS!! It’s taco Tuesday Monday. It’s a wonderful morning for breakfast tacos. Ooh, with diced onions and a pinch of cilantro. Um, Tabasco?"
    >
      {data.allMarkdownRemark.edge.map(edge => (
        <Taco key={edge.node.id} edge={edge} />
      ))}
    </Tacos>
  </div>
}
