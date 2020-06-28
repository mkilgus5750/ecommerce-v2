import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import Body from '~/components/BodyGrid'

const BodyGrid = () => (
  <>
    <SEO title="Body" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="">Body</h1>
    <Body />
  </>
)

export default BodyGrid