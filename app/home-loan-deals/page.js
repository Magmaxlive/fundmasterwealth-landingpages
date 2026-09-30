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
    title: 'Home Loan Deals Review | FundMaster Wealth',
    description:
        "Cash-back, fee waivers and rate discounts look great on paper — but what does the deal actually cost you? Compare current home loan offers across 15+ NZ lenders with a free FundMaster Wealth review.",
    icons: { icon: '/images/favicon.ico' },
}

const Clarity_cards = [
    {
        num: '01',
        title: "What's actually included?",
        text: "Cash-back, fee waivers, rate discounts as every lender packages it differently.",
        svg: (
            <>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </>
        ),
    },
    {
        num: '02',
        title: "What's it costing you elsewhere?",
        text: "A bigger upfront offer can come with a higher rate down the line.",
        svg: (
            <>
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </>
        ),
    },
    {
        num: '03',
        title: "Does it suit your structure?",
        text: "A great deal on the wrong structure isn't a great deal.",
        svg: (
            <>
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-6h6v6" />
            </>
        ),
    },
    {
        num: '04',
        title: "What else is out there right now?",
        text: "Deals change often. We'll show you what's current.",
        svg: (
            <>
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 14" />
            </>
        ),
    },
]

const WHY_ITEMS = [
    {
        title: 'Current offers compared across 15+ lenders',
        svg: (
            <>
                <rect x="3" y="8" width="18" height="12" rx="2" />
                <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
                <path d="M3 13h18" />
            </>
        ),
    },
    {
        title: "Straight answers on what a deal actually costs you",
        svg: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </>
        ),
    },
    {
        title: 'No pressure, no obligation',
        svg: (
            <>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </>
        ),
    },
    {
        title: 'Guidance from comparison through to settlement',
        svg: (
            <>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </>
        ),
    },
]

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
            <TrustStrip/>
            <ClarityCards
                eyebrow="Before You Choose a Lender"
                heading="What to check before you chase a deal"
                sub=""
                lede=""
                cards={Clarity_cards}
                ctaLabel="Compare Deals"
                ctaHref="#check"
            />
            <BorrowingPowerCalculator/>
            
            <WhyFundmaster
                eyebrow = 'Why Fundmaster Wealth'
                heading = 'We Look at the Whole Deal'
                lede = ''
                sub = 'We understand your situation, explain your options, and help you make confident financial decisions.'
                items={WHY_ITEMS}
                />

            <Testimonials/>
             <SiteFooter ctaLabel='See the Offers' blurb="Before You Sign Up for a Deal, Know What it Actually Costs.
            Get a free home loan deal comparison with Fundmaster Wealth."  />
    </div>
  )
}

export default page
