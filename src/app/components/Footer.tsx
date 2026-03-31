import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import logoImg from "figma:asset/f1a60f3da12baa16d2d6978f07f8a486bfc2d3a5.png";

const links = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Standards", href: "/standards" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Our Platform", href: "/platform" },
    { label: "Global Operations", href: "/global-operations" },
    { label: "Network", href: "/network" },
    { label: "Trade & Supply", href: "/trade-supply" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Certifications", href: "/standards" },
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
              <img src={logoImg} alt="Farmlife Market logo" className="w-12 h-12 object-contain" />
              <span className="text-white text-lg" style={{ fontWeight: 600 }}>Farmlife Market</span>
            </Link>
            <p className="text-white/50 text-sm mb-6" style={{ lineHeight: 1.8, maxWidth: "280px" }}>
              Empowering farmers and nourishing families with certified organic produce since 2010.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={14} className="shrink-0 text-[#E8B835]" />
                1234 Harvest Road, Fresno, CA 93711
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={14} className="shrink-0 text-[#E8B835]" />
                (559) 555-0182
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={14} className="shrink-0 text-[#E8B835]" />
                hello@farmlifemarket.com
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E8B835]/20 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-white/60 hover:text-[#E8B835]" />
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
          <p className="text-white/50 text-sm">Subscribe to our newsletter for seasonal updates and special offers.</p>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#E8B835] transition-colors"
            />
            <button
              className="bg-[#E8B835] text-[#1a1a1a] px-5 py-2.5 rounded-lg text-sm hover:bg-[#d4a52e] transition-colors shrink-0"
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
          <p className="text-white/30 text-xs">© 2026 Farmlife Market. All rights reserved.</p>
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