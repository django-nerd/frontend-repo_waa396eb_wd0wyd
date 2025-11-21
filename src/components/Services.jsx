import { Ship, FileText, Home, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Ocean Freight (FCL & LCL)",
      desc: "Full Container Load & Less than Container Load. Door-to-door and port-to-port options.",
      Icon: Ship,
    },
    {
      title: "Customs Clearance",
      desc: "Export and import documentation with compliance support.",
      Icon: FileText,
    },
    {
      title: "Door-to-Door Service",
      desc: "We handle pickup and final delivery for a seamless experience.",
      Icon: Home,
    },
    {
      title: "Insurance",
      desc: "Cargo insurance options to protect your valuable goods.",
      Icon: Shield,
    },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services We Offer</h2>
          <p className="mt-3 text-blue-100/80">Everything you need to move cargo across the globe.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-200">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
