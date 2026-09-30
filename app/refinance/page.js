import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel='Review My Mortgage' />
        <Hero
            eyebrow="Mortgage · New Zealand"
            title={<>Is it Time to Refinance Your<span className="grad-text"> Mortgage?</span></>}
            body="Your situation's probably changed. Has your mortgage kept up?"
            includesTitle="Free Mortgage Review"
            includes={[
                "Compare your loan to what's out there today",
                "Your refinancing and restructuring options",
                "See if restructuring could save you money",
            ]}
            ctaLabel="Review My Mortgage"
            form={{
                source: 'Refinance',
                id: 'check',
                head: 'Review My Mortgage',
                note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                submitLabel: 'Review My Mortgage',
                dataLayerFormName: 'Refinance',
                showDeposit: false,
            }}
                />
      
    </div>
  )
}

export default page
