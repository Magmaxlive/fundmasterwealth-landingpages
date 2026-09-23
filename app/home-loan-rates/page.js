import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel='Compare My Rate Options'/>
         <Hero
                    eyebrow="Home loan · New Zealand"
                title={<>That ‘Great’ Home Loan Rate Might<span className="grad-text"> Not be So Great</span></>}
                body="The lowest rate on a comparison site isn't always the lowest cost once you look at the whole loan"
                includesTitle="Free Rate & Loan Review"
                includes={[
                  "We compare across the market, not just one bank",
                  "Advice based on your actual numbers",
                  "No pressure, no obligation",
                  "No pressure, no obligation"
                ]}
                ctaLabel="Compare My Rate"
                form={{
                  source: 'home_loan_rate-form',
                  id: 'check',
                  head: 'Compare My Rate',
                  note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                  submitLabel: 'Compare My Rate',
                  dataLayerFormName: 'home_loan_rate',
                  showDeposit: false,
                }}
                />
      
    </div>
  )
}

export default page
