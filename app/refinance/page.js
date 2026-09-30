import React from 'react'
import PageEffects from '../components/PageEffects'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ClarityCards from '../components/ClarityCards'

const Clarity_cards = [
    {
        num: '01',
        title: 'Has your rate fallen behind?',
        text: "What was competitive a few years ago might not be anymore.",
        svg: (
            <>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </>
        ),
    },
    {
        num: '02',
        title: 'Has your situation changed?',
        text: "New job, bigger family, extra income, your loan should reflect where you are now.",
        svg: (
            <>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </>
        ),
    },
    {
        num: '03',
        title: 'Is your structure still right?',
        text: "What suited you then might not suit you now.",
        svg: (
            <>
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </>
        ),
    },
    {
        num: '04',
        title: 'Could you access more equity?',
        text: "Refinancing isn't just about rate. It can open up options too.",
        svg: (
            <>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </>
        ),
    },
]

function page() {
  return (
    <div>
        <PageEffects/>
        <Header ctaLabel='Review My Mortgage' />
        <Hero
            eyebrow="Mortgage · New Zealand"
            title={<>Is it Time to Refinance Your<span className="grad-text"> Mortgage?</span></>}
            body="Your situation's probably changed. Has your mortgage kept up?"
            includesTitle="Free Mortgage Review"
            includes={[
                "Compare your loan to what's out there today",
                "Your refinancing and restructuring options",
                "See if restructuring could save you money",
            ]}
            ctaLabel="Review My Mortgage"
            form={{
                source: 'Refinance',
                id: 'check',
                head: 'Review My Mortgage',
                note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
                submitLabel: 'Review My Mortgage',
                dataLayerFormName: 'Refinance',
                showDeposit: false,
            }}
                />
        <TrustStrip/>
        
        <ClarityCards
            eyebrow="The signs"
            heading="Signs Your Mortgage Needs a Second Look"
            sub=""
            lede=""
            cards={Clarity_cards}
            ctaLabel="Check My Options"
            ctaHref="#check"
        />
      
    </div>
  )
}

export default page
