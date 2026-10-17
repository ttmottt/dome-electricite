// Anneau + éclair, repris du logo Domé Électricité.
export function RingMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="2" strokeDasharray="1040 40" />
      <circle cx="200" cy="200" r="150" fill="currentColor" opacity="0.12" />
      <path d="M232 70h-78l-60 118h66l-38 142 140-176h-74z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
