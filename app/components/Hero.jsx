import { Tick, ArrowRightIcon } from './icons';
import LeadForm from './LeadForm';

const INCLUDES = [
  'Estimated borrowing position',
  'Deposit options',
  'Loan options',
  'First home buyer pathways',
  'Clear next steps',
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg"><img src="/images/house-exterior.jpg" alt="" /></div>
      <span className="hero__glow hero__glow--a"></span>
      <span className="hero__glow hero__glow--b"></span>

      <div className="wrap hero__grid">
        <div className="rv">
          <p className="eyebrow">First Home Buyers · New Zealand</p>
          <h1>Not sure if you're ready to buy your <span className="grad-text">first home?</span></h1>
          <p className="hero__sub">Find out what you could afford, your options, and your next step.</p>
          <p className="hero__body">Get clarity on your borrowing, deposit and home-buying options before you start house hunting.</p>

          <p className="includes__title">Your free first home buyer check includes</p>
          <ul className="includes">
            {INCLUDES.map((item) => (
              <li key={item}><Tick />{item}</li>
            ))}
          </ul>

          <a className="btn btn--primary btn--lg" href="#check">
            Get My Free First Home Buyer Check
            <ArrowRightIcon />
          </a>
        </div>

        <LeadForm source="hero" id="check" />
      </div>
    </section>
  );
}
