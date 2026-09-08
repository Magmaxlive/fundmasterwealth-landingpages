import LeadForm from './LeadForm';

export default function FinalCTA() {
  return (
    <section className="section" id="final">
      <div className="wrap final">
        <div className="rv">
          <p className="eyebrow">Your next step</p>
          <h2>Your first home could be closer than you think.</h2>
          <p className="sub">Let's look at your numbers and work out your next step.</p>
          <p className="lede">Whether you're saving your first deposit, exploring your borrowing options or already looking at properties, start with a conversation.</p>
          <div style={{ marginTop: '28px', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="/images/sold-handshake.jpg" alt="First home buyers celebrating their sold property" />
          </div>
        </div>

        <LeadForm
          source="final_cta"
          variant="light"
          head="Quick check"
          note="Get your free First Home Buyer Check — no cost, no obligation."
        />
      </div>
    </section>
  );
}
