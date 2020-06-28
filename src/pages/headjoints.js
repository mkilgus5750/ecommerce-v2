import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import Headjoints from '~/components/HeadjointGrid'

const HeadjointsGrid = () => (
  <>
    <SEO title="Miyazawa" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="">Miyazawa</h1>
    <Headjoints />
  </>
)

export default HeadjointsGrid