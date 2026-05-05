type Props = { className?: string };

export const IconLeaf = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M20 4c0 8-6 14-14 14 0-8 6-14 14-14Z" />
    <path d="M6 18c4-2 7-5 9-9" strokeLinecap="round" />
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrows = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconSparkle = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" strokeLinecap="round" />
  </svg>
);

export const IconCart = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h7.3a2 2 0 0 0 2-1.6L20 8H6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="21" r="1.3" />
    <circle cx="17" cy="21" r="1.3" />
  </svg>
);

export const IconStar = ({ className = "w-4 h-4" }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m12 2 2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2Z" />
  </svg>
);

export const IconClose = ({ className = "w-5 h-5" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8">
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
);

export const IconTruck = ({ className = "w-5 h-5" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M3 7h11v9H3zM14 11h4l3 3v2h-7" />
    <circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const IconReturn = ({ className = "w-5 h-5" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <path d="M4 12a8 8 0 1 0 3-6.2" strokeLinecap="round" />
    <path d="M3 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconLock = ({ className = "w-5 h-5" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </svg>
);

export function FeatureIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "leaf": return <IconLeaf className={className} />;
    case "shield": return <IconShield className={className} />;
    case "arrows": return <IconArrows className={className} />;
    case "sparkle": return <IconSparkle className={className} />;
    default: return <IconSparkle className={className} />;
  }
}
