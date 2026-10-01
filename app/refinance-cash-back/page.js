import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel='Check Cash-Back Offers'/>
        <Hero
            eyebrow="Mortgage · New Zealand"
            title={<>That Refinance Cash Back Isn't as Free<span className="grad-text"> as It Sounds</span></>}
            body="Here's what it can actually cost you once the rate and terms are factored in."
            includesTitle="Free Refinance & Cash-Back Review"
            includes={[
                "See current cash-back offers across lenders",
                "Find out what conditions might be attached",
                "Understand what you'd actually walk away with",
                "No pressure, no obligation"
            ]}
            ctaLabel="Check Cash-Back Offers"
            form={{
                source: 'Refinance Cashback Offers',
                id: 'check',
                head: 'Free Refinance & Cash-Back Review',
                note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                submitLabel: 'Check Cash-Back Offers',
                dataLayerFormName: 'Refinance',
                showDeposit: false,
            }}
                        />
      
    </div>
  )
}

export default page
