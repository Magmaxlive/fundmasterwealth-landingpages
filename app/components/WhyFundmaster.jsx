const ITEMS = [
  {
    title: 'Access to multiple lenders',
    text: 'Explore lending options from a range of lenders.',
    svg: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    title: 'Experienced mortgage advisers',
    text: 'Get guidance from advisers who understand the lending process.',
    svg: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    title: 'Personalised guidance',
    text: 'Your advice is based on your income, deposit, goals and circumstances.',
    svg: <path d="M12 2l2.4 6.2L21 9.2l-4.8 4.4 1.3 6.4L12 16.8 6.5 20l1.3-6.4L3 9.2l6.6-1z" />,
  },
  {
    title: 'Application to settlement',
    text: 'Get support through the lending journey, from initial assessment to settlement.',
    svg: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
];

export default function WhyFundmaster() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="center rv" style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
          <p className="eyebrow">WhyFundmaster Wealth</p>
          <h2>Get advice before you sign anything.</h2>
          <p className="sub">Your first home deserves a well-thought-out plan.</p>
          <p className="lede">Buying your first home is a major financial decision. Having the right advice early can help you approach it with greater clarity and confidence.</p>
        </div>

        <div className="why rv">
          {ITEMS.map((i) => (
            <div className="why__item" key={i.title}>
              <div className="why__ico"><svg viewBox="0 0 24 24">{i.svg}</svg></div>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
