import { ArrowRight } from "lucide-react";

const harvesterImg = "https://images.unsplash.com/photo-1761162850759-f48693513725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21iaW5lJTIwaGFydmVzdGVyJTIwd2hlYXQlMjBmaWVsZCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzODk3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const farmerManImg = "https://images.unsplash.com/photo-1773105181028-0ea4b7f60045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBtYW4lMjB3b3JraW5nJTIwZmllbGQlMjBoYXR8ZW58MXx8fHwxNzc0Mzg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const wheatGrainImg = "https://images.unsplash.com/photo-1760379858768-c41ec217514c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluJTIwY2xvc2V1cCUyMGFncmljdWx0dXJhbCUyMGhhcnZlc3R8ZW58MXx8fHwxNzc0Mzg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const basketImg = "https://images.unsplash.com/photo-1653550027228-e3202a24ccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXQlMjBicmVhZCUyMGdyYWlucyUyMHdoZWF0JTIwcnVzdGljJTIwd29vZGVufGVufDF8fHx8MTc3NDM4OTc1MHww&ixlib=rb-4.1.0&q=80&w=1080";

const posts = [
  {
    img: harvesterImg,
    tag: "Farmland",
    title: "Optimizing Yield at Scale",
    desc: "Leveraging technology to ensure agricultural outputs are maximized with precision.",
    date: "Mar 10, 2026",
  },
  {
    img: farmerManImg,
    tag: "Sustainable",
    title: "Adapting to Market and Climate Shifts",
    desc: "How modern producers adapt to changing climate conditions and global demands.",
    date: "Feb 28, 2026",
  },
  {
    img: wheatGrainImg,
    tag: "Crops",
    title: "Quality Standards in Modern Grain Production",
    desc: "Establishing strict quality benchmarks for trading on the global market.",
    date: "Feb 14, 2026",
  },
  {
    img: basketImg,
    tag: "Products",
    title: "From Production to Distribution",
    desc: "Streamlining logistics to ensure efficient delivery across the supply chain.",
    date: "Jan 30, 2026",
  },
];

export function FarmGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
              <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Our Journal</span>
            </div>
            <h2
              className="text-[#0f172a] mb-4"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 700, lineHeight: 1.3 }}
            >
              Insights on Agriculture, Trade, and Scale
            </h2>
            <p className="text-gray-500 text-base" style={{ lineHeight: 1.6 }}>
              Perspectives, data, and field insights shaping the future of agricultural markets.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#1e293b] text-[#1e293b] px-6 py-3 rounded-sm hover:bg-[#1e293b] hover:text-white transition-colors shrink-0"
            style={{ fontWeight: 600 }}
          >
            View All Posts
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block bg-[#f5ad10]/15 text-[#d18b00] text-xs px-2.5 py-1 rounded-full mb-2" style={{ fontWeight: 600 }}>
                  {post.tag}
                </span>
                <h3
                  className="text-[#0f172a] mb-2 group-hover:text-[#1e293b] transition-colors"
                  style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4 }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3" style={{ lineHeight: 1.6 }}>{post.desc}</p>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
