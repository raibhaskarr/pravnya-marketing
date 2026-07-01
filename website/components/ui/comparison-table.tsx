const rows = [
  ["Longitudinal record", true, false, false, false, false],
  ["AI pattern recognition", true, false, false, false, false],
  ["Appointment preparation", true, false, false, false, false],
  ["Parent-controlled sharing", true, false, false, false, "Partial"],
  ["Searchable by meaning", true, "Partial", false, false, false],
  ["Evidence-traced AI", true, false, false, false, false],
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

