import { TimerReset, Wallet, ShieldCheck, BadgeCheck } from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      title: "Save Time",
      points: [
        "No more waiting for quotes or making multiple phone calls",
        "Book shipments 24/7 from anywhere",
      ],
      Icon: TimerReset,
    },
    {
      title: "Save Money",
      points: [
        "Compare rates across 6 carriers to find the best price",
        "Transparent pricing with no hidden fees",
      ],
      Icon: Wallet,
    },
    {
      title: "Peace of Mind",
      points: [
        "Track every shipment with real-time updates",
        "Dedicated support team when you need help",
      ],
      Icon: ShieldCheck,
    },
    {
      title: "Professional Service",
      points: [
        "Work with experienced freight forwarding experts",
        "Customs clearance and documentation support",
      ],
      Icon: BadgeCheck,
    },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Transfreight</h2>
          <p className="mt-3 text-blue-100/80">We combine technology and expertise to make global shipping simple.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, points, Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-200">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-2 space-y-2 text-blue-100/80 text-sm list-disc list-inside">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
