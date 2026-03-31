import { Cpu, Globe, BarChart2, Bell, Lock, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1625419196393-fcd5737436a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBwbGF0Zm9ybSUyMHNvZnR3YXJlJTIwZHJvbmUlMjBmaWVsZHxlbnwxfHx8fDE3NzQ5ODUwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Crop Analytics",
    desc: "Our machine learning models analyze soil health, weather patterns, and market data to deliver precision recommendations for every crop cycle.",
  },
  {
    icon: Globe,
    title: "Global Marketplace Hub",
    desc: "A single dashboard to list products, manage buyer relationships, negotiate contracts, and track international orders across 30+ countries.",
  },
  {
    icon: BarChart2,
    title: "Real-Time Market Intelligence",
    desc: "Stay ahead with live commodity pricing, demand forecasts, and competitor benchmarks — all updated hourly from verified market feeds.",
  },
  {
    icon: Bell,
    title: "Smart Alerts & Automation",
    desc: "Set custom thresholds for prices, yield targets, and compliance deadlines. Our platform notifies you instantly and can trigger automated actions.",
  },
  {
    icon: Lock,
    title: "Secure Trade Documentation",
    desc: "Generate, verify, and store all trade documents — from certificates of origin to phytosanitary records — within a fully encrypted environment.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Field App",
    desc: "The Farmlife Field App brings full platform power to your pocket. Log harvests, scan barcodes, and communicate with buyers — even offline.",
  },
];

const plans = [
  {
    name: "Grower",
    price: "$49",
    period: "/mo",
    desc: "Perfect for independent farms getting started with digital agriculture.",
    features: ["Up to 50 product listings", "Basic market analytics", "Logistics booking", "Email support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Producer",
    price: "$149",
    period: "/mo",
    desc: "For established farms ready to scale into new markets.",
    features: ["Unlimited listings", "Advanced AI analytics", "Priority logistics", "Compliance tools", "Dedicated account manager"],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For agricultural cooperatives and large-scale operations.",
    features: ["White-label options", "API access", "Custom integrations", "SLA guarantees", "24/7 premium support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const stats = [
  { value: "99.9%", label: "Platform uptime" },
  { value: "50K+", label: "Active users" },
  { value: "2.1M", label: "Transactions processed" },
  { value: "<2s", label: "Average load time" },
];

export function PlatformPage() {
  return (
    <div>
      <PageHero
        badge="Our Technology"
        title="The Platform Built for"
        titleHighlight="Modern Agriculture"
        description="Farmlife Market's digital platform brings together AI analytics, global trade tools, and logistics management into one seamless ecosystem designed for the future of farming."
        image={heroImage}
        breadcrumb={[{ label: "Platform" }]}
      />

      {/* Stats */}
      <section className="bg-[#1a2e1a] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#E8B835]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}>{s.value}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Platform Features</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a] max-w-xl mx-auto" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}>
              Every tool you need, seamlessly integrated
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f) => (
              <div key={f.title} className="group bg-[#f8f5ee] rounded-2xl p-7 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#E8B835]/20">
                <div className="w-12 h-12 bg-[#E8B835]/20 rounded-xl flex items-center justify-center mb-5">
                  <f.icon size={22} className="text-[#2d5016]" />
                </div>
                <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.05rem" }}>{f.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Pricing</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Simple, transparent pricing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-[#2d5016] text-white shadow-xl scale-105"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <div className={`text-sm mb-1 ${plan.highlight ? "text-[#E8B835]" : "text-[#E8B835]"}`} style={{ fontWeight: 600 }}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span style={{ fontSize: "2.2rem", fontWeight: 800, color: plan.highlight ? "#fff" : "#1a2e1a" }}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-7 ${plan.highlight ? "text-white/70" : "text-gray-500"}`} style={{ lineHeight: 1.7 }}>
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white/90" : "text-gray-700"}`}>
                      <CheckCircle2 size={15} className={plan.highlight ? "text-[#E8B835]" : "text-[#E8B835]"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-6 py-3 rounded-sm text-sm transition-colors ${
                    plan.highlight
                      ? "bg-[#E8B835] text-[#1a1a1a] hover:bg-[#d4a52e]"
                      : "bg-[#2d5016] text-white hover:bg-[#1f3a0f]"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[#1a2e1a] mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700 }}>
            See the platform in action
          </h2>
          <p className="text-gray-500 mb-8" style={{ lineHeight: 1.75 }}>
            Book a live demo with our team and discover how Farmlife Market can transform your agricultural operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Request a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
