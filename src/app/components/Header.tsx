import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "figma:asset/f1a60f3da12baa16d2d6978f07f8a486bfc2d3a5.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Farmlife Market logo" className="w-14 h-14 object-contain drop-shadow-md" />
          <span className="text-white text-lg" style={{ fontWeight: 700, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>Farmlife Market</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white/90 text-sm hover:text-white transition-colors">Sign In</a>
          <a
            href="#"
            className="bg-[#E8B835] text-[#1a1a1a] px-5 py-2 rounded-sm text-sm hover:bg-[#d4a52e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a2e1a]/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <a key={item} href="#" className="text-white/90 text-sm hover:text-white">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-[#E8B835] text-[#1a1a1a] px-5 py-2 rounded-sm text-sm text-center"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}