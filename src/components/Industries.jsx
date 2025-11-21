export default function Industries() {
  const items = [
    { title: "E‑Commerce & Retail", desc: "Ship products to customers worldwide" },
    { title: "Manufacturing", desc: "Import raw materials and export finished goods" },
    { title: "Agriculture & Food", desc: "Perishables and temperature-controlled options" },
    { title: "Technology & Electronics", desc: "Secure shipping for high‑value items" },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Industries We Serve</h2>
          <p className="mt-3 text-blue-100/80">Built for businesses across sectors and sizes.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
