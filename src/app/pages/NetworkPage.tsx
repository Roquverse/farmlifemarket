import { Users, Store, Building2, ShoppingCart, ArrowRight, Star, Globe, Handshake, Leaf } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

const heroImage = "/network.png";

const networkTypes = [
  {
    icon: Users,
    title: "Certified Farmers",
    desc: "Independent organic farmers and cooperatives across 30+ countries, each verified through our multi-stage standards process.",
    color: "#2d5016",
  },
  {
    icon: Store,
    title: "Retail Partners",
    desc: "Specialty grocers, health food chains, and farmers market operators who trust Farm Life Market to supply authentic organic products.",
    color: "#E8B835",
  },
  {
    icon: Building2,
    title: "Institutional Buyers",
    desc: "Hospitals, schools, hotels, and corporate campuses sourcing large volumes through our wholesale platform with dedicated account management.",
    color: "#5a8f2e",
  },
  {
    icon: ShoppingCart,
    title: "Online Consumers",
    desc: "End consumers who shop directly from farms through our subscription boxes and digital marketplace, receiving fresh produce at their door.",
    color: "#c4a035",
  },
];

const testimonials = [
  {
    quote: "Joining the Farm Life Market network transformed our business. We went from struggling to sell locally to exporting across three continents within 18 months.",
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
    quote: "As a retailer, Farm Life Market gives us confidence that every product we stock meets the highest organic standards. Our customers love the QR traceability.",
    name: "Sarah Kimura",
    role: "Procurement Manager, FreshNow Markets, Japan",
    rating: 5,
  },
];

const networkBenefits = [
  { title: "Peer Learning Communities", desc: "Regional farmer circles meet monthly online to share best practices, troubleshoot challenges, and collaborate on bulk purchasing." },
  { title: "Preferential Financing", desc: "Network members access exclusive financing at below-market rates through our partnerships with agricultural development banks." },
  { title: "Joint Marketing Campaigns", desc: "Participate in seasonal campaigns that amplify your individual brand through the collective Farm Life Market identity." },
  { title: "Buyer Introduction Program", desc: "Our sales team actively introduces verified farmers to qualified buyers, removing the burden of prospecting from producers." },
  { title: "Technology Grants", desc: "High-performing network members may qualify for subsidized access to premium platform features and hardware like soil sensors." },
  { title: "Dispute Resolution", desc: "Our neutral arbitration team handles contract disputes swiftly and fairly, protecting relationships and maintaining trust in the network." },
];

