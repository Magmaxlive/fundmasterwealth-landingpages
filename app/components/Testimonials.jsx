import { AvatarIcon, Stars } from './icons';

const DEFAULT_QUOTES = [
  {
    text: '“Go talk to the guys atFundmaster because they will set you up with goals that will achieve your end result, which is buying a house.”',
    name: 'First Home Buyers',
    location: 'Auckland',
    language: 'English',
  },
  {
    text: '“Other brokers declined me. I saw aFundmaster ad on Facebook and reached out. They worked really hard on my mortgage and got it sorted.”',
    name: 'Fundmaster Client',
    location: 'Auckland',
    language: 'Punjabi',
  },
  {
    text: '“My application was one of the toughest, but Rochelle, Dave and the team stood by us and got us into our first home. Highly recommendFundmaster.”',
    name: 'Vineet',
    location: 'Auckland',
    language: 'English',
  },
];

const DEFAULT_STATS = [
  { value: '10,000+', label: 'Kiwi families helped' },
  { value: '$2B+',    label: 'In lending settled' },
  { value: '15+',     label: 'Lender partners' },
  { value: '13',      label: 'Years in business' },
];

export default function Testimonials({
  eyebrow = 'Real journeys',
  heading = 'They started where you are.',
  sub = 'Real people. Real first homes. Real journeys.',
  lede = "You don't need to have everything figured out before you begin. Hear from first-home buyers who worked withFundmaster Wealth to move from uncertainty to owning their home.",
  quotes = DEFAULT_QUOTES,
  ratingScore = '5.0',
  ratingTitle = 'Google Rating',
  ratingSub = 'Based on 232+ reviews',
  stats = DEFAULT_STATS,
}) {
  return (
    <section className="section section--paper">
      <div className="wrap center">
        <div className="rv" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {heading ? <h2>{heading}</h2> : null}
          {sub ? <p className="sub">{sub}</p> : null}
          {lede ? <p className="lede">{lede}</p> : null}
        </div>

        {quotes && quotes.length > 0 && (
          <div className="tstm">
            {quotes.map((q) => (
              <figure className="quote rv" key={q.text}>
                <Stars />
                <p>{q.text}</p>
                <figcaption className="quote__by">
                  <AvatarIcon />
                  <div>
                    <b>{q.name}</b>
                    <span>{q.location}<span className="vlang">{q.language}</span></span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {ratingScore ? (
          <div className="rating rv">
            <Stars />
            <div className="rating__score">{ratingScore}</div>
            <div className="rating__meta"><b>{ratingTitle}</b>{ratingSub}</div>
          </div>
        ) : null}

        {stats && stats.length > 0 && (
          <div className="stats rv">
            {stats.map((s) => (
              <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
