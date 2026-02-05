import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, BarChart3, Shield, Zap, LayoutDashboard } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 lg:px-8 border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Affiliate</span>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-semibold text-slate-300 hover:text-white transition">Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 transition-all active:scale-95">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
            >
              Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.emerald.900/0.3),theme(colors.slate.950))]" />
          
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold leading-6 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                Now in Private Beta
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Scale your affiliate revenue with <span className="text-emerald-400">Affiliate</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-400">
              The modern affiliate portal for professional creators. Track metrics, manage campaigns, and optimize your conversions in real-time.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 transition-all active:scale-95">
                    Get Started Free
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 transition-all active:scale-95 flex items-center gap-2"
                >
                  Go to Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </SignedIn>
              
              <Link href="#features" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-emerald-400">Faster Growth</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to succeed
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <Zap className="h-5 w-5 flex-none text-emerald-400" />
                    Real-time Tracking
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">See every click and conversion as it happens. No more waiting 24 hours for data updates.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <BarChart3 className="h-5 w-5 flex-none text-emerald-400" />
                    Advanced Analytics
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">Deep dive into your traffic sources and conversion paths with built-in visualization tools.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <Shield className="h-5 w-5 flex-none text-emerald-400" />
                    Secure Payouts
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">Reliable, automated payouts direct to your preferred method. Transparency at every step.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs leading-5 text-slate-500">
            &copy; 2026 Affiliate Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