// SVG World Map Network component
function NetworkMap() {
  const nodes = [
    { cx: 195, cy: 115, icon: "handshake", label: "" },  // North America
    { cx: 330, cy: 85,  icon: "leaf",      label: "" },  // Europe
    { cx: 435, cy: 125, icon: "building",  label: "" },  // Middle East
    { cx: 220, cy: 210, icon: "users",     label: "" },  // South America
    { cx: 480, cy: 205, icon: "cart",      label: "" },  // Asia/Pacific
  ];
  const centerX = 345;
  const centerY = 155;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 660 330" className="w-full h-auto" style={{ maxHeight: 340 }}>
        {/* World Map silhouette - simplified paths */}
        <g opacity="0.13" fill="#2d5016">
          {/* North America */}
          <path d="M 60 60 Q 90 50 130 55 Q 160 52 185 65 Q 200 90 195 110 Q 180 130 155 135 Q 130 140 110 130 Q 85 120 65 100 Q 50 85 60 60 Z" />
          <path d="M 130 55 Q 155 45 175 50 Q 190 58 195 75 Q 185 65 165 62 Q 145 58 130 55 Z" />
          {/* South America */}
          <path d="M 175 180 Q 200 170 220 175 Q 240 185 245 210 Q 248 235 235 255 Q 220 265 205 258 Q 188 245 178 225 Q 168 200 175 180 Z" />
          {/* Europe */}
          <path d="M 295 55 Q 320 48 345 52 Q 360 58 365 70 Q 355 80 340 82 Q 320 80 300 72 Q 290 65 295 55 Z" />
          {/* Africa */}
          <path d="M 295 120 Q 320 112 345 115 Q 365 120 375 140 Q 380 165 370 185 Q 355 200 335 202 Q 312 198 300 180 Q 288 160 290 140 Q 291 128 295 120 Z" />
          {/* Middle East / Asia */}
          <path d="M 375 75 Q 405 68 435 72 Q 460 78 470 95 Q 465 108 448 112 Q 425 115 405 108 Q 385 100 378 88 Z" />
          {/* Asia large */}
          <path d="M 430 68 Q 470 58 510 62 Q 545 68 560 85 Q 558 105 540 115 Q 515 122 490 118 Q 465 112 448 100 Q 432 88 430 68 Z" />
          {/* Australia */}
          <path d="M 460 195 Q 490 188 515 192 Q 535 200 538 218 Q 535 232 518 238 Q 498 242 480 235 Q 462 224 460 210 Z" />
        </g>

        {/* Dashed connection lines from nodes to center */}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={n.cx} y1={n.cy}
            x2={centerX} y2={centerY}
            stroke="#2d5016"
            strokeWidth="1.2"
            strokeDasharray="5,4"
            opacity="0.35"
          />
        ))}

        {/* Center logo circle */}
        <circle cx={centerX} cy={centerY} r="28" fill="#2d5016" opacity="0.12" />
        <circle cx={centerX} cy={centerY} r="22" fill="white" stroke="#2d5016" strokeWidth="1.5" />
        <image
          href="/logo.png"
          x={centerX - 15} y={centerY - 15}
          width="30" height="30"
          style={{ clipPath: `circle(14px at 15px 15px)` }}
        />

        {/* Node circles */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="20" fill="#1a2e1a" />
            <circle cx={n.cx} cy={n.cy} r="20" fill="white" stroke="#1a2e1a" strokeWidth="0" opacity="0" />
            {n.icon === "handshake" && (
              <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="14" fill="white">🤝</text>
            )}
            {n.icon === "leaf" && (
              <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="14" fill="white">🌿</text>
            )}
            {n.icon === "building" && (
              <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="14" fill="white">🏛</text>
            )}
            {n.icon === "users" && (
              <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="14" fill="white">👥</text>
            )}
            {n.icon === "cart" && (
              <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="14" fill="white">🛒</text>
            )}
          </g>
        ))}
      </svg>

      {/* Stats bar at bottom of map */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-[#f8f5ee] rounded-b-2xl py-4 px-6 border-t border-[#e8e0d0]">
        <div className="flex items-center gap-3">
          <Globe size={22} className="text-[#2d5016]" />
          <div>
            <div className="text-[#1a2e1a] font-bold text-lg">20+</div>
            <div className="text-gray-500 text-xs">Countries Reached</div>
          </div>
        </div>
        <div className="w-px bg-gray-200" />
        <div className="flex items-center gap-3">
          <Users size={22} className="text-[#2d5016]" />
          <div>
            <div className="text-[#1a2e1a] font-bold text-lg">100+</div>
            <div className="text-gray-500 text-xs">Strategic Partners<br/>Worldwide</div>
          </div>
        </div>
        <div className="w-px bg-gray-200" />
        <div className="flex items-center gap-3">
          <Leaf size={22} className="text-[#2d5016]" />
          <div>
            <div className="text-[#1a2e1a] font-bold text-lg">Millions</div>
            <div className="text-gray-500 text-xs">Of Lives Impacted</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NetworkPage() {
  return (
    <div>
      {/* Custom Split Intro Section */}

      {/* PageHero Image Section */}
      <PageHero
        badge="Our Community"
        title="A Global Agricultural Network—"
        titleHighlight="Built for Scale"
        description="Connecting farmers, buyers, and partners through a structured ecosystem designed to move supply efficiently across markets."
        image={heroImage}
        breadcrumb={[{ label: "Network" }]}
        button="Join the Network"
        button2="Partner with Us"
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
            Whether you're a farmer, retailer, or food business, there's a place for you in the Farm Life Market network. Let's grow together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/connect"
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
