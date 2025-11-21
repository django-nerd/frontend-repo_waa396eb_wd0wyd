import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/60 bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <div className="h-8 w-8 rounded-md bg-orange-500" />
          Transfreight
        </a>
        <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
          <a href="#how" className="hover:text-white">How It Works</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#get-started" className="hover:text-white">Get Quote</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-3 py-2 rounded-lg border border-white/10"><Phone className="w-4 h-4"/> +1 (800) 123‑4567</a>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-white"><Menu/></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 px-6 py-4 space-y-3 text-blue-100/90">
          <a href="#how" className="block">How It Works</a>
          <a href="#services" className="block">Services</a>
          <a href="#get-started" className="block">Get Quote</a>
          <a href="#faq" className="block">FAQ</a>
          <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg border border-white/10"><Phone className="w-4 h-4"/> +1 (800) 123‑4567</a>
        </div>
      )}
    </header>
  );
}
