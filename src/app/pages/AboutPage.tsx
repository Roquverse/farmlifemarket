import { Award, Leaf, Users, Heart, Target, Eye } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1663263687797-c0d079b662b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm0lMjBncmVlbiUyMGxhbmRzY2FwZSUyMGFlcmlhbCUyMHN1bnJpc2V8ZW58MXx8fHwxNzc0OTg1MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const teamImage =
  "https://images.unsplash.com/photo-1709532386360-bf8651a95368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwY29vcGVyYXRpdmUlMjBjb21tdW5pdHklMjBtZWV0aW5nJTIwcnVyYWx8ZW58MXx8fHwxNzc0OTg1MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    desc: "Every decision we make is guided by our commitment to environmental stewardship and long-term ecological balance.",
  },
  {
    icon: Heart,
    title: "Community Centered",
    desc: "We believe agriculture thrives when farmers, communities, and markets work in harmony together.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "From seed to shelf, we uphold the highest standards for freshness, safety, and nutritional integrity.",
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    desc: "We invest in the people behind the harvest — providing tools, training, and fair market access.",
  },
];

const milestones = [
  { year: "2025", event: "Founded in New York, with 3 local partner farms" },
  { year: "2025", event: "Launched first regional distribution network across New York" },
  { year: "2026", event: "Expanded to African Continent with 50+ farm partners" },
  { year: "2026", event: "Launched digital platform serving vendors and consumers" },
  { year: "2026", event: "Operating in 3+ countries with 50+ certified farms" },
];

const team = [
  { name: "Clara Whitfield", role: "CEO & Co-Founder", initials: "CW" },
  { name: "Marcus Osei", role: "Chief Agriculture Officer", initials: "MO" },
  { name: "Sofia Ramirez", role: "Head of Sustainability", initials: "SR" },
  { name: "James Chen", role: "VP of Global Operations", initials: "JC" },
];

export function AboutPage() {
  return (
    <div>
      <PageHero
        badge="Our Story"
        title="Growing a Better World,"
        titleHighlight="Together"
        description="Farmlife Market was founded on a simple belief: that great food starts with great farming. For over 2 years, we've been connecting communities with the farmers who feed them."
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
                More than a marketplace — a movement for sustainable food
              </h2>
              <p className="text-gray-600 mb-5" style={{ lineHeight: 1.8 }}>
                Farmlife Market began as a single farmers' market stall in New York, USA. Today, we connect over 50+ certified organic farms with millions of consumers across 3 countries — all while staying true to our roots.
              </p>
              <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
                We believe the food system can be healthier, fairer, and more transparent. That's why we've built a platform that puts farmers first and gives consumers the confidence to know exactly where their food comes from.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Mission</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    To empower farmers and nourish communities through transparent, sustainable agriculture.
                  </p>
                </div>
                <div className="bg-[#f8f5ee] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={18} className="text-[#E8B835]" />
                    <span className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Our Vision</span>
                  </div>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
                    A world where every meal is grown with care, traded with fairness, and eaten with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={teamImage} alt="Farmlife Market team" className="w-full h-full object-cover" />
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
              The principles that guide everything we do
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
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Our Journey</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Milestones that shaped us
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
              Meet the team behind the mission
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#E8B835]/20 border-2 border-[#E8B835]/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#E8B835]" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{member.initials}</span>
                </div>
                <div className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>{member.name}</div>
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
