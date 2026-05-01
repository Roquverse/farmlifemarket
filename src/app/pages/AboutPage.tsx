import { Award, Leaf, Users, Heart, Target, Eye, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/about-hero.jpg";

const teamImage =
  "/img.jpg";

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
  { name: "Patrick M. Reid, MBA ", role: "Chief Operating Officer, President Of Global Operations. ", image: "/profile1.jpeg" },

  { name: "Ojo Olajide Samuel", role: "Chief Technical Officer, Global Operations", image: "/jaiden.jpg" },
];
const members = [
  { 
    name: "Thanda Keller Robb, BA ", 
    role: "Founder and Chief Executive Officer", 
    image: "/thanda 2.jpeg",
    bio: `Thanda Keller Robb is the Founder and Chief Executive Officer of Farm Life Market LLC, a global agriculture and food commerce platform connecting farmers to buyers across Africa, the Caribbean, and the United States. She leads the company’s strategy, partnerships, and expansion, focused on improving market access and building stronger agricultural supply chains.

With over 12 years of experience as a business consultant and a background as a Sales Director, Thanda brings practical expertise in growth strategy, client development, and international business.

Her entrepreneurial journey began early, including running a fresh produce business as a teenager, shaping her long-term focus on agriculture and trade. She has completed business and project management studies at Columbia University and is currently pursuing an MBA with a focus on international business.

Areas of Expertise
•⁠  ⁠Agriculture and global trade
•⁠  ⁠Business strategy and growth
•⁠  ⁠International market development
•⁠  ⁠Sales and revenue strategy
•⁠  ⁠Partnerships and stakeholder engagement`
  },
  { 
    name: "Jenny Dodson, CPA", 
    role: "Advisory Board Member", 
    image: "/jenny.jpeg",
    bio: `Jenny Dodson is a CPA and financial services professional with over 25 years of experience in audit, compliance, financial reporting, and regulatory reporting. She began her career at Ernst & Young, where she developed a strong foundation in audit and internal controls. 
Over time, she has built deep expertise in regulatory reporting, governance, and risk management within complex financial institutions. Jenny is known for her disciplined approach, sound judgment, and ability to navigate highly regulated environments with clarity and precision. Born and raised in Shanghai, China, she is fluent in Mandarin and English and brings a global perspective shaped by her U.S.-based education and international experience. At Farm Life Market, she serves in an independent advisory capacity, providing perspective on financial governance, compliance, and reporting as the company grows.

Areas of Expertise
•⁠  ⁠Audit & Internal Controls
•⁠  ⁠Compliance & Risk Management
•⁠  ⁠Financial & Regulatory Reporting
•⁠  ⁠Governance Frameworks
•⁠  ⁠Banking & Financial Services`
  },
  { 
    name: "Nathan Robb", 
    role: "Advisory Board Member", 
    image: "/Nathan.jpeg",
    bio: `Nathan Robb is a senior government relations professional with extensive experience in federal and state policy advocacy in the United States, particularly in support of higher education, scientific research, and student financial aid. In his current leadership role, he advances strategic priorities by engaging policymakers and shaping public policy initiatives that strengthen institutional and research objectives. Earlier in his career, he served as a political analyst with the Japanese Consulate in New York, providing insight into U.S.–Japan relations. Nathan holds a bachelor’s degree and a master’s degree from the University of Chicago.`
  },
  { 
    name: "Ojo Olajide Samuel", 
    role: "Chief Technical Officer, Global Operations", 
    image: "/jaiden.jpg",
    bio: `Ojo Olajide Samuel is a technology professional with a strong background in software development, systems architecture, and digital platform deployment. As Chief Technology Officer at Farm Life Market, he leads the design and execution of the company’s technology infrastructure, supporting the development of a scalable marketplace that connects farmers, buyers, and partners across multiple regions.

He has hands-on experience building and managing web and mobile applications, with a focus on performance, reliability, and user experience. His work spans platform integration, database management, and the development of secure systems to support digital payments and operational workflows.

Ojo plays a central role in advancing Farm Life Market’s digital ecosystem, including the ongoing development of the FLM Go platform and wallet infrastructure. He is focused on delivering practical, efficient technology solutions that support growth, improve access for users, and strengthen the platform’s long-term capabilities.

Areas of Expertise
•⁠  ⁠Software Development & Engineering
•⁠  ⁠Systems Architecture
•⁠  ⁠Web & Mobile Application Development
•⁠  ⁠Platform Integration
•⁠  ⁠Database Management
•⁠  ⁠Digital Payments Infrastructure`
  },
];

export function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

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
                Farm Life Market is building trusted infrastructure connecting farmers, buyers and supply chains across emerging and global markets.
              </p>
              <p className="text-gray-600 mb-5" style={{ lineHeight: 1.8 }}>
                Supporting farmer networks across strategic markets.
Expanding trade access across Africa, the Caribbean and North America.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Mission</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    Build trusted infrastructure for agricultural trade and market access.
                  </p>
                </div>
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Vision</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    Advance a more connected, efficient and inclusive global food economy.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={teamImage} alt="Farm Life Market team" className="w-full h-full object-cover" />
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
                <img src={member.image} alt={member.name} style={{ width: "100%", height: "350px", border: "1px solid #E8B835/40", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px", overflow: "hidden", borderRadius: "12px", objectFit: "cover", objectPosition: "top" }} />
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
      {/* Members*/}
      <section className="py-20 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Advisory Board members</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Advisory Board members Driving the Platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div 
                key={member.name} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
                      Read Bio
                    </span>
                  </div>
                </div>
                <div className="text-white text-sm mb-1" style={{ fontWeight: 600, fontSize: "18px" }}>{member.name}</div>
                <div className="text-white/50 text-xs">{member.role}</div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden bg-[#1a2e1a] border-white/10 text-white p-0 [&>button]:hidden">
              {selectedMember && (
                <div className="flex flex-col md:flex-row relative">
                  {/* Close Button - Mobile/All */}
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="absolute right-4 top-4 z-10 bg-[#1a2e1a] border border-white/20 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>

                  <div className="w-full md:w-2/5 h-[240px] md:h-auto">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/5 relative">
                    <DialogHeader className="mb-6">
                      <div className="text-[#E8B835] text-[10px] md:text-xs uppercase tracking-widest font-bold mb-2">
                        {selectedMember.role}
                      </div>
                      <DialogTitle className="text-xl md:text-2xl font-bold text-white mb-1">
                        {selectedMember.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-white/70 text-sm leading-relaxed max-h-[250px] md:max-h-[350px] overflow-y-auto pr-2 custom-scrollbar whitespace-pre-wrap">
                      {selectedMember.bio}
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
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
