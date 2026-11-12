const rows = [
  ["Longitudinal record", true, false, false, false, false],
  ["Goals from your child's IEP", true, false, false, false, "Partial"],
  ["AI suggestions you approve", true, false, false, false, false],
  ["Parent-controlled care team", true, false, false, false, "Partial"],
  ["Ideas to try at home", true, false, false, "Partial", false],
  ["Privacy-first design", true, "Varies", "Varies", "Varies", "Varies"],
  ["Built for families", true, false, false, false, false],
];

export function ComparisonTable() {
  const headers = ["", "Pravnya", "Notes app", "Photo app", "Milestone tracker", "Clinic portal"];
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-s">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-border px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0] as string} className="odd:bg-surface even:bg-surface-raised">
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={index === 1 ? "bg-forest-subtle px-4 py-4 text-center font-semibold text-forest" : "px-4 py-4 text-center text-ink-secondary"}
                  >
                    {cell === true ? "✓" : cell === false ? "—" : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

