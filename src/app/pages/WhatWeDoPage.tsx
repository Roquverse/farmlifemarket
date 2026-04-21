import { Tractor, ShoppingBag, Truck, BarChart3, Leaf, Shield, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/what-we-do-hero.png";

const services = [
  {
    icon: Tractor,
    title: "Farm Management Support",
    desc: "We equip farmers with the tools, training, and agronomic guidance they need to optimize yields, reduce waste, and maintain soil health across every season.",
    features: ["Soil & crop monitoring", "Seasonal planning tools", "Agronomist consultations", "Yield analytics"],
  },
  {
    icon: ShoppingBag,
    title: "Direct-to-Market Access",
    desc: "Our marketplace connects certified organic farms directly with retailers, restaurants, and end consumers — cutting out unnecessary middlemen and improving margins for everyone.",
    features: ["Online storefront setup", "B2B buyer matching", "Fair pricing guarantees", "Real-time demand signals"],
  },
  {
    icon: Truck,
    title: "Cold-Chain Logistics",
    desc: "Perishable produce demands precision. Our logistics network ensures every item is transported under optimal conditions, maintaining freshness from harvest to delivery.",
    features: ["Temperature-controlled fleets", "Last-mile delivery", "Real-time tracking", "Waste reduction protocols"],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "We provide data-driven insights that help farmers make smarter planting and selling decisions, and help buyers stay ahead of supply trends and seasonal fluctuations.",
    features: ["Price forecasting", "Demand trend reports", "Competitor benchmarking", "Export opportunity alerts"],
  },
  {
    icon: Leaf,
    title: "Sustainability Programs",
    desc: "From carbon offset initiatives to regenerative farming grants, we help our partners reduce environmental impact while building a more resilient food system.",
    features: ["Carbon footprint tracking", "Regenerative grants", "Water usage reporting", "ESG certification support"],
  },
  {
    icon: Shield,
    title: "Compliance & Certification",
    desc: "Navigating organic certifications and global trade compliance can be complex. We simplify the process with dedicated support and automated documentation.",
    features: ["USDA Organic facilitation", "Global trade compliance", "Audit preparation", "Label verification"],
  },
];

const processSteps = [
  { step: "01", title: "Onboard Your Farm", desc: "Complete a simple application and receive a complimentary farm assessment within 5 business days." },
  { step: "02", title: "Get Certified", desc: "Our compliance team guides you through organic certification, ensuring you meet every standard with confidence." },
  { step: "03", title: "List Your Products", desc: "Set up your digital storefront and connect with thousands of verified buyers across our global marketplace." },
  { step: "04", title: "Grow & Scale", desc: "Access market intelligence, logistics, and capital programs that help you scale sustainably and profitably." },
];

export function WhatWeDoPage() {
  return (
    <div>
      <PageHero
        badge="Our Services"
        title="From Field to Fork —"
        titleHighlight="We Do It All"
        description="Farmlife Market provides end-to-end support for farmers and buyers alike — from agronomic guidance and certification to logistics and market intelligence."
        image={heroImage}
        breadcrumb={[{ label: "What We Do" }]}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Services</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a] max-w-xl mx-auto" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}>
              Everything you need to thrive in modern agriculture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <div key={s.title} className="group border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#E8B835]/30 transition-all">
                <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8B835]/25 transition-colors">
                  <s.icon size={22} className="text-[#E8B835]" />
                </div>
                <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.05rem" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm mb-5" style={{ lineHeight: 1.75 }}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B835] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Process</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Getting started is simple
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t-2 border-dashed border-[#E8B835]/40 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="bg-white rounded-2xl p-7 relative z-10 shadow-sm">
                  <div className="text-[#E8B835] text-3xl mb-4" style={{ fontWeight: 800 }}>{step.step}</div>
                  <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600 }}>{step.title}</h3>
                  <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2d5016]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
            Ready to transform your farm's potential?
          </h2>
          <p className="text-white/70 mb-8" style={{ lineHeight: 1.75 }}>
            Join over 1,200 farms already growing smarter with Farmlife Market. Our team is ready to help you get started today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Start Today <ArrowRight size={16} />
            </Link>
            <Link
              to="/coming-soon"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-sm hover:bg-white/20 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
