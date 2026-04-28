import { Tractor, ShoppingBag, Truck, BarChart3, Leaf, Shield, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/what-we-do-hero.jpeg";

const commerceInfrastructure = [
  {
    icon: ShoppingBag,
    title: "Market Access",
    desc: "Connect producers directly to buyers and institutional markets.",
    features: ["Buyer connections", "B2B trade matching", "Demand signals"],
  },
  {
    icon: Truck,
    title: "Cold-Chain Logistics",
    desc: "Move perishables efficiently from harvest to delivery.",
    features: ["Temperature-controlled transport", "Last-mile coordination", "Real-time tracking"],
  },
  {
    icon: Shield,
    title: "Compliance & Certification",
    desc: "Support trade readiness and market compliance.",
    features: ["Export documentation", "Certification support", "Quality verification"],
  },
];

const growthProducerSupport = [
  {
    icon: Tractor,
    title: "Farm Management Support",
    desc: "Tools and advisory support to improve yields and operations.",
    features: ["Crop planning", "Agronomic guidance", "Yield optimization"],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Data and insights to support stronger selling decisions.",
    features: ["Price trends", "Demand reports", "Opportunity alerts"],
  },
  {
    icon: Leaf,
    title: "Sustainability Programs",
    desc: "Programs supporting resilient and responsible production.",
    features: ["Regenerative practices", "Carbon and impact tracking", "Sustainability support"],
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
        title="Integrated Agricultural Solutions "
        titleHighlight="Built for Scale"
        description="Supporting producers and buyers through market access, logistics coordination, and trade services designed to move agriculture efficiently."
        image={heroImage}
        breadcrumb={[{ label: "What We Do" }]}
        button="Join the Network"
        button2="Partner with Us"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Services</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a] max-w-3xl mx-auto mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}>
              Integrated Services Across the Agricultural Value Chain
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Supporting producers, buyers, and institutions through solutions designed to improve productivity, market access, logistics, and trade.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-[#1a2e1a] text-xl font-bold mb-8 border-b border-gray-100 pb-4 uppercase tracking-wider text-sm">Commerce Infrastructure</h3>
            <div className="grid md:grid-cols-3 gap-7">
              {commerceInfrastructure.map((s) => (
                <div key={s.title} className="group border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#E8B835]/30 transition-all flex flex-col">
                  <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8B835]/25 transition-colors">
                    <s.icon size={22} className="text-[#E8B835]" />
                  </div>
                  <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.05rem" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow" style={{ lineHeight: 1.75 }}>{s.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8B835] shrink-0 mt-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#1a2e1a] text-xl font-bold mb-8 border-b border-gray-100 pb-4 uppercase tracking-wider text-sm">Growth & Producer Support</h3>
            <div className="grid md:grid-cols-3 gap-7">
              {growthProducerSupport.map((s) => (
                <div key={s.title} className="group border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#E8B835]/30 transition-all flex flex-col">
                  <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8B835]/25 transition-colors">
                    <s.icon size={22} className="text-[#E8B835]" />
                  </div>
                  <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.05rem" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow" style={{ lineHeight: 1.75 }}>{s.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8B835] shrink-0 mt-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
            Join over 1,200 farms already growing smarter with Farm Life Market. Our team is ready to help you get started today.
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
