type Row = {
  chose: string;
  gaveUp: string;
  because: string;
};

export function ComparisonTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border bg-bg-surface shadow-glowS">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">The tradeoffs we made, what we gave up, and why</caption>
        <thead className="border-b border-border bg-bg-raised text-xs font-semibold uppercase tracking-[0.08em] text-forest-bright">
          <tr>
            <th scope="col" className="p-4 font-semibold">We chose</th>
            <th scope="col" className="border-x border-border p-4 font-semibold">We gave up</th>
            <th scope="col" className="p-4 font-semibold">Because</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.chose} className="border-b border-border last:border-b-0">
              <td className="p-4 text-sm font-semibold text-text-primary">{row.chose}</td>
              <td className="border-x border-border p-4 text-sm text-text-secondary">{row.gaveUp}</td>
              <td className="p-4 text-sm leading-6 text-text-secondary">{row.because}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
