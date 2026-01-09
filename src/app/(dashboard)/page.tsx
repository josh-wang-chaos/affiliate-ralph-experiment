import MetricCard from "@/components/metric-card";

const metrics = [
  {
    title: "Earnings",
    value: "$42,190",
    change: 12.4,
    changeLabel: "vs last month",
  },
  {
    title: "Clicks",
    value: "148,390",
    change: 5.7,
    changeLabel: "vs last month",
  },
  {
    title: "Conversions",
    value: "3,421",
    change: -2.1,
    changeLabel: "vs last month",
  },
];

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
        Welcome back
      </p>
      <h2 className="text-3xl font-semibold text-slate-100">
        Your affiliate performance at a glance
      </h2>
      <p className="max-w-xl text-base text-slate-400">
        This shell layout is ready for metrics, charts, and activity feeds.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </section>
  );
}
