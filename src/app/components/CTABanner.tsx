import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const aerialImg = "https://images.unsplash.com/photo-1751818430520-d2954873e314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBncmVlbiUyMGZhcm1sYW5kJTIwcm93cyUyMGNyb3BzJTIwYmlyZHMlMjBleWV8ZW58MXx8fHwxNzc0Mzg5NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={aerialImg}
          alt="Aerial farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/75" />
      </div>

      {/* Decorative wheat SVG lines */}
      <div className="absolute left-0 top-0 h-full w-32 opacity-10">
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="w-full h-full">
          <path d="M50 0 Q60 100 40 200 Q60 300 50 400" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M30 50 Q50 70 40 100" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M70 50 Q50 70 60 100" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M30 150 Q50 170 40 200" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M70 150 Q50 170 60 200" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M30 250 Q50 270 40 300" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M70 250 Q50 270 60 300" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute right-0 top-0 h-full w-32 opacity-10 scale-x-[-1]">
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="w-full h-full">
          <path d="M50 0 Q60 100 40 200 Q60 300 50 400" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M30 50 Q50 70 40 100" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M70 50 Q50 70 60 100" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
          <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Get Started</span>
          <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
        </div>

        <h2
          className="text-white mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}
        >
          Access the Future of Agricultural Trade
        </h2>

        <p className="text-white/70 mb-8 text-base" style={{ lineHeight: 1.7 }}>
          Join a growing network of farmers, buyers, and partners building a more efficient and connected agricultural economy.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#f5ad10] text-[#1a1a1a] px-8 py-4 rounded-sm hover:bg-[#e09a05] transition-colors"
          style={{ fontWeight: 700 }}
        >
          Join the Platform
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
