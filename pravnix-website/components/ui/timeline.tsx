export function Timeline({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <article key={step} className="grid gap-4 rounded-md border border-border bg-bg-surface p-5 shadow-glowS md:grid-cols-[80px_1fr]">
          <p className="font-mono text-sm text-forest-bright">{String(index + 1).padStart(2, "0")}</p>
          <p className="text-base leading-7 text-text-secondary">{step}</p>
        </article>
      ))}
    </div>
  );
}
