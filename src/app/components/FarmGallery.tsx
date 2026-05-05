import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1080&auto=format&fit=crop",
    title: "Precision Crop Management",
    desc: "Track soil, crops, and weather in real time for better decisions and higher yields.",
  },
  {
    img: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1080&auto=format&fit=crop",
    title: "Smart Farm Automation",
    desc: "Automate irrigation and operations to save time, cut costs, and boost efficiency.",
  },
  {
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1080&auto=format&fit=crop",
    title: "Sustainable Agriculture",
    desc: "Protect soil, conserve resources, and grow for the long term.",
  },
];

export function FarmGallery() {
  return (
    <section className="py-24 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <SectionHeader
            badge="Smart Farming"
            title="Smart Solutions for"
            titleHighlight="Modern Farming"
            description="We empower farmers with intelligent tools and data-driven insights to increase yields, reduce costs, and build a more sustainable agricultural future."
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer flex flex-col">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3
                  className="text-[#1a2e1a] mb-3 group-hover:text-[#d4a52e] transition-colors"
                  style={{ fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-[15px]" style={{ lineHeight: 1.6 }}>
                  {post.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
