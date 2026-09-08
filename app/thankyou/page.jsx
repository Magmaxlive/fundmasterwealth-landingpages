import ThankYouGreeting from './ThankYouGreeting';

export const metadata = {
  title: 'Thank You | Fundmaster Wealth',
  description:
    "Thanks for requesting your free First Home Buyer Check. A Fundmaster Wealth adviser will be in touch shortly.",
  robots: { index: false, follow: false },
};

const TY_CSS = `
.ty-scope{background:var(--paper)}
.ty-scope .hdr{position:absolute;inset:0 0 auto;z-index:10;padding:22px 0;background:none;box-shadow:none;backdrop-filter:none}
.ty-scope .hdr__in{display:flex;align-items:center;justify-content:space-between;gap:20px}
.ty-scope .hdr__logo img{height:64px;width:auto}
.ty-scope .hdr__back{font-size:14px;font-weight:600;color:rgba(234,242,250,.8);display:inline-flex;align-items:center;gap:8px}
.ty-scope .hdr__back:hover{color:var(--teal)}
.ty-scope .hdr__back svg{width:15px;height:15px;stroke:currentColor;stroke-width:2.2;fill:none;stroke-linecap:round;stroke-linejoin:round}

.ty-scope .ty-hero{position:relative;padding:172px 0 104px;overflow:hidden;overflow:clip;
  background:linear-gradient(155deg,#061128 0%,#0b2247 42%,#123059 72%,#16405f 100%);
  color:#eaf2fa;text-align:center}
.ty-scope .ty-hero__glow{position:absolute;width:min(62vw,820px);height:min(62vw,820px);
  border-radius:50%;filter:blur(130px);opacity:.24;pointer-events:none}
.ty-scope .ty-hero__glow--a{background:#1f6bd6;top:-24vw;left:-14vw}
.ty-scope .ty-hero__glow--b{background:#16b8a6;bottom:-26vw;right:-12vw}
.ty-scope .ty-hero .wrap{position:relative;max-width:820px}
.ty-scope .ty-hero .eyebrow{color:var(--teal);justify-content:center}
.ty-scope .ty-hero h1{color:#fff;text-wrap:balance;font-size:clamp(2.1rem,4.4vw,3.35rem)}
.ty-scope .ty-hero__sub{font-size:clamp(1.02rem,1.5vw,1.16rem);color:rgba(234,242,250,.82);
  max-width:52ch;margin:0 auto 34px}

.ty-scope .badge{width:88px;height:88px;margin:0 auto 30px;border-radius:50%;display:grid;place-items:center;
  background:var(--iris-soft);box-shadow:0 18px 46px -18px rgba(22,184,166,.85);
  animation:ty-pop .6s var(--ease) both}
.ty-scope .badge svg{width:40px;height:40px;stroke:#fff;stroke-width:3;fill:none;
  stroke-linecap:round;stroke-linejoin:round;
  stroke-dasharray:32;stroke-dashoffset:32;animation:ty-draw .5s var(--ease) .35s forwards}
@keyframes ty-pop{from{opacity:0;transform:scale(.72)}to{opacity:1;transform:none}}
@keyframes ty-draw{to{stroke-dashoffset:0}}

.ty-scope .ty-hero__meta{display:inline-flex;flex-wrap:wrap;justify-content:center;gap:10px 28px;
  padding:16px 30px;border-radius:100px;margin-bottom:34px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)}
.ty-scope .ty-hero__meta div{display:flex;align-items:center;gap:9px;font-size:14px;font-weight:500;color:rgba(234,242,250,.86)}
.ty-scope .ty-hero__meta svg{width:17px;height:17px;stroke:var(--teal);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;flex:none}

.ty-scope .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:52px}
.ty-scope .step{background:#fff;border:1px solid var(--line);border-radius:var(--r-md);
  padding:34px 30px;box-shadow:var(--shadow-sm);position:relative;overflow:hidden;
  transition:transform .45s var(--ease),box-shadow .45s var(--ease)}
.ty-scope .step::after{content:"";position:absolute;inset:0 0 auto;height:3px;background:var(--iris);
  transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease)}
.ty-scope .step:hover{transform:translateY(-6px)}
.ty-scope .step:hover::after{transform:scaleX(1)}
.ty-scope .step__num{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;margin-bottom:20px;
  font-family:var(--font-display);font-size:1.05rem;font-weight:700;color:#fff;
  background:linear-gradient(140deg,#253c83,#1f6bd6)}
.ty-scope .step h3{color:var(--navy);margin-bottom:9px}
.ty-scope .step p{margin:0;font-size:15px;color:var(--slate);line-height:1.6}

.ty-scope .next{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;margin-top:48px}
.ty-scope .next__card{display:flex;gap:20px;align-items:flex-start;background:#fff;border:1px solid var(--line);
  border-radius:var(--r-md);padding:30px;box-shadow:var(--shadow-sm);
  transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
.ty-scope .next__card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg)}
.ty-scope .next__ico{width:50px;height:50px;border-radius:15px;flex:none;display:grid;place-items:center;
  background:linear-gradient(140deg,rgba(31,107,214,.11),rgba(22,184,166,.13));
  border:1px solid rgba(31,107,214,.13)}
.ty-scope .next__ico svg{width:23px;height:23px;stroke:var(--pavo-blue);stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}
.ty-scope .next__card h3{color:var(--navy);margin-bottom:6px}
.ty-scope .next__card p{margin:0 0 10px;font-size:14.5px;color:var(--slate)}
.ty-scope .next__go{font-size:14px;font-weight:600;color:var(--pavo-blue);display:inline-flex;align-items:center;gap:7px}
.ty-scope .next__go svg{width:14px;height:14px;stroke:currentColor;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s var(--ease)}
.ty-scope .next__card:hover .next__go svg{transform:translateX(3px)}

.ty-scope .contact{margin-top:56px;padding:38px 40px;border-radius:var(--r-lg);text-align:center;
  background:linear-gradient(140deg,rgba(31,107,214,.07),rgba(22,184,166,.09));
  border:1px solid rgba(31,107,214,.16)}
.ty-scope .contact h3{color:var(--navy);font-size:1.3rem;margin-bottom:8px}
.ty-scope .contact p{margin:0 0 22px;font-size:15px;color:var(--slate)}

@media(max-width:900px){
  .ty-scope .steps{grid-template-columns:1fr}
  .ty-scope .next{grid-template-columns:1fr}
  .ty-scope .ty-hero{padding:140px 0 78px}
}
@media(max-width:680px){
  .ty-scope .hdr__back span{display:none}
  .ty-scope .contact{padding:30px 24px}
  .ty-scope .ty-hero__meta{border-radius:var(--r-md);padding:16px 22px}
}
@media(prefers-reduced-motion:reduce){
  .ty-scope .badge,.ty-scope .badge svg{animation:none;stroke-dashoffset:0}
}
`;

