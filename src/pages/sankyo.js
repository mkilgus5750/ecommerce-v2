import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import SankyoGrid from '~/components/SankyoGrid'

const Sankyo = () => (
  <>
    <SEO title="Sankyo" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="grid justify-center text-4xl">Sankyo</h1>
    <SankyoGrid />
  </>
)

export default Sankyo
