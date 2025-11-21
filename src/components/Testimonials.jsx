export default function Testimonials() {
  const items = [
    {
      name: "Sarah K.",
      company: "EcomWave",
      quote:
        "We shaved days off our booking process and saved 18% on freight in Q3.",
    },
    {
      name: "James T.",
      company: "BrightManufacturing",
      quote:
        "Real-time tracking gave our team full visibility. The platform is a breeze.",
    },
    {
      name: "Priya D.",
      company: "AgroGlobal",
      quote:
        "Transparent pricing and quick booking helped us hit tight export deadlines.",
    },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Customers Say</h2>
          <p className="mt-3 text-blue-100/80">Time saved, costs reduced, and full visibility.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 border border-blue-400/30" />
              <p className="mt-4 text-blue-100/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-blue-200/80">{t.name} • {t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
