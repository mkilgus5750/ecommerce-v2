import React from 'react'
import MiyazawaGrid from '~/components/MiyazawaGrid'
import SEO from '~/components/seo'

const MiyazawaPage = () => (
  <>
    <SEO title="Miyazawa" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="grid justify-center text-4xl">Miyazawa</h1>
    <MiyazawaGrid />
  </>
)

export default MiyazawaPage
