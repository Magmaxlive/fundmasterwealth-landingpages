export default function Header() {
  return (
    <header className="hdr" id="hdr">
      <div className="wrap hdr__in">
        <a className="hdr__logo" href="#top" aria-label="FundMaster Wealth">
          <img className="logo--light" src="/images/logo-w.svg" alt="FundMaster Wealth" />
          <img className="logo--dark" src="/images/logo-c.svg" alt="FundMaster Wealth" />
        </a>
        <a className="btn btn--primary hdr__cta" href="#check">Check My Options</a>
      </div>
    </header>
  );
}
