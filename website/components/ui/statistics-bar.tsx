type Stat = { number: string; label: string };

export function StatisticsBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="container-standard grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:border-r md:border-border md:last:border-r-0">
            <div className="font-display text-4xl font-medium text-forest">{stat.number}</div>
            <div className="mt-2 text-sm leading-6 text-ink-secondary">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

