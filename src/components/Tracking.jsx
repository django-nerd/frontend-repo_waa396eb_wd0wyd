export default function Tracking() {
  const steps = [
    "Booking Confirmed",
    "Documentation Verified",
    "Cargo Picked Up",
    "Export Customs Cleared",
    "Departed Origin Port",
    "In Transit",
    "Arrived at Destination",
    "Import Customs Cleared",
    "Delivered",
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tracking That Keeps You Informed</h2>
          <p className="mt-3 text-blue-100/80">Real-time updates at every step of the journey.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-9 gap-4">
          {steps.map((s, idx) => (
            <div key={s} className={`rounded-xl p-4 text-center border ${idx <= 5 ? 'border-green-400/30 bg-green-500/5' : 'border-white/10 bg-white/5'} text-blue-100/90`}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
