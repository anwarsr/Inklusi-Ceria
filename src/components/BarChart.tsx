export function BarChart({ data, max = 100 }: { data: { hari: string; nilai: number }[]; max?: number }) {
  return (
    <div className="w-full">
      <div className="flex items-end gap-2 h-44">
        {data.map((d) => {
          const pct = Math.max(2, (d.nilai / max) * 100);
          const color =
            d.nilai === 0
              ? "bg-cream-dark"
              : d.nilai >= 75
                ? "bg-mint-dark"
                : d.nilai >= 50
                  ? "bg-sun"
                  : "bg-coral";
          return (
            <div key={d.hari} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xs font-bold text-ink-soft">{d.nilai > 0 ? `${d.nilai}` : "—"}</span>
              <div
                role="img"
                aria-label={`${d.hari}: ${d.nilai} dari ${max}`}
                className={`w-full rounded-t-xl ${color} transition`}
                style={{ height: `${pct}%`, minHeight: 8 }}
              />
              <span className="text-xs font-bold text-ink">{d.hari}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-ink-soft">
        <Legend color="bg-mint-dark" label="≥ 75 (Bagus)" />
        <Legend color="bg-sun" label="50–74 (Cukup)" />
        <Legend color="bg-coral" label="< 50 (Butuh Bantuan)" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded-sm ${color}`} aria-hidden />
      {label}
    </span>
  );
}
