import { BarChart3, LayoutDashboard, Link2, Settings, Users } from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Campaigns", icon: BarChart3 },
  { label: "Links", icon: Link2 },
  { label: "Partners", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-slate-800 bg-slate-950/40 p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <span className="text-sm font-semibold">AR</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">
                Affiliate
              </p>
              <p className="text-lg font-semibold text-slate-100">Ralph</p>
            </div>
          </div>
          <nav className="mt-10 space-y-2 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    item.active
                      ? "bg-emerald-500/15 text-emerald-100"
                      : "text-slate-300 hover:bg-slate-900/70 hover:text-white"
                  }`}
                  type="button"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                <span className="text-sm font-semibold">AP</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Portal
                </p>
                <h1 className="text-lg font-semibold text-slate-100">
                  Affiliate Dashboard
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300">
                <span className="text-sm font-semibold">JW</span>
              </div>
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