export default function ThankYouPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TY_CSS }} />
      <div className="ty-scope">
        <header className="hdr">
          <div className="wrap hdr__in">
            <a className="hdr__logo" href="/" aria-label="Fundmaster Wealth">
              <img src="/images/logo-w.svg" alt="Fundmaster Wealth" />
            </a>
            <a className="hdr__back" href="/">
              <svg viewBox="0 0 24 24">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              <span>Back to the site</span>
            </a>
          </div>
        </header>

        <section className="ty-hero">
          <span className="ty-hero__glow ty-hero__glow--a"></span>
          <span className="ty-hero__glow ty-hero__glow--b"></span>
          <div className="wrap">
            <div className="badge">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="eyebrow">Request received</p>
            <h1 id="ty-head">Thanks &mdash; we&rsquo;ve got your details.</h1>
            <p className="ty-hero__sub">
              Your free First Home Buyer Check is on its way. A Fundmaster Wealth adviser will
              review what you sent and get in touch to talk it through.
            </p>

            <div className="ty-hero__meta">
              <div>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Usually within 1 business day
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                We&rsquo;ll call or email you
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Free. No obligation.
              </div>
            </div>

            <div>
              <a className="btn btn--ghost btn--lg" href="/#borrowing-power">
                Try the borrowing calculator
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '760px', margin: '0 auto' }}>
              <p className="eyebrow">What happens next</p>
              <h2>Three steps, no surprises.</h2>
              <p className="lede">
                Here&rsquo;s exactly what to expect between now and your First Home Buyer Check.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step__num">1</div>
                <h3>We review your details</h3>
                <p>An adviser looks at your income, deposit and goals to see what may be possible.</p>
              </div>
              <div className="step">
                <div className="step__num">2</div>
                <h3>We get in touch</h3>
                <p>A short call or email, at a time that suits, to fill in anything we still need.</p>
              </div>
              <div className="step">
                <div className="step__num">3</div>
                <h3>You get your check</h3>
                <p>Your borrowing position, deposit options and the next step to take.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="wrap">
            <div className="center" style={{ maxWidth: '760px', margin: '0 auto' }}>
              <p className="eyebrow">While you wait</p>
              <h2>Get a head start on your numbers.</h2>
              <p className="lede">
                Nothing here changes what we send you, but it is a useful place to start thinking.
              </p>
            </div>

            <div className="next">
              <a className="next__card" href="/#borrowing-power">
                <div className="next__ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3v18h18" />
                    <path d="M7 15l4-5 3 3 5-7" />
                  </svg>
                </div>
                <div>
                  <h3>Borrowing power calculator</h3>
                  <p>See an indicative estimate based on your income, deposit, debts and dependants.</p>
                  <span className="next__go">
                    Open the calculator{' '}
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
              <a className="next__card" href="/#pathways">
                <div className="next__ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
                  </svg>
                </div>
                <div>
                  <h3>Deposit pathways</h3>
                  <p>KiwiSaver, the First Home Grant, family help and low-deposit lending, explained.</p>
                  <span className="next__go">
                    See the options{' '}
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>

            <div className="contact">
              <h3>Something changed, or need us sooner?</h3>
              <p>Send us a note and we&rsquo;ll pick it up with your enquiry.</p>
              <a
                className="btn btn--navy"
                href="https://www.fundmasterwealth.co.nz"
                target="_blank"
                rel="noopener"
              >
                Visit fundmasterwealth.co.nz
              </a>
            </div>
          </div>
        </section>

        <footer className="ftr">
          <div className="wrap">
            <div className="ftr__top">
              <div>
                <img src="/images/logo-w.svg" alt="Fundmaster Wealth" />
                <p className="ftr__blurb">
                  Fundmaster Wealth &mdash; mortgage advice for New Zealand first home buyers.
                  From your first conversation through to settlement.
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <a className="btn btn--primary" href="/">
                  Back to the site
                </a>
              </div>
            </div>
            <p className="ftr__legal">
              Calculator results are indicative only and do not constitute financial advice or
              lending approval. Eligibility criteria, lending requirements and government schemes
              can change. Your adviser can help you understand what may apply to your circumstances.
              A Disclosure Statement is available on request and free of charge.
            </p>
            <div className="ftr__base">
              <span>
                © <span id="ty-yr">2026</span> Fundmaster Wealth. All rights reserved.
              </span>
              <span>
                <a
                  href="https://www.fundmasterwealth.co.nz"
                  target="_blank"
                  rel="noopener"
                >
                  fundmasterwealth.co.nz
                </a>
              </span>
            </div>
          </div>
        </footer>

        <ThankYouGreeting />
      </div>
    </>
  );
}
