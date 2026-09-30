import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel='Talk to an Adviser' />
        <Hero
                eyebrow="Mortgage · New Zealand"
                title={<>Skip the Bank. Talk to a Mortgage Broker<span className="grad-text"> Who Compares 15+ Lenders</span></>}
                body="One conversation, and you've compared the whole market, not just one bank's own rates."
                includesTitle="Free Adviser Consultation"
                includes={[
                    "Speak with an expert mortgage adviser",
                    "Get guidance across 15+ lenders",
                    "Ask the questions a bank won't answer for you",
                    "No pressure, no obligation"
                ]}
                ctaLabel="Talk to an Advisor"
                form={{
                    source: 'Mortgage Broker',
                    id: 'check',
                    head: 'Talk to an Advisor',
                    note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                    submitLabel: 'Talk to an Advisor',
                    dataLayerFormName: 'mortgage_broker',
                    showDeposit: false,
                }}
                />
            <TrustStrip/>
      
    </div>
  )
}

export default page
