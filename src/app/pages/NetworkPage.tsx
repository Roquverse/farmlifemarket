import { Users, Store, Building2, ShoppingCart, ArrowRight, Star } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage =
  "/network-hero.png";

const networkTypes = [
  {
    icon: Users,
    title: "Certified Farmers",
    count: "1,200+",
    desc: "Independent organic farmers and cooperatives across 30+ countries, each verified through our multi-stage standards process.",
    color: "#2d5016",
  },
  {
    icon: Store,
    title: "Retail Partners",
    count: "850+",
    desc: "Specialty grocers, health food chains, and farmers market operators who trust Farmlife Market to supply authentic organic products.",
    color: "#E8B835",
  },
  {
    icon: Building2,
    title: "Institutional Buyers",
    count: "320+",
    desc: "Hospitals, schools, hotels, and corporate campuses sourcing large volumes through our wholesale platform with dedicated account management.",
    color: "#5a8f2e",
  },
  {
    icon: ShoppingCart,
    title: "Online Consumers",
    count: "50,000+",
    desc: "End consumers who shop directly from farms through our subscription boxes and digital marketplace, receiving fresh produce at their door.",
    color: "#c4a035",
  },
];

const testimonials = [
  {
    quote: "Joining the Farmlife Market network transformed our business. We went from struggling to sell locally to exporting across three continents within 18 months.",
    name: "Elena Marchetti",
    role: "Owner, Marchetti Organic Farms, Italy",
    rating: 5,
  },
  {
    quote: "The buyer matching tool is incredible. We found three long-term wholesale contracts in our first month. The network effect is real.",
    name: "David Nweke",
    role: "Director, Nweke Agri Cooperative, Nigeria",
    rating: 5,
  },
  {
    quote: "As a retailer, Farmlife Market gives us confidence that every product we stock meets the highest organic standards. Our customers love the QR traceability.",
    name: "Sarah Kimura",
    role: "Procurement Manager, FreshNow Markets, Japan",
    rating: 5,
  },
];

const networkBenefits = [
  { title: "Peer Learning Communities", desc: "Regional farmer circles meet monthly online to share best practices, troubleshoot challenges, and collaborate on bulk purchasing." },
  { title: "Preferential Financing", desc: "Network members access exclusive financing at below-market rates through our partnerships with agricultural development banks." },
  { title: "Joint Marketing Campaigns", desc: "Participate in seasonal campaigns that amplify your individual brand through the collective Farmlife Market identity." },
  { title: "Buyer Introduction Program", desc: "Our sales team actively introduces verified farmers to qualified buyers, removing the burden of prospecting from producers." },
  { title: "Technology Grants", desc: "High-performing network members may qualify for subsidized access to premium platform features and hardware like soil sensors." },
  { title: "Dispute Resolution", desc: "Our neutral arbitration team handles contract disputes swiftly and fairly, protecting relationships and maintaining trust in the network." },
];

export function NetworkPage() {
  return (
    <div>
      <PageHero
        badge="Our Community"
        title="A Network That Grows"
        titleHighlight="With You"
        description="The Farmlife Market network is more than a marketplace — it's a thriving community of farmers, buyers, and food businesses united by a shared commitment to sustainable, transparent agriculture."
        image={heroImage}
        breadcrumb={[{ label: "Network" }]}
      />

      {/* Network Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Who's in the Network</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              A connected ecosystem of food producers and buyers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkTypes.map((n) => (
              <div key={n.title} className="rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: n.color + "18" }}
                >
                  <n.icon size={24} style={{ color: n.color }} />
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: n.color }}>{n.count}</div>
                <h3 className="text-[#1a2e1a] mt-2 mb-3" style={{ fontWeight: 600 }}>{n.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Network Benefits</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-[#1a2e1a]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              Why the best farms choose our network
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkBenefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-[#E8B835]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#E8B835] text-sm" style={{ fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600 }}>{b.title}</h3>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Network Voices</span>
              <span className="w-8 h-0.5 bg-[#E8B835]" />
            </div>
            <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
              What our network members say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#E8B835] fill-[#E8B835]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-6" style={{ lineHeight: 1.8 }}>"{t.quote}"</p>
                <div>
                  <div className="text-white text-sm" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[#1a2e1a] mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700 }}>
            Join a community that's changing food systems
          </h2>
          <p className="text-gray-500 mb-8" style={{ lineHeight: 1.75 }}>
            Whether you're a farmer, retailer, or food business, there's a place for you in the Farmlife Market network. Let's grow together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#2d5016] text-white px-8 py-3.5 rounded-sm hover:bg-[#1f3a0f] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Apply to Join <ArrowRight size={16} />
            </Link>
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 border border-[#2d5016] text-[#2d5016] px-8 py-3.5 rounded-sm hover:bg-[#f0f7e8] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Explore Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
