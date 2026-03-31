import { Handshake, Building, GraduationCap, Banknote, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1658869163471-81665d648612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwYWdyaWN1bHR1cmUlMjBkZWFsfGVufDF8fHx8MTc3NDk4NTA1NXww&ixlib=rb-4.1.0&q=80&w=1080";

const partnershipTypes = [
  {
    icon: Building,
    title: "Corporate & Retail Partners",
    desc: "We work with food retailers, restaurant groups, and CPG brands to source certified organic ingredients directly from our farmer network.",
    benefits: ["Priority sourcing access", "Volume price guarantees", "Co-branded marketing opportunities", "Dedicated account manager", "Custom product development support"],
    cta: "Become a Buyer Partner",
  },
  {
    icon: GraduationCap,
    title: "Research & Academic Partners",
    desc: "We collaborate with agricultural universities and research institutions to advance regenerative farming practices and food systems innovation.",
    benefits: ["Field trial access across 30+ countries", "Anonymized data sets for research", "Joint grant applications", "Published study co-authorship", "Student placement programs"],
    cta: "Explore Research Partnerships",
  },
  {
    icon: Banknote,
    title: "Impact Investment Partners",
    desc: "We connect impact investors and development finance institutions with investable agricultural SMEs in our vetted farmer network.",
    benefits: ["Deal flow access to vetted farms", "Co-investment opportunities", "ESG impact reporting", "Blended finance structures", "Quarterly portfolio updates"],
    cta: "Discuss Investment",
  },
  {
    icon: Globe,
    title: "NGO & Government Partners",
    desc: "We partner with development organizations and government agencies to scale organic farming adoption in underserved agricultural communities.",
    benefits: ["Subsidized platform access for beneficiaries", "Joint training programs", "Policy advocacy collaboration", "Reporting & monitoring tools", "Community impact dashboards"],
    cta: "Partner With Us",
  },
];

const currentPartners = [
  { name: "AgroBank International", type: "Financial Partner" },
  { name: "University of Wageningen", type: "Research Partner" },
  { name: "UN Food Programme", type: "Development Partner" },
  { name: "FreshNow Group", type: "Retail Partner" },
  { name: "GreenCapital Fund", type: "Impact Investor" },
  { name: "EcoTrade Alliance", type: "Trade Partner" },
  { name: "African Development Bank", type: "Development Finance" },
  { name: "Berkeley Organic Institute", type: "Research Partner" },
];

const partnerProcess = [
  { step: "01", title: "Initial Inquiry", desc: "Fill out our partnership interest form. We'll respond within 2 business days to discuss your goals." },
  { step: "02", title: "Alignment Meeting", desc: "A call with our Partnerships team to explore mutual value, expectations, and partnership structure." },
  { step: "03", title: "Proposal & MOU", desc: "We draft a partnership proposal and Memorandum of Understanding outlining responsibilities and terms." },
  { step: "04", title: "Onboarding", desc: "Dedicated onboarding support and introduction to your relationship manager and relevant network members." },
];

export function PartnershipsPage() {
  return (
    <div>
      <PageHero
        badge="Work With Us"
        title="Partnership Built on"
        titleHighlight="Shared Purpose"
        description="Farmlife Market believes the food system's biggest challenges require collaborative solutions. We partner with businesses, institutions, and organizations that share our vision for a more sustainable world."
        image={heroImage}
        breadcrumb={[{ label: "Partnerships" }]}
      />

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Partnership Types</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a] max-w-xl mx-auto" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}>
              How we collaborate with organizations worldwide
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {partnershipTypes.map((p) => (
              <div key={p.title} className="group border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-[#E8B835]/30 transition-all">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center shrink-0">
                    <p.icon size={22} className="text-[#2d5016]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a2e1a] mb-2" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{p.title}</h3>
                    <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="text-[#E8B835] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#2d5016] text-sm hover:gap-3 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  {p.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Our Partners</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Trusted by world-class organizations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentPartners.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#2d5016]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Handshake size={20} className="text-[#2d5016]" />
                </div>
                <div className="text-[#1a2e1a] text-sm mb-1" style={{ fontWeight: 600 }}>{p.name}</div>
                <div className="text-[#E8B835] text-xs" style={{ fontWeight: 500 }}>{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>The Process</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              How we build partnerships
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerProcess.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-[#E8B835] text-3xl mb-4" style={{ fontWeight: 800 }}>{step.step}</div>
                <h3 className="text-white mb-3" style={{ fontWeight: 600 }}>{step.title}</h3>
                <p className="text-white/60 text-sm" style={{ lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Start a Partnership Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
