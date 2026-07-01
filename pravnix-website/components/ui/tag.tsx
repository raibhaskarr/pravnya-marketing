export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-xs border border-border-accent bg-forest/10 px-2.5 py-1 text-xs font-semibold tracking-[0.05em] text-forest-bright">
      {children}
    </span>
  );
}
