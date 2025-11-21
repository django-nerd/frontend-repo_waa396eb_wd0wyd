import { FileText, CalendarCheck, LocateFixed } from "lucide-react";

const steps = [
  {
    title: "Get Instant Quotes",
    desc: "Enter shipment details and compare prices, transit times, and services in seconds.",
    Icon: FileText,
  },
  {
    title: "Book Your Shipment",
    desc: "Choose your preferred option and book online in minutes with instant confirmation.",
    Icon: CalendarCheck,
  },
  {
    title: "Track in Real-Time",
    desc: "Monitor your cargo from pickup to delivery with automatic status updates.",
    Icon: LocateFixed,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-blue-100/80">Three simple steps to ship internationally with confidence.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
