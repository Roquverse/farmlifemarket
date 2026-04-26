import { Award, Leaf, Users, Heart, Target, Eye } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/about-hero.jpg";

const teamImage =
  "/about-us.png";

const values = [
  {
    icon: Leaf,
    title: "Responsible Growth",
    desc: "We pursue scalable agricultural growth rooted in environmental stewardship and long-term resilience.",
  },
  {
    icon: Target,
    title: "Market Connectivity",
    desc: "We strengthen connections among farmers, buyers and supply chains to expand opportunity across markets.",
  },
  {
    icon: Eye,
    title: "Trust & Transparency",
    desc: "We build confidence across global supply chains through rigorous standards, verifiable sourcing, and open trade practices.",
  },
  {
    icon: Award,
    title: "Innovation in Agriculture",
    desc: "We leverage technology and modern infrastructure to optimize agricultural trade, improve efficiency, and empower our global network.",
  },
];

const milestones = [
  { year: "2025", event: "Established Farm Life Market in New York as an agricultural trade and digital commerce platform." },
  { year: "2025", event: "Initiated regional sourcing and distribution network development." },
  { year: "2026", event: "Expanded farmer network operations into Africa." },
  { year: "2026", event: "Launched digital platform supporting agricultural vendors and buyers." },
  { year: "2026", event: "Advanced multi-market operations across Africa, the Caribbean and North America." },
];

const team = [
  { name: "Thanda Keller Robb, BA ", role: "Founder and Chief Executive  Officer", image: "/Thanda.jpg" },
  { name: "Patrick M. Reid, MBA ", role: "Chief Operating Officer, President Of Global Operations. ", image: "/profile1.jpg" },

  { name: "Ojo Olajide Samuel", role: "Chief Technical Officer, Global Operations", image: "/profile3.jpg" },
];

export function AboutPage() {
  return (
    <div>
      <PageHero
        badge="Our Story"
        title="Building the Future of "
        titleHighlight="Agricultural Trade"
        description="Connecting farmers, markets and supply chains across emerging and global economies."
        image={heroImage}
        breadcrumb={[{ label: "About" }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-[#E8B835]" />
                <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
                  Who We Are
                </span>
              </div>
              <h2
                className="text-[#1a2e1a] mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25 }}
              >
                More Than a Marketplace — Trade Infrastructure for Agriculture
              </h2>
              <p className="text-gray-600 mb-5" style={{ lineHeight: 1.8 }}>
                Farm Life Market began as a single farmers' market stall in New York, USA. Today, we connect over 50+ certified organic farms with millions of consumers across 3 countries — all while staying true to our roots.
              </p>
              <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
                <ul>
                  <li>Supporting farmer networks across multiple markets</li>
                  <li>Expanding trade access across Africa, the Caribbean and North America</li>
                </ul>

              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Mission</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    To build trusted infrastructure that connects farmers, buyers and markets through technology, trade and transparent commerce.
                  </p>
                </div>
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Vision</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    To help shape a more connected, efficient and inclusive global food economy.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={teamImage} alt="Farm Life Market team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2d5016] text-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>50+</div>
                <div className="text-white/80 text-xs" style={{ fontWeight: 500 }}>Certified Farm<br />Partners Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Core Values</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Principles That Drive Our Platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E8B835]/15 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[#E8B835]" />
                </div>
                <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600 }}>{v.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Platform Evolution</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
             Key Growth Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-[#e8e2d4]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-8">
                  <div className="text-[#E8B835] text-sm w-16 shrink-0 pt-1 text-right" style={{ fontWeight: 700 }}>
                    {m.year}
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#E8B835] border-4 border-white shadow-md mt-0.5" />
                  </div>
                  <p className="text-gray-700 pt-0.5" style={{ lineHeight: 1.7 }}>{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Leadership</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Leadership Driving the Platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <img src={member.image} alt={member.name} style={{ width: "100%", height: "450px", border: "1px solid #E8B835/40", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px", overflow: "hidden", borderRadius: "12px", objectFit: "cover" }} />
                <div className="text-white text-sm mb-1" style={{ fontWeight: 600, paddingTop: "10px", fontSize: "18px" }}>{member.name}</div>
                <div className="text-white/50 text-xs">{member.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a1a1a] px-8 py-3.5 rounded-sm hover:bg-[#d4a52e] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
