import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel="See What's On Offer" />
        <Hero/>
      
    </div>
  )
}

export default page
