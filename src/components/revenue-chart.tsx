"use client";

import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type PeriodKey = "7D" | "30D" | "90D";

const chartData: Record<
  PeriodKey,
  { label: string; revenue: number }[]
> = {
  "7D": [
    { label: "Mon", revenue: 4200 },
    { label: "Tue", revenue: 5600 },
    { label: "Wed", revenue: 4800 },
    { label: "Thu", revenue: 6100 },
    { label: "Fri", revenue: 7200 },
    { label: "Sat", revenue: 6800 },
    { label: "Sun", revenue: 7900 },
  ],
  "30D": [
    { label: "Week 1", revenue: 24800 },
    { label: "Week 2", revenue: 28400 },
    { label: "Week 3", revenue: 26700 },
    { label: "Week 4", revenue: 31200 },
  ],
  "90D": [
    { label: "Jan", revenue: 86200 },
    { label: "Feb", revenue: 91300 },
    { label: "Mar", revenue: 98000 },
  ],
};

const periods: PeriodKey[] = ["7D", "30D", "90D"];

export default function RevenueChart() {
  const [period, setPeriod] = useState<PeriodKey>("30D");
  const data = useMemo(() => chartData[period], [period]);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Revenue
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">
            $128,490
          </p>
        </div>
        <div className="flex items-center gap-2">
          {periods.map((value) => (
            <button
              key={value}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                period === value
                  ? "bg-emerald-500/20 text-emerald-200"
                  : "border border-slate-800 text-slate-400 hover:text-slate-100"
              }`}
              onClick={() => setPeriod(value)}
              type="button"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -20, right: 10 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickFormatter={(value) => `$${Number(value) / 1000}k`}
            />
            <Tooltip
              cursor={{ stroke: "#334155", strokeDasharray: "4 4" }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                color: "#e2e8f0",
              }}
              labelStyle={{ color: "#94a3b8" }}
              formatter={(value) => {
                if (value === undefined || value === null) {
                  return ["-", ""];
                }
                const numericValue =
                  typeof value === "number" ? value : Number(value);
                if (Number.isNaN(numericValue)) {
                  return ["-", ""];
                }
                return [`$${numericValue.toLocaleString()}`, ""];
              }}
            />
            <Area
              dataKey="revenue"
              stroke="#34d399"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
