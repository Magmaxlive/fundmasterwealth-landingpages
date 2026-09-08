import { AvatarIcon, Stars } from './icons';

const QUOTES = [
  {
    text: '“Go talk to the guys at Fundmaster because they will set you up with goals that will achieve your end result, which is buying a house.”',
    name: 'First Home Buyers',
    location: 'Auckland',
    language: 'English',
  },
  {
    text: '“Other brokers declined me. I saw a Fundmaster ad on Facebook and reached out. They worked really hard on my mortgage and got it sorted.”',
    name: 'Fundmaster Client',
    location: 'Auckland',
    language: 'Punjabi',
  },
  {
    text: '“My application was one of the toughest, but Rochelle, Dave and the team stood by us and got us into our first home. Highly recommend Fundmaster.”',
    name: 'Vineet',
    location: 'Auckland',
    language: 'English',
  },
];

const STATS = [
  { value: '10,000+', label: 'Kiwi families helped' },
  { value: '$2B+',    label: 'In lending settled' },
  { value: '15+',     label: 'Lender partners' },
  { value: '13',      label: 'Years in business' },
];

export default function Testimonials() {
  return (
    <section className="section section--paper">
      <div className="wrap center">
        <div className="rv" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p className="eyebrow">Real journeys</p>
          <h2>They started where you are.</h2>
          <p className="sub">Real people. Real first homes. Real journeys.</p>
          <p className="lede">You don't need to have everything figured out before you begin. Hear from first-home buyers who worked with FundMaster Wealth to move from uncertainty to owning their home.</p>
        </div>

        <div className="tstm">
          {QUOTES.map((q) => (
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

        <div className="rating rv">
          <Stars />
          <div className="rating__score">5.0</div>
          <div className="rating__meta"><b>Google Rating</b>Based on 232+ reviews</div>
        </div>

        <div className="stats rv">
          {STATS.map((s) => (
            <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
