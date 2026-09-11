export default function Header({
  logoLight = '/images/logo-w.svg',
  logoDark = '/images/logo-c.svg',
  logoAlt = 'FundMaster Wealth',
  ariaLabel = 'FundMaster Wealth',
  ctaHref = '#check',
  ctaLabel = 'Check My Options',
  homeHref = '#top',
}) {
  return (
    <header className="hdr" id="hdr">
      <div className="wrap hdr__in">
        <a className="hdr__logo" href={homeHref} aria-label={ariaLabel}>
          <img className="logo--light" src={logoLight} alt={logoAlt} />
          <img className="logo--dark" src={logoDark} alt={logoAlt} />
        </a>
        <a className="btn btn--primary hdr__cta" href={ctaHref}>{ctaLabel}</a>
      </div>
    </header>
  );
}
