import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'

const Loan_cards = [
  {
    num: '01',
    title: 'What can you actually borrow?',
    text: "Not what a calculator guesses. What you'd actually get approved for.",
    svg: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Which lender fits you?',
    text: 'Every bank lends differently. Some are a better match for your circumstances than others.',
    svg: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
  },
  {
    num: '03',
    title: 'What loan structure works best?',
    text: 'Fixed, floating, split, offset, there are more options than you realise.',
    svg: (
      <>
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </>
    ),
  },
  {
    num: '04',
    title: 'What should you watch out for?',
    text: "Fees, break costs, and fine print that don't show up on a comparison table.",
    svg: (
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
  },
];

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
        <TrustStrip/>
        <ClarityCards
        eyebrow="Before You Choose a Lender"
        heading="A Few Things Worth Knowing First"
        sub=""
        lede=""
        cards={Loan_cards}
        ctaLabel=" Check My Loan "
        ctaHref="#check"
        />
      
    </div>
  )
}

export default page
