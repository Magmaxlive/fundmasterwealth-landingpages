export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div>
            <img src="/images/logo-w.svg" alt="FundMaster Wealth" />
            <p className="ftr__blurb">FundMaster Wealth — mortgage advice for New Zealand first home buyers. From your first conversation through to settlement.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a className="btn btn--primary" href="#check">Get My Free First Home Buyer Check</a>
          </div>
        </div>
        <p className="ftr__legal">
          Calculator results are indicative only and do not constitute financial advice or lending approval. Eligibility criteria, lending requirements and government schemes can change. Your adviser can help you understand what may apply to your circumstances. A Disclosure Statement is available on request and free of charge.
        </p>
        <div className="ftr__base">
          <span>© {new Date().getFullYear()} FundMaster Wealth. All rights reserved.</span>
          <span><a href="https://www.fundmasterwealth.co.nz" target="_blank" rel="noopener">fundmasterwealth.co.nz</a></span>
        </div>
      </div>
    </footer>
  );
}
