import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'

const Clarity_cards = [
    {
        num: '01',
        title: 'Compares the whole market',
        text: "Not just one bank's products. All of it.",
        svg: (
            <>
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </>
        ),
    },
    {
        num: '02',
        title: "Explains what you're actually signing",
        text: "Fees, structure, break costs, before you commit to any of it.",
        svg: (
            <>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
            </>
        ),
    },
    {
        num: '03',
        title: 'Works for you, not the bank',
        text: "Independent advice puts the recommendation on your side.",
        svg: (
            <>
                <path d="M12 22s-8-4.5-8-11a5 5 0 019-3 5 5 0 019 3c0 6.5-8 11-8 11h-2z" />
            </>
        ),
    },
    {
        num: '04',
        title: 'Sees it through',
        text: "From the first call to settlement day, someone in your corner.",
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
            <ClarityCards
                eyebrow="Before You Choose a Broker"
                heading="What a good broker actually does"
                sub=""
                lede=""
                cards={Clarity_cards}
                ctaLabel="Speak to an Adviser"
                ctaHref="#check"
            />
      
    </div>
  )
}

export default page
