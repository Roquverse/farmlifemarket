import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const links = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Quality & Compliance", href: "/quality-compliance" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Our Platform", href: "/coming-soon" },
    { label: "Global Operations", href: "/global-operations" },
    { label: "Network", href: "/network" },
    { label: "Trade & Supply", href: "/trade-supply" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Certifications", href: "/quality-compliance" },
    { label: "Press", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0f1f0f] text-white">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-16">    
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="Farm Life Market logo" className="w-12 h-12 object-contain" />
              <span className="text-white text-lg" style={{ fontWeight: 600 }}>Farm Life Market</span>
            </Link>
            <p className="text-white/50 text-sm mb-8" style={{ lineHeight: 1.8, maxWidth: "280px" }}>
              Building trusted infrastructure for agricultural trade, logistics and market access.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="text-white/50 text-sm">
                <div className="text-white/80 mb-1" style={{ fontWeight: 500 }}>Head Office — New York</div>
                One World Trade Center, 85th Floor
              </div>
              <div className="text-white/50 text-sm">
                <a href="tel:+12123726006" className="hover:text-[#E8B835] transition-colors">(212) 372 6006</a><br></br>
                <a href="mailto:contact@farmlifemarket.com" className="hover:text-[#E8B835] transition-colors">contact@farmlifemarket.com</a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center transition-colors text-white/60 hover:text-[#E8B835]"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm mb-5" style={{ fontWeight: 600 }}>{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm">Insights on agriculture, trade and market opportunities.</p>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#f5ad10] transition-colors"
            />
            <button
              className="bg-[#f5ad10] text-[#1a1a1a] px-5 py-2.5 rounded-lg text-sm hover:bg-[#e09a05] transition-colors shrink-0"
              style={{ fontWeight: 600 }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-white/50 text-xs font-medium">New York | Lagos | Global Operations</p>
            <p className="text-white/30 text-xs">© 2026 Farm Life Market LLC. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}