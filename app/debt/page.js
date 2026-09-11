import Header from '../components/Header';
import Hero from '../components/Hero';
import PageEffects from '../components/PageEffects';

export default function DebtPage() {
  return (
    <>
      <PageEffects />
      <Header ctaLabel="Talk to an Adviser" />
      <Hero
        eyebrow="Debt Solutions · New Zealand"
        title={<>could you be paying too much on your <span className="grad-text">Debt</span></>}
        body="Your current debt structure may be costing you more than it needs to.
            Get a free review of your debts and explore ways to improve your repayments, rates or overall position.
            "
        includesTitle="Your free review includes"
        includes={[
          'Current debt review',
          'Interest rate assessmen',
          'Repayment review',
          'Restructuring options',
          'Clear next steps',
        ]}
        ctaLabel="Get My Free Debt review"
        form={{
          source: 'debt_hero',
          id: 'check',
          head: 'Get your free debt check',
          note: 'Takes under a minute. A Fundmaster Wealth adviser will be in touch.',
          submitLabel: 'Get My Free Debt Review',
          dataLayerFormName: 'debt_check',
          extraFields: [
            {
              name: 'total_debt',
              label: 'Approximate Total Debt',
              type: 'select',
              placeholder: 'Select range',
              required: true,
              options: [
                'Under $10,000',
                '$10,000 – $25,000',
                '$25,000 – $50,000',
                '$50,000 – $100,000',
                'Over $100,000',
              ],
            },
            {
              name: 'debt_type',
              label: 'Type of Debt',
              type: 'select',
              placeholder: 'Select debt type',
              required: true,
              options: [
                'Credit card',
                'Personal loan',
                'Car loan',
                'Mortgage',
                'Multiple debts',
                'Other',
              ],
            },
          ],
        }}
      />
    </>
  );
}
