export default function FAQ() {
  const faqs = [
    { q: "How quickly can I get a quote?", a: "Instantly—compare options in seconds after entering your shipment details." },
    { q: "What carriers do you work with?", a: "We connect you to six major ocean carriers including MAERSK, ONE, KMTC, ZIM, HMM, and CMACGM." },
    { q: "Do you handle customs clearance?", a: "Yes, full export/import documentation and compliance support." },
    { q: "Can I track my shipment?", a: "Absolutely. Real-time tracking and automatic status updates are included." },
    { q: "Do you offer insurance?", a: "Yes, cargo insurance options are available for additional protection." },
    { q: "How do I book a shipment?", a: "Select your preferred option from the quote results and confirm online in minutes." },
  ];

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-white/10 bg-white/5 p-5 open:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium">
                {q}
                <span className="ml-4 text-blue-200/80 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-blue-100/80">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
