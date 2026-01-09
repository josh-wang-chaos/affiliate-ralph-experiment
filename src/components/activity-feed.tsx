import { CheckCircle2, Link2, Sparkles, Wallet } from "lucide-react";

const activityItems = [
  {
    id: "activity-1",
    icon: Wallet,
    description: "Payout processed for the March campaign",
    timestamp: "2024-04-02T14:20:00Z",
  },
  {
    id: "activity-2",
    icon: Sparkles,
    description: "New partner signed: Prism Studios",
    timestamp: "2024-04-02T11:05:00Z",
  },
  {
    id: "activity-3",
    icon: Link2,
    description: "Link bundle refreshed with 3 new assets",
    timestamp: "2024-04-01T19:40:00Z",
  },
  {
    id: "activity-4",
    icon: CheckCircle2,
    description: "Conversion goal hit for Spring Launch",
    timestamp: "2024-03-31T09:15:00Z",
  },
];

function formatRelativeTime(timestamp: string) {
  const now = Date.now();
  const then = new Date(timestamp).getTime();
  const diffSeconds = Math.max(0, Math.floor((now - then) / 1000));

  const intervals = [
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count === 1 ? "" : "s"} ago`;
    }
  }

  return "just now";
}

export default function ActivityFeed() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Recent activity
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">
            Latest updates
          </p>
        </div>
        <span className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
          Live
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {activityItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-xl border border-slate-900 bg-slate-900/40 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-100">{item.description}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {formatRelativeTime(item.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
