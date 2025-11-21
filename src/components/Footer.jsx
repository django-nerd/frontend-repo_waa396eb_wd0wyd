export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-blue-100/80">
        <div>
          <div className="h-8 w-8 rounded-md bg-orange-500" />
          <p className="mt-3">Digital freight forwarding platform for instant quotes, seamless booking, and real-time tracking.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#">Shipping Calculator</a></li>
            <li><a href="#">Tracking</a></li>
            <li><a href="#">Documentation Guide</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Support</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#faq">Help Center</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-blue-200/60 text-sm">© {new Date().getFullYear()} Transfreight. All rights reserved.</div>
    </footer>
  );
}
