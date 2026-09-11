import BorrowingPowerCalculator from '../components/BorrowingPowerCalculator';
import ClarityCards from '../components/ClarityCards';
import DepositPathways from '../components/DepositPathways';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MortgageReady from '../components/MortgageReady';
import PageEffects from '../components/PageEffects';
import SiteFooter from '../components/SiteFooter';
import Testimonials from '../components/Testimonials';
import TrustStrip from '../components/TrustStrip';
import WhyFundmaster from '../components/WhyFundmaster';

const DEBT_CARDS = [
  {
    num: '01',
    title: 'paying high interest?',
    text: 'Your current rate may be costing you more than necessary.',
    // Percent sign — the classic "interest rate" glyph.
    svg: (
      <>
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="7.5" cy="7.5" r="2.5" />
        <circle cx="16.5" cy="16.5" r="2.5" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Managing multiple repayments?',
    text: 'Multiple debts can make your finances harder to manage.',
    // Stacked cards / statements.
    svg: (
      <>
        <rect x="4" y="7" width="14" height="14" rx="2" />
        <path d="M8 3h10a2 2 0 012 2v12" />
      </>
    ),
  },
  {
    num: '03',
    title: 'watching your debt grow?',
    text: 'Interest and repayments can add up quickly.',
    // Trending-up arrow chart.
    svg: (
      <>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </>
    ),
  },
  {
    num: '04',
    title: 'future plans on hold?',
    text: 'Debt can affect your ability to buy, invest or build wealth.',
    // Clock — waiting / on hold.
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 15 15" />
      </>
    ),
  },
];

const DEBT_PATHS = [
  {
    title: "what you're currently paying",
    text: 'Understand your repayments and interest costs.',
    // Dollar in a circle.
    svg: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.5a4 4 0 00-3.5-2h-.5a3 3 0 000 6h1a3 3 0 010 6h-.5a4 4 0 01-3.5-2" />
        <line x1="12" y1="4.5" x2="12" y2="7.5" />
        <line x1="12" y1="16.5" x2="12" y2="19.5" />
      </>
    ),
  },
  {
    title: 'where your debt is costing',
    text: 'Identify areas creating unnecessary financial pressure.',
    // Magnifying glass — "identify".
    svg: (
      <>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </>
    ),
  },
  {
    title: 'whether restructuring may help',
    text: 'Explore better ways to structure your debt.',
    // Refresh / re-arrange arrows.
    svg: (
      <>
        <path d="M21 4v6h-6" />
        <path d="M3 20v-6h6" />
        <path d="M3.5 10A9 9 0 0118.4 6.6L21 10" />
        <path d="M20.5 14A9 9 0 015.6 17.4L3 14" />
      </>
    ),
  },
  {
    title: 'how debt affects your future borrowing',
    text: 'Understand how debt could impact future lending.',
    // Padlock — access/restriction.
    svg: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </>
    ),
  },
  {
    title: 'what you could consider doing next',
    text: 'Get practical guidance based on your situation.',
    // Lightbulb — ideas / next steps.
    svg: (
      <>
        <path d="M9 21h6" />
        <path d="M10 17.5v3" />
        <path d="M14 17.5v3" />
        <path d="M7 9a5 5 0 0110 0c0 2.5-2 4-2.5 5.5h-5C9 13 7 11.5 7 9z" />
      </>
    ),
  },
];

const DEBT_STEPS = [
  { title: '01 · Complete the form', text: 'Share a few details about your financial situation.' },
  { title: '02 · We call you', text: 'A FundMaster Wealth adviser learns about your goals.' },
  { title: '03 · We review your options', text: 'We assess your situation and explain what may be possible.' },
  { title: '04 · You decide', text: 'No pressure. No obligation.' },
];

const DEBT_WHY_ITEMS = [
  {
    title: 'Experienced Team',
    text: 'Guidance backed by experience.',
    // Group of people — the "team" glyph.
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
    title: 'Personalised Advice',
    text: 'Advice built around your situation and goals.',
    // Single person — focus on the individual.
    svg: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </>
    ),
  },
  {
    title: 'Clear Communication',
    text: 'Straightforward advice without unnecessary jargon.',
    // Speech bubble — conversation.
    svg: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  },
  {
    title: 'Long-Term Thinking',
    text: "Looking beyond today's debt towards future opportunities.",
    // Compass — direction, looking ahead.
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  },
];

