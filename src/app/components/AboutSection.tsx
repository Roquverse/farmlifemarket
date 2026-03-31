import { CheckCircle2 } from "lucide-react";

const farmerImage = "/img1.jpg";

const features = [
  { title: "Integrated Market Access", desc: "Direct connections between farmers and verified buyers, removing unnecessary intermediaries." },
  { title: "Coordinated Logistics", desc: "Streamlined movement of goods from farm to destination with speed and reliability." },
  { title: "Scalable Growth Tools", desc: "Access to resources and systems that support expansion and long-term profitability." },
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
            <div className="absolute -bottom-6 -right-6 bg-[#f5ad10] rounded-xl p-5 shadow-xl">
              <div className="text-[#1a1a1a] text-3xl" style={{ fontWeight: 700 }}>15+</div>
              <div className="text-[#1a1a1a]/80 text-xs mt-1" style={{ fontWeight: 500 }}>Global Market<br />Regions</div>
            </div>
            {/* Green accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1e293b]/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
              <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>About Us</span>
            </div>

            <h2
              className="text-[#0f172a] mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              Building the Infrastructure Behind Modern Agriculture
            </h2>

            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
              Farm Life Market is a technology-driven platform designed to connect agricultural supply with real market demand. We bring together farmers, buyers, logistics, and financial access into one structured ecosystem—improving efficiency, reducing loss, and enabling scalable growth across regions.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#f5ad10]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-[#f5ad10]" />
                  </div>
                  <div>
                    <div className="text-[#0f172a] text-sm" style={{ fontWeight: 600 }}>{f.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1e293b] text-white px-8 py-3.5 rounded-sm hover:bg-[#0f172a] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Access the Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
