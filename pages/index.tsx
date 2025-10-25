import { useState } from "react";

// Color tokens (easy to tweak)
const theme = {
  bg: "bg-zinc-50",
  card: "bg-white",
  text: "text-zinc-900",
  subtext: "text-zinc-600",
  accent: "bg-amber-400",
  accentText: "text-amber-900",
  outline: "ring-amber-400",
  border: "border-zinc-200",
};

export default function UnloktLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLink = ({ label }) => (
    <a
      href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
      className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
    >
      {label}
    </a>
  );

  return (
    <div className={`${theme.bg} min-h-screen ${theme.text}`}>
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 ${theme.accent} rounded-xl shadow-inner`} />
              <span className="font-semibold tracking-tight">Unlokt</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink label="How it works" />
              <NavLink label="Services" />
              <NavLink label="Pricing" />
              <NavLink label="Coverage" />
              <NavLink label="FAQ" />
              {/* NEW: For Locksmiths (desktop) */}
              <a
                href="/locksmiths"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                For Locksmiths
              </a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">Log in</a>
              <a
                href="#"
                className={`inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-xl ${theme.accent} hover:brightness-95 shadow-sm`}
              >
                Get the app
              </a>
            </div>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-zinc-200"
            >
              <span className="i-lucide-menu" aria-hidden />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-200">
            <div className="px-4 py-3 grid gap-3">
              {["How it works", "Services", "Pricing", "Coverage", "FAQ"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-sm font-medium py-2"
                >
                  {l}
                </a>
              ))}
              {/* NEW: For Locksmiths (mobile) */}
              <a href="/locksmiths" className="text-sm font-medium py-2">
                For Locksmiths
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="text-sm font-medium">Log in</a>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-xl ${theme.accent} hover:brightness-95 shadow-sm`}
                >
                  Get the app
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-amber-200" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-25 bg-zinc-300" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-xs">
              <span className={`inline-block h-2 w-2 rounded-full ${theme.accent}`} />
              24/7 nationwide locksmiths
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
              Locked out? <span className="underline decoration-amber-400 decoration-4 underline-offset-4">Unlokt</span> sends help in minutes.
            </h1>
            <p className={`mt-4 ${theme.subtext} max-w-xl`}>
              Tap once to request a vetted pro. Upfront pricing, live ETAs, and cashless checkout. No more mystery phone trees or bait-and-switch quotes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className={`inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl ${theme.accent} hover:brightness-95 shadow`}
              >
                Get the app
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50"
              >
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
              <span>• No hidden fees</span>
              <span>• Licensed pros</span>
              <span>• Live support</span>
            </div>
          </div>

          {/* Mock phone UI */}
          <div className="relative">
            <div className="mx-auto w-[300px] h-[620px] rounded-[2rem] bg-black/90 p-4 shadow-2xl">
              <div className="h-full rounded-[1.5rem] bg-zinc-900 p-4 flex flex-col">
                <div className="h-8" />
                <div className="text-center text-zinc-200 text-sm">Request a locksmith</div>
                <div className="mt-4 grid gap-3">
                  {[
                    { title: "Car lockout", eta: "ETA 12–18 min" },
                    { title: "Home lockout", eta: "ETA 18–25 min" },
                    { title: "Key duplication", eta: "ETA 25–40 min" },
                  ].map((s, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-100 font-medium">{s.title}</div>
                        <div className="text-xs text-amber-300">{s.eta}</div>
                      </div>
                      <button className="mt-3 w-full rounded-xl bg-amber-400 text-amber-900 text-sm font-semibold py-2">
                        Select
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-auto text-[10px] text-zinc-500 text-center">Live locations • Secure payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Request", copy: "Choose your service and share your location. See nearby pros and instant pricing." },
              { step: "2", title: "Track", copy: "We dispatch the closest vetted locksmith. Watch their live ETA and chat in-app." },
              { step: "3", title: "Done", copy: "Pay securely. Get a digital receipt and warranty. Rate your experience." },
            ].map((i) => (
              <div key={i.step} className={`p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-sm`}>
                <div className={`h-8 w-8 rounded-xl ${theme.accent} flex items-center justify-center font-bold`}>{i.step}</div>
                <h3 className="mt-4 font-medium">{i.title}</h3>
                <p className={`mt-2 ${theme.subtext}`}>{i.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Popular services</h2>
            <a href="#" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
              See all
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Emergency lockout", copy: "Get back in your car or home fast with non-destructive entry." },
              { title: "Key duplication", copy: "On-the-spot key cutting and programming for most makes." },
              { title: "Rekey & install", copy: "Improve security with rekeying, smart locks, and deadbolts." },
            ].map((s, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className={`mt-2 ${theme.subtext}`}>{s.copy}</p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-semibold">From $49</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500">Avg 30–45 min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Simple, honest pricing</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "Standard", price: "$49", features: ["Door unlock", "No surge pricing", "Digital receipt"] },
              { name: "Plus", price: "$89", features: ["Vehicle unlock", "Key extraction", "Photo proof"] },
              { name: "Pro", price: "$149", features: ["Smart lock install", "Rekey up to 4", "90-day warranty"] },
            ].map((t, i) => (
              <div key={i} className={`p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-sm flex flex-col`}>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-medium">{t.name}</h3>
                  <span className="text-zinc-400 text-sm">From</span>
                </div>
                <div className="mt-2 text-4xl font-bold">{t.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {t.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-6 inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-xl ${theme.accent} hover:brightness-95`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500">Final pricing shown before you confirm your request. No surprises.</p>
        </div>
      </section>

      {/* Coverage & Trust */}
      <section id="coverage" className="py-20 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Coverage where you are</h2>
              <p className={`mt-3 ${theme.subtext}`}>
                Operating in 120+ metros with a growing network of licensed locksmiths. Average acceptance time: under 60 seconds.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {["24/7 dispatch", "Background-checked", "Insurance verified", "Parts warranty"].map((b, i) => (
                  <div key={i} className={`p-3 rounded-xl ${theme.card} border ${theme.border}`}>
                    ✅ {b}
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-sm`}>
              <div className="h-56 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center text-zinc-500">
                Map placeholder
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { kpi: "<60s", label: "Avg accept" },
                  { kpi: "4.9★", label: "Avg rating" },
                  { kpi: "98%", label: "On-time" },
                ].map((k, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xl font-semibold">{k.kpi}</div>
                    <div className="text-xs text-zinc-500">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 divide-y divide-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden">
            {[
              { q: "How fast can someone arrive?", a: "Most jobs are accepted within 60 seconds and arrive in 15–30 minutes depending on distance and availability." },
              { q: "Are prices guaranteed?", a: "Yes. You see a firm price before you confirm. If scope changes, you approve any updates." },
              { q: "What areas are covered?", a: "We’re expanding weekly. Major metros are live today with suburban rollouts underway." },
            ].map((f, i) => (
              <details key={i} className="group open:bg-white">
                <summary className="cursor-pointer list-none p-4 bg-white hover:bg-zinc-50">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{f.q}</span>
                    <span className="text-zinc-400 group-open:rotate-45 transition">+</span>
                  </div>
                </summary>
                <div className="p-4 pt-0 text-zinc-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`p-6 md:p-8 rounded-3xl ${theme.card} border ${theme.border} shadow-sm flex flex-col md:flex-row items-center justify-between gap-6`}
          >
            <div>
              <h3 className="text-xl font-semibold">Ready when you are</h3>
              <p className={`mt-1 ${theme.subtext}`}>
                Download Unlokt to request help instantly or schedule a time that works for you.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className={`inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl ${theme.accent} hover:brightness-95`}
              >
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-XL border border-zinc-300 bg-white hover:bg-zinc-50"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-zinc-600 grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className={`h-7 w-7 ${theme.accent} rounded-lg`} />
              <span className="font-semibold text-zinc-900">Unlokt</span>
            </div>
            <p className="mt-3 max-w-sm">
              The fastest, fairest way to get back in. 24/7 nationwide locksmiths with transparent pricing.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { h: "Company", l: ["About", "Careers", "Press"] },
              { h: "Support", l: ["Help center", "Safety", "Contact"] },
              { h: "Legal", l: ["Terms", "Privacy", "Licensing"] },
            ].map((c, i) => (
              <div key={i}>
                <div className="font-medium text-zinc-900">{c.h}</div>
                <ul className="mt-3 space-y-2">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="hover:text-zinc-900">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Unlokt, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
