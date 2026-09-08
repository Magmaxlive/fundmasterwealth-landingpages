const PATHS = [
  {
    title: 'KiwiSaver',
    text: 'Understand whether your KiwiSaver could contribute towards your first home.',
    svg: <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />,
  },
  {
    title: 'First Home Grant',
    text: 'Find out whether you may be eligible for any available government support.',
    svg: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Family Support',
    text: 'Explore whether family assistance could form part of your home-buying strategy.',
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
    title: 'Existing Savings',
    text: 'Understand how your current savings could work towards your purchase.',
    svg: (
      <>
        <path d="M21 12V7H5a2 2 0 010-4h14v4" />
        <path d="M3 5v14a2 2 0 002 2h16v-5" />
        <path d="M18 12a2 2 0 000 4h4v-4z" />
      </>
    ),
  },
  {
    title: 'Low-Deposit Lending',
    text: 'Explore whether lending options with a lower deposit may be available to you.',
    svg: (
      <>
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </>
    ),
  },
];

const sectionStyle = {
  background: 'linear-gradient(165deg,#0b1a33 0%,#132f57 55%,#10405c 100%)',
  color: '#e8f0f8',
};

export default function DepositPathways() {
  return (
    <section className="section" style={sectionStyle} id="pathways">
      <div className="wrap">
        <div className="center rv" style={{ maxWidth: '840px', margin: '0 auto 52px' }}>
          <p className="eyebrow" style={{ color: 'var(--teal)' }}>Deposit pathways</p>
          <h2 style={{ color: '#fff' }}>Your deposit doesn't have to be the only starting point.</h2>
          <p className="sub" style={{ color: 'var(--teal)' }}>There may be more options than you think.</p>
          <p className="lede" style={{ color: 'rgba(232,240,248,.78)' }}>Your deposit is an important part of buying your first home, but it may not be the only factor. Depending on your circumstances, potential pathways may include:</p>
        </div>

        <div className="paths">
          {PATHS.map((p) => (
            <div className="path rv" key={p.title}>
              <div className="path__ico"><svg viewBox="0 0 24 24">{p.svg}</svg></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="center rv" style={{ marginTop: '46px' }}>
          <a className="btn btn--primary btn--lg" href="#check">See What I May Qualify For</a>
          <p className="disclaimer">Eligibility criteria, lending requirements and government schemes can change. Your adviser can help you understand what may apply to your circumstances.</p>
        </div>
      </div>
    </section>
  );
}
