const CARDS = [
  {
    num: '01',
    title: 'How much can I borrow?',
    text: 'Understand your potential borrowing range based on your income, deposit and financial commitments.',
    svg: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </>
    ),
  },
  {
    num: '02',
    title: 'How much deposit do I need?',
    text: 'Explore what may be possible with your current savings and other potential deposit pathways.',
    svg: (
      <>
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <circle cx="12" cy="12.5" r="2.6" />
        <path d="M6 6V4h12v2" />
      </>
    ),
  },
  {
    num: '03',
    title: 'What can I actually afford?',
    text: 'Look beyond the purchase price and understand repayments, lending costs and your overall financial position.',
    svg: (
      <>
        <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </>
    ),
  },
  {
    num: '04',
    title: 'Which loan could suit me?',
    text: 'Explore lending options based on your circumstances and long-term goals.',
    svg: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </>
    ),
  },
];

export default function ClarityCards() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="center rv" style={{ maxWidth: '820px', margin: '0 auto 56px' }}>
          <p className="eyebrow">Where most people get stuck</p>
          <h2>Buying your first home can feel complicated.</h2>
          <p className="sub">You don't have to figure it all out yourself.</p>
          <p className="lede">Before you start scrolling through property listings, get clarity on the numbers that matter.</p>
        </div>

        <div className="grid grid--4">
          {CARDS.map((c) => (
            <div className="card rv" key={c.num}>
              <div className="card__ico"><svg viewBox="0 0 24 24">{c.svg}</svg></div>
              <span className="card__num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="center rv" style={{ marginTop: '48px' }}>
          <a className="btn btn--navy btn--lg" href="#check">Get My Free First Home Buyer Check</a>
        </div>
      </div>
    </section>
  );
}
