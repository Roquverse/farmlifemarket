import { MapPin, Package, ArrowRight, Plane, Ship, Train } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router";

const heroImage =
  "operations.jpeg";

const regions = [
  {
    name: "North America",
    countries: "USA, Canada, Mexico",
    hubs: ["Fresno, CA", "Toronto, ON", "Mexico City"],
    color: "#E8B835",
  },
  {
    name: "Europe",
    countries: "Germany, France, Netherlands, Spain, Italy + 12 more",
    hubs: ["Amsterdam", "Frankfurt", "Paris"],
    color: "#2d5016",
  },
  {
    name: "Asia Pacific",
    countries: "Australia, Japan, South Korea, New Zealand + 8 more",
    hubs: ["Sydney", "Tokyo", "Singapore"],
    color: "#5a8f2e",
  },
  {
    name: "South America",
    countries: "Brazil, Colombia, Argentina, Peru + 5 more",
    hubs: ["São Paulo", "Bogotá", "Lima"],
    color: "#8fb85a",
  },
  {
    name: "Middle East & Africa",
    countries: "UAE, Kenya, South Africa, Morocco + 9 more",
    hubs: ["Dubai", "Nairobi", "Cape Town"],
    color: "#c4a035",
  },
  {
    name: "Southeast Asia",
    countries: "Thailand, Vietnam, Indonesia, Philippines + 4 more",
    hubs: ["Bangkok", "Ho Chi Minh City", "Jakarta"],
    color: "#6ab04c",
  },
];

const globalStats = [
  { value: "30+", label: "Countries Served" },
  { value: "1,300+", label: "Producer Partners" },
  { value: "6", label: "Regional Trade Hubs" },
  { value: "$420M+", label: "Trade Capacity" },
];

const logistics = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Express air freight for premium, high-value, and time-sensitive produce. Temperature-controlled cargo containers available.",
    time: "1–5 days",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Refrigerated container shipping for bulk commodity orders. Cost-effective for stable produce with longer shelf lives.",
    time: "10–45 days",
  },
  {
    icon: Train,
    title: "Rail & Road",
    desc: "Intercontinental rail networks and road logistics for Europe, Asia, and North America corridors.",
    time: "3–14 days",
  },
];

const challenges = [
  {
    challenge: "Regulatory Complexity",
    solution: "Our in-country compliance teams handle phytosanitary permits, import/export documentation, and customs clearance in all 30+ markets.",
  },
  {
    challenge: "Cold Chain Integrity",
    solution: "IoT-enabled temperature loggers track every shipment in real time, with automatic alerts and intervention protocols for deviations.",
  },
  {
    challenge: "Currency & Payment Risk",
    solution: "Multi-currency escrow accounts and hedging support protect both buyers and sellers from FX volatility on international contracts.",
  },
  {
    challenge: "Local Market Knowledge",
    solution: "Regional teams of agricultural economists and market specialists provide on-the-ground intelligence unavailable from global databases.",
  },
];

export function GlobalOperationsPage() {
  return (
    <div>
      <PageHero
        badge="Global Reach"
        title="A Global Agricultural Network"
        titleHighlight="Spanning 6 Continents"
        description="Connecting producers, buyers, and logistics partners across 30+ countries through coordinated trade infrastructure and regional market access."
        image={heroImage}
        imagePosition="top"
        breadcrumb={[{ label: "Global Operations" }]}
        button="Join the Network"
        button2="Partner with Us"
      />

      {/* Global Stats */}
      {/* <section className="bg-[#2d5016] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#E8B835]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Regions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Regional Presence"
            title="Our footprint"
            titleHighlight="around the globe"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((r) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#1a2e1a] font-semibold">{r.name}</h3>
                  <span
                    className="w-2 h-2 rounded-full shrink-0 mt-1"
                    style={{ background: r.color }}
                  />
                </div>
                <p className="text-gray-500 text-sm mb-5">{r.countries}</p>
                <div>
                  <div className="text-[10px] text-gray-400 mb-2.5 uppercase tracking-wider font-semibold">Logistics Hubs</div>
                  <div className="flex flex-wrap gap-2">
                    {r.hubs.map((hub) => (
                      <div key={hub} className="flex items-center gap-1.5 bg-[#fafafa] border border-gray-100 rounded-full px-3 py-1">
                        <MapPin size={10} className="text-[#2d5016]" />
                        <span className="text-xs text-gray-600">{hub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Modes */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Logistics"
            title="Multi-modal"
            titleHighlight="shipping solutions"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {logistics.map((l) => (
              <div key={l.title} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all text-center">
                <div className="w-12 h-12 bg-[#edf4e4] rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#2d5016] transition-colors">
                  <l.icon size={22} className="text-[#2d5016] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#1a2e1a] mb-2 font-semibold">{l.title}</h3>
                <div className="inline-block bg-[#edf4e4] text-[#2d5016] text-xs px-3 py-1 rounded-full mb-4 font-semibold">
                  Transit: {l.time}
                </div>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="How We Solve It"
            title="Turning global challenges"
            titleHighlight="into competitive advantages"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#edf4e4] rounded-lg flex items-center justify-center shrink-0">
                    <Package size={16} className="text-[#2d5016]" />
                  </div>
                  <h3 className="text-[#1a2e1a] font-semibold">{c.challenge}</h3>
                </div>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{c.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2e1a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700 }}>
            Ready to take your produce global?
          </h2>
          <p className="text-white/70 mb-8" style={{ lineHeight: 1.75 }}>
            Our global operations team is available 24/7 to help you navigate international markets, logistics, and compliance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