const WEALTH_PILLARS = [
  {
    title: 'KiwiSaver',
    text: 'Build a strategy around your long-term goals.',
    svg: <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />,
  },
  {
    title: 'Property',
    text: 'Explore property and lending strategies.',
    svg: (
      <>
        <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </>
    ),
  },
  {
    title: 'Investments',
    text: 'Build an approach around your goals and risk profile.',
    svg: (
      <>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </>
    ),
  },
  {
    title: 'Retirement',
    text: 'Plan for the retirement lifestyle you want.',
    svg: (
      <>
        <circle cx="12" cy="14" r="4" />
        <line x1="12" y1="4" x2="12" y2="7" />
        <line x1="4" y1="14" x2="7" y2="14" />
        <line x1="17" y1="14" x2="20" y2="14" />
        <line x1="6.34" y1="8.34" x2="8.46" y2="10.46" />
        <line x1="15.54" y1="10.46" x2="17.66" y2="8.34" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </>
    ),
  },
  {
    title: 'Insurance',
    text: "Protect the wealth you're building.",
    svg: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Wealth Planning',
    text: 'Bring your financial decisions together.',
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
];

export default function DebtPage() {
  return (
    <>
      <PageEffects />
      <Header ctaLabel="Talk to an Adviser" />
      <Hero
        eyebrow="Debt Solutions · New Zealand"
        title={<>could you be paying too much on your <span className="grad-text">Debt</span></>}
        body="Your current debt structure may be costing you more than it needs to. Get a free review of your debts and explore ways to improve your repayments, rates or overall position."
        includesTitle="Your free review includes"
        includes={[
          'Current debt review',
          'Interest rate assessment',
          'Repayment review',
          'Restructuring options',
          'Clear next steps',
        ]}
        ctaLabel="Get My Free Debt Review"
        form={{
          source: 'debt_hero',
          id: 'check',
          head: 'Get your free debt check',
          note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
          submitLabel: 'Get My Free Debt Review',
          dataLayerFormName: 'debt_check',
          extraFields: [
            {
              name: 'total_debt',
              label: 'Approximate Total Debt',
              type: 'select',
              placeholder: 'Select range',
              required: true,
              options: [
                'Under $10,000',
                '$10,000 – $25,000',
                '$25,000 – $50,000',
                '$50,000 – $100,000',
                'Over $100,000',
              ],
            },
            {
              name: 'debt_type',
              label: 'Type of Debt',
              type: 'select',
              placeholder: 'Select debt type',
              required: true,
              options: [
                'Credit card',
                'Personal loan',
                'Car loan',
                'Mortgage',
                'Multiple debts',
                'Other',
              ],
            },
          ],
        }}
      />
      <TrustStrip />
      <ClarityCards
        eyebrow="Where most people get stuck"
        heading="Your Debt shouldn't stop you from building wealth"
        sub="Debt can affect your cash flow, borrowing capacity and future financial goals."
        lede="Get clarity on where your debt sits today and what you could do about it."
        cards={DEBT_CARDS}
        ctaLabel="Get My Free Debt Check"
        ctaHref="#check"
      />
      <DepositPathways
        id="review"
        eyebrow="Review Your Debt"
        heading="know what your debt is really costing you"
        sub="We'll review your debt position and help you understand where you stand."
        lede="we'll help you look at"
        paths={DEBT_PATHS}
        ctaLabel="Get My Free Debt Check"
        ctaHref="#check"
        disclaimer=""
      />
      <MortgageReady
        eyebrow = ''
        heading = 'No Complicated Process.'
        lede = 'Getting clarity on your debt can be simple.'
        ctaLabel = 'Talk to a real advisor, Not a call center'
        ctaHref = '#check'
        image = '/images/family-tablet.jpg'
        imageAlt = 'First home buyers reviewing their options with an adviser'
        checks={DEBT_STEPS}
      />
      <WhyFundmaster
        eyebrow = 'WhyFundmaster Wealth'
        heading = 'Personal Advice,Clear Direction. Real people'
        lede = ''
        sub = 'We take the time to understand your situation, explain your options and help you make informed financial decisions.'
        items={DEBT_WHY_ITEMS}
      />
      <Testimonials/>

      <DepositPathways
        id="fixing-debt"
        eyebrow="fixing Debt"
        heading="fixing debt is just the first step"
        sub="Getting your debt under control can create room for bigger financial decisions."
        lede="FundMaster Wealth can help you look at the bigger picture."
        paths={WEALTH_PILLARS}
        ctaLabel="Get My Free Debt Check"
        ctaHref="#check"
        disclaimer=""
      />
      <BorrowingPowerCalculator
        eyebrow="Borrowing Power Calculator"
        heading="What could your borrowing power look like?"
        sub="Check your estimated borrowing power."
        lede="Thinking about buying, refinancing or investing? Get an initial estimate based on your income, expenses and commitments."
        sidebarHeading=""
        sidebarLines={[]}
        sidebarCtaLabel="Check My Borrowing Power"
        sidebarCtaHref="#check"
        formHead="Borrowing Power Calculator"
        submitLabel="Check My Borrowing Power"
      />
      <SiteFooter
          ctaLabel = 'Get My Free Debt Check'
      />
    </>
  );
}
