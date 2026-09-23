import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'
import BorrowingPowerCalculator from '../components/BorrowingPowerCalculator'
import WhyFundmaster from '../components/WhyFundmaster'
import Testimonials from '../components/Testimonials'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Home Loan Rate Review | FundMaster Wealth',
  description:
    "That 'great' home loan rate might not be so great. Get a free rate and loan review across 15+ NZ lenders — structure, fees and timing, not just the headline number.",
  icons: { icon: '/images/favicon.ico' },
};

const rate_cards = [
  {
    num: '01',
    title: 'What rate would you actually get?',
    text: "Advertised and approved aren't always the same number.",
    svg: (
      <>
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Fixed, floating, or split?',
    text: 'Getting this right can matter more than chasing a slightly lower rate.',
    svg: (
      <>
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </>
    ),
  },
  {
    num: '03',
    title: "What's the real cost over the term?",
    text: 'Fees and break costs can outweigh a lower rate.',
    svg: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </>
    ),
  },
  {
    num: '04',
    title: 'Is now the right time to lock in?',
    text: "Timing matters. We'll walk you through it.",
    svg: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

const WHY_ITEMS = [
  {
    title: 'Rate comparisons across 15+ lenders',
    svg: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    title: 'Advice on structure, not just pricing',
    svg: (
      <>
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </>
    ),
  },
  {
    title: 'No pressure, no obligation',
    svg: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'One conversation, the full picture',
    svg: (
      <>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </>
    ),
  },
];

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
                <TrustStrip/>
                <ClarityCards
                    eyebrow="Before You Choose a Lender"
                    heading="What rate tables don't show you"
                    sub=""
                    lede=""
                    cards={rate_cards}
                    ctaLabel="Review My Rate"
                    ctaHref="#check"
                />
                <BorrowingPowerCalculator/>
                 <WhyFundmaster
                    eyebrow = 'Why Fundmaster Wealth'
                    heading = 'We Compare More Than the Number'
                    lede = ''
                    sub = 'We understand your situation, explain your options, and help you make confident financial decisions.'
                    items={WHY_ITEMS}
                    />

                <Testimonials/>
                <SiteFooter ctaLabel='Compare my rate' blurb="Don't Choose a Rate Without Seeing the Full Picture.
Get a free rate and loan review with FundMaster Wealth."  />
                
      
    </div>
  )
}

export default page
