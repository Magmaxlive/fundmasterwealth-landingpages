const DEFAULT_ITEMS = [
  {
    label: 'Access to multiple lenders',
    svg: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    label: 'No cost to you in most cases',
    svg: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  },
  {
    label: 'Fast, straightforward process',
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    label: 'Support to settlement',
    svg: (
      <>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
];

export default function TrustStrip({ items = DEFAULT_ITEMS }) {
  return (
    <div className="strip">
      <div className="wrap strip__in">
        {items.map((item) => (
          <div className="strip__item" key={item.label}>
            <svg viewBox="0 0 24 24">{item.svg}</svg>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
