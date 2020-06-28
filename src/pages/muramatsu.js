import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import MuramatsuGrid from '~/components/MurumatsuGrid'

const MuramatsuPage = () => (
  <>
    <SEO title="Muramatsu" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="grid justify-center text-4xl">Muramatsu</h1>
    <MuramatsuGrid />
  </>
)

export default MuramatsuPage
