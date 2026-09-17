import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header/>
        <Hero
            eyebrow="Home loan · New Zealand"
        title={<>Found a Home Loan You Like? <span className="grad-text">There Might be a Better One</span></>}
        body="You could go straight to your bank. Or you could see what else is out there first."
        includesTitle="Free Home Loan Comparison"
        includes={[
          "See what's actually available to you",
          "Compare options across 15+ lenders",
          "Understand what fits your situation",
          "Get a clear next step, not just a quote"
        ]}
        ctaLabel="Compare My Loan"
        form={{
          source: 'home_loan_form',
          id: 'check',
          head: 'Compare My Loan',
          note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
          submitLabel: 'Compare My Loan',
          dataLayerFormName: 'home_loan',
          showDeposit: false,
        }}
        />
      
    </div>
  )
}

export default page
