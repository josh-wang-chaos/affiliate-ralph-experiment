"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  BarChart3,
  LayoutDashboard,
  Link2,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-slate-950/80"
            onClick={() => setMobileOpen(false)}
            type="button"
          />
          <aside className="relative h-full w-72 border-r border-slate-800 bg-slate-950/95 p-6">
            <div className="flex items-center justify-between">
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
              <button
                className="rounded-full border border-slate-800 p-2 text-slate-200"
                onClick={() => setMobileOpen(false)}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
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
        </div>
      ) : null}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[88px_1fr] lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-slate-800 bg-slate-950/40 p-6 md:block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <span className="text-sm font-semibold">AR</span>
            </div>
            <div className="hidden lg:block">
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
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    item.active
                      ? "bg-emerald-500/15 text-emerald-100"
                      : "text-slate-300 hover:bg-slate-900/70 hover:text-white"
                  }`}
                  type="button"
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
            <div className="flex items-center gap-4">
              <button
                aria-label="Open navigation"
                className="rounded-full border border-slate-800 p-2 text-slate-200 md:hidden"
                onClick={() => setMobileOpen(true)}
                type="button"
              >
                <Menu className="h-4 w-4" />
              </button>
              <Link href="/" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors">
                <span className="text-sm font-semibold">AP</span>
              </Link>
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
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="relative z-10 cursor-pointer rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="relative z-10 cursor-pointer rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition-all hover:scale-105 hover:border-emerald-500 hover:bg-slate-800 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] active:scale-95">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-11 w-11",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
