import LeadForm from './LeadForm';

export default function LeadFormSection({
  id = 'check',
  eyebrow,
  heading,
  sub,
  form,
}) {
  const formProps = {
    source: 'First Home Buyers',
    id,
    variant: 'light',
    ...(form || {}),
  };

  return (
    <section className="section section--paper lead-section" id={id}>
      <div className="wrap lead-section__grid">
        <div className="lead-section__intro rv">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {heading ? <h2>{heading}</h2> : null}
          {sub ? <p className="lede">{sub}</p> : null}
        </div>
        <div className="lead-section__form rv">
          <LeadForm {...formProps} />
        </div>
      </div>
    </section>
  );
}
