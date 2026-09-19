import { AvatarIcon, Stars } from './icons';

const DEFAULT_QUOTES = [
  {
    text: 'We had no idea where to start. Fundmaster Wealth walked us through every step and got us approved when two banks had already said no. We moved in six weeks later.',
    name: 'Priya & Raj',
    location: 'Auckland',
  },
  {
    text: "I wanted to grow my portfolio but didn't know how to structure the lending. Fundmaster wealth helped me access equity from my existing home to buy my second property.",
    name: 'David T',
    location: 'Christchurch',
  },
  {
    text: "Refinancing saved us over $400 a month. The team then built us a full wealth plan  KiwiSaver, insurance, the works. Genuinely life-changing advice.",
    name: 'Amelia S',
    location: 'Wellington',
  },
];

const DEFAULT_STATS = [
  { value: '10,000+', label: 'Kiwi families helped' },
  { value: '$2B+',    label: 'In lending settled' },
  { value: '15+',     label: 'Lender partners' },
  { value: '13',      label: 'Years in business' },
];

export default function Testimonials({
  eyebrow = 'Testimonials',
  heading = 'What Our Clients Have to Say',
  sub = 'Real people. Real first homes. Real journeys.',
  lede = "You don't need to have everything figured out before you begin. Hear from first-home buyers who worked with Fundmaster Wealth to move from uncertainty to owning their home.",
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
