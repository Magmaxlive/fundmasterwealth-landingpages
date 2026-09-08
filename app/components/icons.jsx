export const TickIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);

export const StarIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4L7 14.4 2 9.5l7-1z" /></svg>
);

export const Stars = () => (
  <div className="stars">
    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
  </div>
);

export const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const AvatarIcon = () => (
  <span className="avatar" aria-hidden="true">
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 18.5c0-6.2 4.1-10.4 9.4-11.5l.9 3.1c-3.1 1-4.9 2.9-5 5.4h4.3V25H4v-6.5zm14.4 0c0-6.2 4.1-10.4 9.4-11.5l.9 3.1c-3.1 1-4.9 2.9-5 5.4H28V25h-9.6v-6.5z" />
    </svg>
  </span>
);

export const Tick = () => (
  <span className="tick"><TickIcon /></span>
);
