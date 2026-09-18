import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'
import WhyFundmaster from '../components/WhyFundmaster'
import BorrowingPowerCalculator from '../components/BorrowingPowerCalculator'
import Testimonials from '../components/Testimonials'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Home Loan Comparison | FundMaster Wealth',
  description:
    "Found a home loan you like? There might be a better one. Get a free home loan comparison across 15+ NZ lenders — no pressure, no obligation.",
  icons: { icon: '/images/favicon.ico' },
};

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

const WHY_ITEMS = [
  {
    title: 'We compare across the market, not just one bank',
    text: 'Options from 15+ lenders, so you can see what actually fits.',
    svg: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    title: 'Advice based on your actual numbers',
    text: 'Your income, deposit and commitments  not a generic calculator.',
    svg: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </>
    ),
  },
  {
    title: 'No pressure, no obligation',
    text: "A clear next step, not a hard sell. You decide what happens next.",
    svg: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Support from application through to settlement',
    text: 'One adviser stays with you across the whole process.',
    svg: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
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

        <BorrowingPowerCalculator/>

        <WhyFundmaster
        eyebrow = 'Why Fundmaster Wealth'
        heading = 'One Adviser. 15+ Lenders. No Guesswork'
        lede = ''
        sub = 'We take the time to understand your situation, explain your options and help you make informed financial decisions.'
        items={WHY_ITEMS}
        />

        <Testimonials/>
        <SiteFooter
          blurb = 'Before You Choose a Lender, See What Else is Out There.Get a free home loan comparison with FundMaster Wealth.'
        ctaLabel = ' Compare My Loan'
        />
      
    </div>
  )
}

export default page
