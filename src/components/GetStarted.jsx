import { useState } from "react";

export default function GetStarted() {
  const [form, setForm] = useState({ origin: "", destination: "", container: "FCL" });
  const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backend}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(`Estimated rate: ${data.estimate}`);
    } catch (e) {
      alert("Could not get quote right now. Please try again.");
    }
  };

  return (
    <section id="get-started" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Ship?</h2>
            <p className="mt-3 text-blue-100/80">Get a free quote in 60 seconds or sign in to your dashboard.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#login" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/15 transition-colors">Customer Login</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-blue-200/80 mb-2">Origin</label>
                <input required value={form.origin} onChange={(e)=>setForm({...form, origin:e.target.value})} className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Shanghai, CN" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-2">Destination</label>
                <input required value={form.destination} onChange={(e)=>setForm({...form, destination:e.target.value})} className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Los Angeles, US" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-2">Container Type</label>
                <select value={form.container} onChange={(e)=>setForm({...form, container:e.target.value})} className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white">
                  <option value="FCL">FCL</option>
                  <option value="LCL">LCL</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors">Get Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
