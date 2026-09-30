import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel="See What's On Offer" />
        <Hero
            eyebrow="Home loan · New Zealand"
            title={<>Home Loan Deals Sound Great.<span className="grad-text"> Are They Actually Good?</span></>}
            body="Cash-backs and offers look great on paper. The right deal is the one that works for your whole loan."
            includesTitle="Free Deal Comparison"
            includes={[
                "See current offers across 15+ lenders",
                "Understand what each deal actually includes",
                "Compare against the overall cost of the loan",
                "Find out what you genuinely qualify for"
            ]}
            ctaLabel="See the Offers"
            form={{
                source: 'Home Loan Deals',
                id: 'check',
                head: 'Compare My Deal',
                note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                submitLabel: 'Compare My Deal',
                dataLayerFormName: 'home_loan_deal',
                showDeposit: false,
            }}
            />
      
    </div>
  )
}

export default page
