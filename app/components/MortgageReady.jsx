import { Tick } from './icons';

const CHECKS = [
  { title: 'Know your borrowing range', text: 'Understand what you may realistically be able to borrow.' },
  { title: 'Understand your repayments', text: 'Know what your potential mortgage could mean for your budget.' },
  { title: 'Know your deposit position', text: 'Understand how much you have and what other options may be available.' },
  { title: 'Understand your lending options', text: 'Explore options across different lenders and loan structures.' },
  { title: 'Get prepared before making an offer', text: 'Know where you stand before you find the property you love.' },
];

export default function MortgageReady() {
  return (
    <section className="section section--paper">
      <div className="wrap calc">
        <div className="rv">
          <p className="eyebrow">Before you start house hunting</p>
          <h2>Get your numbers right first.</h2>
          <p className="lede">A little preparation now can make the home-buying journey much easier.</p>
          <div style={{ marginTop: '30px' }}>
            <a className="btn btn--primary btn--lg" href="#check">Get Mortgage-Ready</a>
          </div>
          <div style={{ marginTop: '38px', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="/images/family-tablet.jpg" alt="First home buyers reviewing their options with an adviser" />
          </div>
        </div>

        <ul className="checks rv">
          {CHECKS.map((c) => (
            <li key={c.title}>
              <Tick />
              <div><strong>{c.title}</strong><p>{c.text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
