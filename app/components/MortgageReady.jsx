import { Tick } from './icons';

const DEFAULT_CHECKS = [
  { title: 'Know your borrowing range', text: 'Understand what you may realistically be able to borrow.' },
  { title: 'Understand your repayments', text: 'Know what your potential mortgage could mean for your budget.' },
  { title: 'Know your deposit position', text: 'Understand how much you have and what other options may be available.' },
  { title: 'Understand your lending options', text: 'Explore options across different lenders and loan structures.' },
  { title: 'Get prepared before making an offer', text: 'Know where you stand before you find the property you love.' },
];

export default function MortgageReady({
  eyebrow = 'Before you start house hunting',
  heading = 'Get your numbers right first.',
  lede = 'A little preparation now can make the home-buying journey much easier.',
  ctaLabel = 'Get Mortgage-Ready',
  ctaHref = '#check',
  image = '/images/family-tablet.jpg',
  imageAlt = 'First home buyers reviewing their options with an adviser',
  checks = DEFAULT_CHECKS,
}) {
  return (
    <section className="section section--paper">
      <div className="wrap calc">
        <div className="rv">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {heading ? <h2>{heading}</h2> : null}
          {lede ? <p className="lede">{lede}</p> : null}
          {ctaLabel ? (
            <div style={{ marginTop: '30px' }}>
              <a className="btn btn--primary btn--lg" href={ctaHref}>{ctaLabel}</a>
            </div>
          ) : null}
          {image ? (
            <div style={{ marginTop: '38px', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={image} alt={imageAlt} />
            </div>
          ) : null}
        </div>

        <ul className="checks rv">
          {checks.map((c) => (
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
