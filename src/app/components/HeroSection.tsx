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
            <span className="w-2 h-2 rounded-full bg-[#E8B835]"></span>
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
            Empowering Farmers with Advanced{" "}
            <span className="text-[#E8B835]">Agriculture</span> Solutions
          </h1>

          <p className="text-white/75 text-base mb-8 max-w-md" style={{ lineHeight: 1.7 }}>
            We provide cutting-edge farming tools and expertise to help you grow
            more, waste less, and build a sustainable future for generations to come.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-7 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
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
            <div className="text-white text-2xl" style={{ fontWeight: 700 }}>12+</div>
            <div className="text-white/70 text-xs mt-1">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
