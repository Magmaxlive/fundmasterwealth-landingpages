import LeadForm from './LeadForm';

export default function FinalCTA({
  id = 'final',
  eyebrow = 'Your next step',
  heading = 'Your first home could be closer than you think.',
  sub = "Let's look at your numbers and work out your next step.",
  lede = "Whether you're saving your first deposit, exploring your borrowing options or already looking at properties, start with a conversation.",
  image = '/images/sold-handshake.jpg',
  imageAlt = 'First home buyers celebrating their sold property',
  form,
}) {
  const formProps = {
    source: 'final_cta',
    variant: 'light',
    head: 'Quick check',
    note: 'Get your free First Home Buyer Check — no cost, no obligation.',
    ...(form || {}),
  };

  return (
    <section className="section" id={id}>
      <div className="wrap final">
        <div className="rv">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {heading ? <h2>{heading}</h2> : null}
          {sub ? <p className="sub">{sub}</p> : null}
          {lede ? <p className="lede">{lede}</p> : null}
          {image ? (
            <div style={{ marginTop: '28px', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={image} alt={imageAlt} />
            </div>
          ) : null}
        </div>

        <LeadForm {...formProps} />
      </div>
    </section>
  );
}
