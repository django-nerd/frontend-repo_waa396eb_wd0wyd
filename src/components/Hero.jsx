import { Ship, Globe2, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)",backgroundSize:"24px 24px"}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Top bar */}
        <div className="flex items-center gap-2 text-blue-200/80 text-sm mb-6">
          <Ship className="w-4 h-4 text-orange-400" />
          <span>Transfreight • Digital Freight Forwarding</span>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Ship Internationally with Confidence
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-100/90 leading-relaxed">
              Get instant quotes from 6 carriers, book online, and track your cargo in real-time.
              Simple. Transparent. Reliable.
            </p>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-blue-100/90">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <ShieldCheck className="w-4 h-4 text-green-300" />
                <span>Real-Time Tracking</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <Globe2 className="w-4 h-4 text-blue-300" />
                <span>6 Major Carriers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>10,000+ Shipments</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 shadow-lg shadow-orange-500/20 transition-colors">
                Get a Quote
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/15 transition-colors">
                How It Works
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-400/20 to-orange-400/20 border border-white/10 p-1">
              <div className="h-full w-full rounded-xl bg-slate-950/60 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-6">
                  <Globe2 className="mx-auto w-16 h-16 md:w-20 md:h-20 text-blue-300" />
                  <p className="mt-3 text-blue-100/80">Global routes • Ocean Freight • Door-to-Door</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-blue-100/70">
                    {[
                      'LAX', 'SZX', 'HKG', 'SGP', 'RTM', 'HAM', 'MUM', 'DXB', 'SYD'
                    ].map((p) => (
                      <div key={p} className="rounded-md bg-white/5 border border-white/10 py-2">{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
