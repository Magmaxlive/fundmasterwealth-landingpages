import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'

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
    </div>
  )
}

export default page
