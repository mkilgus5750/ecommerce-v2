import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import MiyazawaGrid from '~/components/MiyazawaGrid'

const MiyazawaPage = () => (
  <>
    <SEO title="Miyazawa" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="grid justify-center text-4xl">Miyazawa</h1>
    <MiyazawaGrid />
  </>
)

export default MiyazawaPage
