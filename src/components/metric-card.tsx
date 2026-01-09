type MetricCardProps = {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
};

export default function MetricCard({
  title,
  value,
  change,
  changeLabel,
}: MetricCardProps) {
  const isPositive = change >= 0;
  const changeText = `${isPositive ? "+" : ""}${change.toFixed(1)}%`;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.3)]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-500/15 text-emerald-300"
              : "bg-rose-500/15 text-rose-300"
          }`}
        >
          {changeText}
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <p className="text-3xl font-semibold text-slate-100">{value}</p>
        <p className="text-xs text-slate-500">{changeLabel}</p>
      </div>
    </div>
  );
}
