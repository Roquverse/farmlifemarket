import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight, Package, Ship, Warehouse, Link2 } from "lucide-react";

const heroImg =
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";

const pillars = [
  {
    icon: Link2,
    title: "Supply Chain",
    desc: "Integrated aggregation, warehousing, and transportation networks that move commodities from farm gate to port — reliably and on schedule.",
  },
  {
    icon: Ship,
    title: "Export & Trade",
    desc: "Full-service export facilitation including phytosanitary certification, customs brokerage, and international freight coordination.",
  },
  {
    icon: Package,
    title: "Logistics",
    desc: "Asset-light logistics orchestration using verified third-party carriers and cold-chain providers, tracked in real time through the platform.",
  },
  {
    icon: Warehouse,
    title: "Aggregation & Storage",
    desc: "Regional aggregation hubs and certified storage facilities that preserve commodity quality and extend shelf life before export.",
  },
];

export default function TradeAndSupplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Supply chain and trade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#f5ad10]" />
            <span className="text-[#f5ad10] text-xs uppercase tracking-widest font-semibold">Trade & Supply</span>
          </div>
          <h1 className="text-white font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Moving Commodities.<br />Connecting <span className="text-[#f5ad10]">Markets.</span>
          </h1>
          <p className="text-white/70 mt-3 max-w-xl" style={{ lineHeight: 1.7 }}>
            Our trade and supply infrastructure spans the full commodity journey — from aggregation and storage through export clearance and international delivery.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="w-8 h-0.5 bg-[#de0000]" />
              <span className="text-[#de0000] text-xs uppercase tracking-widest font-semibold">Four Pillars</span>
              <span className="w-8 h-0.5 bg-[#de0000]" />
            </div>
            <h2 className="text-[#0f172a] font-bold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Structured for Reliable Global Trade
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              Each pillar of our trade and supply system is designed to interlock — so when one part moves, the rest follows seamlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group flex gap-6 bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#de0000]/10 flex items-center justify-center shrink-0">
                  <Icon size={26} className="text-[#de0000]" />
                </div>
                <div>
                  <h3 className="text-[#0f172a] font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm" style={{ lineHeight: 1.8 }}>{desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-5 text-[#de0000] text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-[#de0000]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-bold mb-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Ready to streamline your export operations?
            </h2>
            <p className="text-white/80 text-sm" style={{ lineHeight: 1.7 }}>
              Talk to our trade specialists to understand how Farmlife Market can handle your supply chain end to end.
            </p>
          </div>
          <a href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#de0000] px-7 py-3.5 rounded-sm font-bold hover:bg-gray-50 transition-colors">
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
