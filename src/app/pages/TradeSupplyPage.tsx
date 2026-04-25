import { TrendingUp, Scale, FileText, Clock, ShieldCheck, DollarSign, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/trade supply.jpg";

const tradeFeatures = [
  {
    icon: TrendingUp,
    title: "Spot & Forward Contracts",
    desc: "Access both spot market pricing and forward contracts that let you lock in rates up to 12 months ahead, protecting against seasonal volatility.",
  },
  {
    icon: Scale,
    title: "Fair Price Guarantee",
    desc: "Our proprietary pricing engine benchmarks against global commodity indices to ensure sellers receive fair compensation and buyers pay market-appropriate rates.",
  },
  {
    icon: FileText,
    title: "Digital Trade Documentation",
    desc: "Generate and manage all trade documents digitally — letters of credit, bills of lading, phytosanitary certificates, and certificates of origin.",
  },
  {
    icon: Clock,
    title: "24/7 Trade Desk",
    desc: "Our dedicated trade specialists are available around the clock across time zones to support contract negotiation, dispute resolution, and market advice.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Escrow",
    desc: "Funds are held in secure escrow until delivery milestones are confirmed, protecting both parties on every transaction.",
  },
  {
    icon: DollarSign,
    title: "Multi-Currency Settlement",
    desc: "Settle payments in 40+ currencies with competitive FX rates and optional hedging to manage international currency risk.",
  },
];

const commodities = [
  { category: "Grains & Cereals", items: ["Organic Wheat", "Brown Rice", "Quinoa", "Oats", "Millet", "Barley"], volume: "$85M annual" },
  { category: "Fruits & Vegetables", items: ["Avocados", "Berries", "Leafy Greens", "Citrus", "Root Vegetables", "Tomatoes"], volume: "$120M annual" },
  { category: "Nuts & Seeds", items: ["Almonds", "Cashews", "Chia Seeds", "Flaxseed", "Sunflower Seeds", "Walnuts"], volume: "$65M annual" },
  { category: "Specialty Crops", items: ["Cacao", "Vanilla", "Saffron", "Moringa", "Spirulina", "Turmeric"], volume: "$48M annual" },
  { category: "Dairy & Alternatives", items: ["Organic Milk", "Artisan Cheese", "Oat Milk", "Nut Milks", "Yogurt", "Butter"], volume: "$55M annual" },
  { category: "Oils & Extracts", items: ["Olive Oil", "Coconut Oil", "Hemp Oil", "Argan Oil", "Cold-Press Juices", "Herb Extracts"], volume: "$47M annual" },
];

const supplyChainSteps = [
  { label: "Farm Harvest", detail: "Produce harvested and quality-checked at the farm level" },
  { label: "Grading & Sorting", detail: "Automated and manual grading for size, quality, and certification compliance" },
  { label: "Packaging", detail: "Eco-packaging with QR traceability codes applied" },
  { label: "Cold Storage", detail: "Temperature-controlled storage at regional hubs" },
  { label: "Documentation", detail: "All trade documents generated and verified digitally" },
  { label: "Customs Clearance", detail: "In-country agents handle import/export compliance" },
  { label: "Last-Mile Delivery", detail: "Final delivery to buyer's warehouse or retail floor" },
  { label: "Payment Release", detail: "Escrow released upon confirmed delivery and quality sign-off" },
];

export function TradeSupplyPage() {
  return (
    <div>
      <PageHero
        badge="Trade & Supply"
        title="Global Agricultural"
        titleHighlight="Trade—Executed with Precision"
        description="Source verified supply, manage logistics, and transact with confidence through an integrated trade infrastructure."
        image={heroImage}
        breadcrumb={[{ label: "Trade & Supply" }]}
      >
        <div className="flex flex-wrap gap-4" style={{marginTop: "16px"}}>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#f5ad10] text-[#1a1a1a] px-7 py-3.5 rounded-sm hover:bg-[#e09a05] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Start Trading
              <ArrowRight size={16} />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-sm hover:bg-white/20 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Explore Supply
            </a>
          </div>
      </PageHero>

      {/* Trade Volume Banner */}
      <section className="bg-[#E8B835] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-[#1a1a1a] text-sm mb-1" style={{ fontWeight: 600 }}>Annual Trade Volume</div>
              <div className="text-[#1a1a1a]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>$420M+</div>
            </div>
            <div className="h-12 w-px bg-[#1a1a1a]/20 hidden md:block" />
            <div className="text-center">
              <div className="text-[#1a1a1a]" style={{ fontWeight: 800, fontSize: "1.8rem" }}>2.1M+</div>
              <div className="text-[#1a1a1a]/70 text-sm">Transactions processed</div>
            </div>
            <div className="h-12 w-px bg-[#1a1a1a]/20 hidden md:block" />
            <div className="text-center">
              <div className="text-[#1a1a1a]" style={{ fontWeight: 800, fontSize: "1.8rem" }}>40+</div>
              <div className="text-[#1a1a1a]/70 text-sm">Settlement currencies</div>
            </div>
            <div className="h-12 w-px bg-[#1a1a1a]/20 hidden md:block" />
            <div className="text-center">
              <div className="text-[#1a1a1a]" style={{ fontWeight: 800, fontSize: "1.8rem" }}>99.3%</div>
              <div className="text-[#1a1a1a]/70 text-sm">On-time delivery rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Trade Tools</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a] max-w-xl mx-auto" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}>
              Infrastructure built for reliable, transparent trade
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {tradeFeatures.map((f) => (
              <div key={f.title} className="group border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#E8B835]/30 transition-all">
                <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center mb-5">
                  <f.icon size={22} className="text-[#2d5016]" />
                </div>
                <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.05rem" }}>{f.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodity Categories */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Commodities</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              What we trade
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commodities.map((c) => (
              <div key={c.category} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#1a2e1a]" style={{ fontWeight: 700 }}>{c.category}</h3>
                  <span className="text-xs text-[#2d5016] bg-[#2d5016]/10 px-3 py-1 rounded-full" style={{ fontWeight: 600 }}>
                    {c.volume}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <span key={item} className="bg-[#f8f5ee] text-gray-600 text-xs px-3 py-1.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Supply Chain</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              End-to-end supply chain visibility
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {supplyChainSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#f8f5ee] rounded-xl p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#E8B835] flex items-center justify-center shrink-0">
                      <span className="text-[#1a1a1a] text-xs" style={{ fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <h4 className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>{step.label}</h4>
                  </div>
                  <p className="text-gray-500 text-xs" style={{ lineHeight: 1.7 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d5016]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700 }}>
            Start trading with confidence
          </h2>
          <p className="text-white/70 mb-8" style={{ lineHeight: 1.75 }}>
            Our trade team will help you set up your first contract, understand the documentation, and ensure a smooth first shipment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Open a Trade Account <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
