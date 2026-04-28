import { ArrowRight } from "lucide-react";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1080&auto=format&fit=crop",
    tag: "MARKETS OUTLOOK",
    title: "Commodity Markets Outlook",
    desc: "Price trends, supply shifts, and buyer demand signals shaping key commodities.",
    date: "May 10, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1080&auto=format&fit=crop",
    tag: "PRODUCTION",
    title: "Farmer Productivity & Sustainability",
    desc: "Insights on production efficiency, soil health, and climate-resilient farming practices.",
    date: "Apr 22, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a63?q=80&w=1080&auto=format&fit=crop",
    tag: "TRADE & POLICY",
    title: "Trade & Export Readiness",
    desc: "Standards, compliance, and market-entry guidance for global competitiveness.",
    date: "Mar 18, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1080&auto=format&fit=crop",
    tag: "SUPPLY CHAIN",
    title: "Supply Chain & Cold-Chain Innovation",
    desc: "Infrastructure and logistics innovations improving freshness, quality, and efficiency.",
    date: "Feb 30, 2026",
  },
];

export function FarmGallery() {
  return (
    <section className="py-24 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#d4a52e]"></span>
              <span className="text-[#d4a52e] text-xs font-bold uppercase tracking-widest">MARKET INTELLIGENCE</span>
            </div>
            <h2
              className="text-[#1a2e1a] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Insights Shaping<br/>Agricultural Trade
            </h2>
            <p className="text-gray-600 text-[15px]" style={{ lineHeight: 1.6, maxWidth: "480px" }}>
              Data, perspectives, and field insights that help us understand markets, support decisions, and build a more resilient food system.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-gray-300 text-[#1a2e1a] px-5 py-2.5 rounded hover:bg-gray-50 transition-colors shrink-0 text-sm font-semibold"
          >
            View Market Insights
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-[4/3] mb-5">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <span className="inline-block text-[#d4a52e] text-[10px] tracking-wider uppercase mb-2 font-bold">
                  {post.tag}
                </span>
                <h3
                  className="text-[#1a2e1a] mb-2 group-hover:text-[#d4a52e] transition-colors"
                  style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4" style={{ lineHeight: 1.6 }}>{post.desc}</p>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
