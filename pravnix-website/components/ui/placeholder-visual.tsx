export function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-inset p-6 shadow-glowS">
      <div className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-border-strong bg-bg">
        <p className="max-w-[220px] text-center font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">{label}</p>
      </div>
    </div>
  );
}
