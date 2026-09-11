import { Tick, ArrowRightIcon } from './icons';
import LeadForm from './LeadForm';

const DEFAULT_INCLUDES = [
  'Estimated borrowing position',
  'Deposit options',
  'Loan options',
  'First home buyer pathways',
  'Clear next steps',
];

const DEFAULT_TITLE = (
  <>Your First Home Starts With The <span className="grad-text">Right Mortgage</span></>
);

export default function Hero({
  eyebrow = 'First Home Buyers · New Zealand',
  title = DEFAULT_TITLE,
  sub,
  body = 'Get clarity on your borrowing, deposit and home-buying options before you start house hunting.',
  includesTitle = 'Your free first home buyer check includes',
  includes = DEFAULT_INCLUDES,
  ctaLabel = 'Get My Free First Home Buyer Check',
  ctaHref = '#check',
  bgImage = '/images/house-exterior.jpg',
  bgAlt = '',
  form,
}) {
  const formProps = {
    source: 'hero',
    id: 'check',
    ...(form || {}),
  };

  return (
    <section className="hero" id="top">
      <div className="hero__bg"><img src={bgImage} alt={bgAlt} /></div>
      <span className="hero__glow hero__glow--a"></span>
      <span className="hero__glow hero__glow--b"></span>

      <div className="wrap hero__grid">
        <div className="rv">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className='capitalize'>{title}</h1>
          {sub ? <p className="hero__sub">{sub}</p> : null}
          {body ? <p className="hero__body">{body}</p> : null}

          {includes && includes.length > 0 && (
            <>
              {includesTitle ? <p className="includes__title">{includesTitle}</p> : null}
              <ul className="includes">
                {includes.map((item) => (
                  <li key={item}><Tick />{item}</li>
                ))}
              </ul>
            </>
          )}

          <a className="btn btn--primary btn--lg" href={ctaHref}>
            {ctaLabel}
            <ArrowRightIcon />
          </a>
        </div>

        <LeadForm {...formProps} />
      </div>
    </section>
  );
}
