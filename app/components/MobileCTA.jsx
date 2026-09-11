export default function MobileCTA({
  ctaLabel = 'Get My Free Check',
  ctaHref = '#check',
}) {
  return (
    <div className="mcta">
      <a className="btn btn--primary btn--block" href={ctaHref}>{ctaLabel}</a>
    </div>
  );
}
