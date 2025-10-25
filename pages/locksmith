import Head from "next/head";
import { useState } from "react";

const theme = {
  accent: "bg-amber-400",
  accentText: "text-amber-900",
  subtext: "text-zinc-600",
  card: "bg-white",
  border: "border border-zinc-200",
};

export default function Locksmiths() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/locksmith-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Join Unlokt — Locksmith Network</title>
        <meta
          name="description"
          content="More jobs, less nonsense. Join Unlokt for verified locksmith requests, fair payouts, and no call-center middlemen."
        />
        <meta property="og:title" content="Join Unlokt — Locksmith Network" />
        <meta
          property="og:description"
          content="Verified jobs, instant payouts, live ETAs. Apply to become a provider."
        />
      </Head>

      {/* Hero */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              Now onboarding in major metros
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              More jobs. Less nonsense.
              <span className="block">Join the Unlokt network.</span>
            </h1>
            <p className={`mt-4 ${theme.subtext} max-w-xl`}>
              We connect licensed locksmiths directly to paying customers—no lead
              fees, no fake calls, no call-center middlemen. Transparent pricing,
              instant payouts, and live ETAs.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#apply" className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl bg-amber-400 hover:brightness-95 shadow">
                Apply to become a provider
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50">
                How it works
              </a>
            </div>
            <div className="mt-4 text-xs text-zinc-500">• Keep your independence • Your pricing, our transparency • 24/7 support</div>
          </div>

          {/* Right mock */}
          <div className={`p-6 rounded-3xl ${theme.card} ${theme.border} shadow-sm`}>
            <div className="h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-xs text-zinc-500">
              Provider App — Job Feed (preview)
            </div>
            <div className="mt-4 grid gap-3">
              {[
                { t: "Vehicle unlock — Downtown", pay: "$85", eta: "3.2 mi • 14 min" },
                { t: "Home lockout — River North", pay: "$109", eta: "2.4 mi • 11 min" },
                { t: "Rekey 3 cylinders — West Loop", pay: "$180", eta: "5.1 mi • 22 min" },
              ].map((j, i) => (
                <div key={i} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{j.t}</div>
                    <div className="text-amber-600 font-semibold">{j.pay}</div>
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">{j.eta}</div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-xl text-sm font-semibold bg-amber-400 hover:brightness-95">Accept</button>
                    <button className="px-3 py-2 rounded-xl text-sm font-semibold border border-zinc-300 bg-white hover:bg-zinc-50">Details</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-zinc-500 text-center">Instant payouts via Stripe • In-app navigation • Customer chat</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { n: "1", h: "Verified requests", p: "Real customers, no spam leads. We verify location and scope up front." },
              { n: "2", h: "You choose jobs", p: "See price, distance, and ETA. Accept what fits your route and schedule." },
              { n: "3", h: "Get paid fast", p: "Cashless checkout. Instant payouts with Stripe Connect." },
            ].map((s) => (
              <div key={s.n} className={`p-6 rounded-2xl ${theme.card} ${theme.border} shadow-sm`}>
                <div className="h-8 w-8 rounded-xl bg-amber-400 flex items-center justify-center font-bold">{s.n}</div>
                <h3 className="mt-4 font-medium">{s.h}</h3>
                <p className={`mt-2 ${theme.subtext}`}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Why pros choose Unlokt</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { h: "No lead fees", p: "We’re not a lead mill. When you accept, it’s a real job with a real payout." },
              { h: "Transparent pricing", p: "See the amount before you accept. No surprise deductions." },
              { h: "Keep your brand", p: "We help you grow without replacing your identity or independence." },
              { h: "Fewer dead miles", p: "Smart dispatch favors proximity so you waste less time on the road." },
              { h: "24/7 support", p: "Talk to a human. We’re here for disputes, scope changes, and safety." },
              { h: "Compliance built-in", p: "License & insurance verification, receipts, and records in one place." },
            ].map((b, i) => (
              <div key={i} className={`p-6 rounded-2xl ${theme.card} ${theme.border} shadow-sm`}>
                <h3 className="font-medium">{b.h}</h3>
                <p className={`mt-2 ${theme.subtext}`}>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-6 md:p-8 rounded-3xl ${theme.card} ${theme.border} shadow-sm`}>
            <p className="text-lg italic">
              “Way better than chasing fake leads. I pick the jobs I want, get paid right away, and spend less time driving across town.”
            </p>
            <div className="mt-3 text-sm text-zinc-500">— Alex R., Chicago locksmith (12 yrs)</div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Apply to become a provider</h2>

          {sent ? (
            <div className="mt-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
              Thanks! We’ve received your application. Our team will reach out within 24–48 hours.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-700">Business name</label>
                  <input name="business" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
                <div>
                  <label className="text-sm text-zinc-700">Contact name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-700">Phone</label>
                  <input name="phone" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
                <div>
                  <label className="text-sm text-zinc-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-zinc-700">City</label>
                  <input name="city" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
                <div>
                  <label className="text-sm text-zinc-700">State/Region</label>
                  <input name="region" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
                <div>
                  <label className="text-sm text-zinc-700">Coverage radius (mi)</label>
                  <input name="radius" type="number" min="1" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-700">License #</label>
                  <input name="license" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
                <div>
                  <label className="text-sm text-zinc-700">Insurance carrier</label>
                  <input name="insurance" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-700">Notes</label>
                <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl bg-amber-400 hover:brightness-95"
              >
                {loading ? "Submitting..." : "Submit application"}
              </button>
              <p className="text-xs text-zinc-500">By submitting, you agree to our Terms and Privacy Policy.</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
