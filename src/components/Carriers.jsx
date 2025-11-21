export default function Carriers() {
  const carriers = [
    { name: "MAERSK", color: "bg-blue-500" },
    { name: "ONE", color: "bg-pink-500" },
    { name: "KMTC", color: "bg-indigo-500" },
    { name: "ZIM", color: "bg-red-500" },
    { name: "HMM", color: "bg-emerald-500" },
    { name: "CMACGM", color: "bg-sky-500" },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <p className="text-center text-blue-100/70">Access to the world's leading shipping lines</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {carriers.map(({ name, color }) => (
            <div key={name} className={`h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white font-semibold tracking-wide ${color} bg-opacity-20`}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
