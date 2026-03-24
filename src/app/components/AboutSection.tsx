import { CheckCircle2 } from "lucide-react";

const farmerImage = "https://images.unsplash.com/photo-1627742748562-7cf054787d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b21hbiUyMHNtaWxpbmclMjBob2xkaW5nJTIwdmVnZXRhYmxlcyUyMGJhc2tldHxlbnwxfHx8fDE3NzQzODk3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  { title: "100% Organic Certified", desc: "All our products meet the highest organic standards." },
  { title: "Farm-to-Table Fresh", desc: "Harvested and delivered within 24 hours to preserve nutrients." },
  { title: "Sustainably Sourced", desc: "Eco-friendly farming practices that protect our environment." },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={farmerImage}
                alt="Farmer with fresh vegetables"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#E8B835] rounded-xl p-5 shadow-xl">
              <div className="text-[#1a1a1a] text-3xl" style={{ fontWeight: 700 }}>15+</div>
              <div className="text-[#1a1a1a]/80 text-xs mt-1" style={{ fontWeight: 500 }}>Years of Organic<br/>Farming</div>
            </div>
            {/* Green accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2d5016]/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]"></span>
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>About Us</span>
            </div>

            <h2
              className="text-[#1a2e1a] mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              We grow fresh organic produce
            </h2>

            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
              Our farm has been dedicated to growing the finest organic produce for over a decade.
              We believe that the best food starts with healthy soil, clean water, and a deep
              respect for nature's rhythms.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#E8B835]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-[#E8B835]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>{f.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#2d5016] text-white px-8 py-3.5 rounded-sm hover:bg-[#1f3a0f] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
