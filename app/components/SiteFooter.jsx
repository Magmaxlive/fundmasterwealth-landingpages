export default function SiteFooter({
  logo = '/images/logo-w.svg',
  logoAlt = 'FundMaster Wealth',
  blurb = 'FundMaster Wealth — mortgage advice for New Zealand first home buyers. From your first conversation through to settlement.',
  ctaLabel = 'Get My Free First Home Buyer Check',
  ctaHref = '#check',
  legal = 'Calculator results are indicative only and do not constitute financial advice or lending approval. Eligibility criteria, lending requirements and government schemes can change. Your adviser can help you understand what may apply to your circumstances. A Disclosure Statement is available on request and free of charge.',
  siteName = 'Fundmaster Wealth. All rights reserved.',
  siteUrl = 'https://www.fundmasterwealth.co.nz',
  siteLabel = 'fundmasterwealth.co.nz',
}) {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div>
            <img src={logo} alt={logoAlt} />
            {blurb ? <p className="ftr__blurb">{blurb}</p> : null}
          </div>
          {ctaLabel ? (
            <div style={{ textAlign: 'right' }}>
              <a className="btn btn--primary" href={ctaHref}>{ctaLabel}</a>
            </div>
          ) : null}
        </div>
        {legal ? <p className="ftr__legal">{legal}</p> : null}
        <div className="ftr__base">
          <span>© {new Date().getFullYear()}{siteName}</span>
          <span><a href={siteUrl} target="_blank" rel="noopener">{siteLabel}</a></span>
        </div>
      </div>
    </footer>
  );
}
