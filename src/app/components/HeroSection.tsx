import { ArrowRight } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1585428311604-98738fc5687a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwYWVyaWFsJTIwZHJvbmUlMjBncmVlbiUyMGZhcm18ZW58MXx8fHwxNzc0Mzg5NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wheat field from above"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f5ad10]"></span>
            <span className="text-white/90 text-xs">Sustainable Agriculture</span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Connecting Farmers to Global{" "}
            <span className="text-[#f5ad10]">Markets</span>—Seamlessly
          </h1>

          <p className="text-white/75 text-base mb-8 max-w-xl" style={{ lineHeight: 1.7 }}>
            We provide farmers with direct access to markets, structured logistics, and growth-focused tools—enabling them to operate more efficiently, reduce losses, and increase profitability. Farm Life Market brings together the core elements of agriculture into one connected system.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#f5ad10] text-[#1a1a1a] px-7 py-3.5 rounded-sm hover:bg-[#e09a05] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-sm hover:bg-white/20 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats bottom right */}
        <div className="absolute bottom-12 right-6 md:right-12 flex gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
            <div className="text-white text-2xl" style={{ fontWeight: 700 }}>96%</div>
            <div className="text-white/70 text-xs mt-1">Client Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
            <div className="text-white text-2xl" style={{ fontWeight: 700 }}>20+</div>
            <div className="text-white/70 text-xs mt-1">Active Vendors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
