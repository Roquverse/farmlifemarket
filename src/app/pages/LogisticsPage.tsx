import { Truck, Thermometer, MapPin, Clock, BarChart2, Shield, ArrowRight, CheckCircle, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200";

const services = [
  {
    icon: Truck,
    title: "Freight & Haulage",
    desc: "We coordinate road, rail, sea, and air freight for agricultural commodities — working with a verified network of licensed carriers across all major trade corridors.",
    features: ["Multi-modal routing", "Carrier vetting & insurance", "Real-time tracking", "Customs pre-clearance"],
  },
  {
    icon: Thermometer,
    title: "Cold Chain Management",
    desc: "Temperature-controlled logistics for perishable produce — from farm-side pre-cooling to reefer transport and cold-storage hubs at ports and distribution centres.",
    features: ["Pre-cooling facilities", "Reefer container management", "Temperature logging", "HACCP-aligned protocols"],
  },
  {
    icon: MapPin,
    title: "Last-Mile Delivery",
    desc: "Reliable delivery from deconsolidation hubs to buyer warehouses, retail distribution centres, or processing plants — coordinated through our logistics operations desk.",
    features: ["Hub-to-buyer routing", "Proof of delivery", "Scheduled delivery windows", "Returns management"],
  },
  {
    icon: BarChart2,
    title: "Logistics Analytics",
    desc: "Full visibility into shipment status, transit times, cost per unit, and carrier performance — aggregated in real time on your Farm Life Market platform dashboard.",
    features: ["Live shipment tracking", "Cost analytics", "Carrier scorecards", "Delay alerting"],
  },
];

const stats = [
  { value: "120+", label: "Verified Carrier Partners" },
  { value: "38", label: "Countries Served" },
  { value: "98.2%", label: "On-Time Delivery Rate" },
  { value: "500K+", label: "MT Moved Annually" },
];

const process = [
  { step: "01", title: "Order Matching", desc: "Trade order confirmed on platform; logistics desk automatically receives shipment brief." },
  { step: "02", title: "Carrier Assignment", desc: "Best-fit carrier selected from verified network based on route, commodity, and timing." },
  { step: "03", title: "Documentation & Compliance", desc: "Phytosanitary, export, and carrier documentation generated and filed automatically." },
  { step: "04", title: "In-Transit Monitoring", desc: "Shipment tracked in real time with automated alerts for delays or temperature breaches." },
  { step: "05", title: "Delivery & Settlement", desc: "Proof of delivery triggers payment release through the platform's settlement engine." },
];

function TrackingWidget() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = value.trim();
    if (!id) return;
    navigate(`/tracking?id=${encodeURIComponent(id)}`);
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#E8B835]/20 flex items-center justify-center">
          <Search size={18} className="text-[#E8B835]" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Quick Shipment Lookup</p>
          <p className="text-white/50 text-xs">Enter your tracking ID below</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. FLM-2026-004891"
          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm font-mono outline-none focus:border-[#E8B835] focus:bg-white/15 transition-all"
        />
        <button
          type="submit"
          className="w-full bg-[#E8B835] text-[#1a1a1a] py-3.5 rounded-xl font-bold text-sm hover:bg-[#d4a52e] transition-colors flex items-center justify-center gap-2"
        >
          Track Shipment <ArrowRight size={15} />
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-white/40 text-xs mb-3">Or go to the full tracking portal</p>
        <Link
          to="/tracking"
          className="inline-flex items-center gap-2 text-[#E8B835] text-sm font-semibold hover:gap-3 transition-all"
        >
          Open Tracking Portal <ArrowRight size={14} />
        </Link>
      </div>

      {/* Decorative status pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { dot: "bg-green-400", label: "12 Delivered today" },
          { dot: "bg-blue-400", label: "47 In transit" },
          { dot: "bg-amber-400", label: "3 Pending clearance" },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-1.5 rounded-full">
            <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogisticsPage() {
  return (
    <div>
      <PageHero
        badge="Logistics"
        title="Moving Commodities."
        titleHighlight="Reliably."
        description="Our logistics infrastructure connects farm gates to global buyers — managing freight, cold-chain, documentation, and delivery through one coordinated system."
        image={heroImage}
        breadcrumb={[
          { label: "Trade & Supply", href: "/trade-supply" },
          { label: "Logistics" },
        ]}
      />

      {/* Stats bar */}
      <section className="bg-[#1a2e1a] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-[#E8B835] mb-1"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Core Services"
            title="End-to-End"
            titleHighlight="Logistics Coverage"
            description="From the first mile out of the farm to the last mile into the buyer's facility — every stage of the journey is managed and monitored."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, features }) => (
              <div
                key={title}
                className="group bg-[#fafafa] rounded-2xl p-8 border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#edf4e4] flex items-center justify-center mb-6 group-hover:bg-[#2d5016] transition-colors">
                  <Icon size={22} className="text-[#2d5016] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#1a2e1a] font-semibold text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm mb-6" style={{ lineHeight: 1.8 }}>{desc}</p>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-[#2d5016] shrink-0 mt-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="The Process"
            title="From Order to Delivery"
            titleHighlight="Automated"
          />

          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-[#d8d0c0] hidden md:block" />
            <div className="space-y-6">
              {process.map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="group flex gap-6 md:gap-10 items-start bg-white rounded-2xl p-7 border border-[#e8e2d4] hover:shadow-md transition-shadow relative"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1a2e1a] flex items-center justify-center shrink-0 z-10">
                    <span className="text-[#E8B835] font-bold text-sm">{step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm" style={{ lineHeight: 1.8 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipment Tracking */}
      <section className="py-24 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Live Tracking"
                title="Track Your Shipment"
                titleHighlight="In Real Time."
                description="Every shipment moving through the Farm Life Market network is assigned a unique tracking ID. Use it to monitor milestones, temperature status, carrier updates, and estimated arrival — all in one place."
                dark
              />
              <ul className="space-y-3 mb-10 -mt-8">
                {["Live milestone updates from farm gate to delivery", "Temperature & cold-chain monitoring", "Carrier contact and vessel details", "Automated alerts for delays or breaches"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle size={15} className="shrink-0 mt-0.5 text-[#E8B835]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <TrackingWidget />
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Why It Works"
                title="Built on Verified Networks"
                titleHighlight="& Real-Time Accountability"
              />
              <div className="space-y-5 -mt-8">
                {[
                  { icon: Shield, text: "Every carrier partner is vetted for licensing, insurance, and compliance before joining our network." },
                  { icon: Clock, text: "Automated escalation protocols activate within 30 minutes of any delay or breach event." },
                  { icon: BarChart2, text: "Clients have full dashboard access to shipment data, carrier performance, and cost reports at any time." },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-[#edf4e4] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#2d5016]" />
                    </div>
                    <p className="text-gray-500 text-sm pt-1" style={{ lineHeight: 1.7 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a2e1a] rounded-2xl p-10 text-center">
              <h3 className="text-white font-bold text-xl mb-4">Need a Logistics Quote?</h3>
              <p className="text-white/60 text-sm mb-8" style={{ lineHeight: 1.7 }}>
                Share your commodity, origin, destination, and volume — our logistics desk will respond within one business day.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm font-bold hover:bg-[#d4a52e] transition-colors"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
