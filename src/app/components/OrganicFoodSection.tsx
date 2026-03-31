import { ArrowRight } from "lucide-react";

const familyImg = "https://images.unsplash.com/photo-1774218419969-b4d0e465319a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZvb2QlMjBmYW1pbHklMjBoZWFsdGh5JTIwZWF0aW5nfGVufDF8fHx8MTc3NDM4OTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const farmerWomanImg = "https://images.unsplash.com/photo-1627742748562-7cf054787d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b21hbiUyMHNtaWxpbmclMjBob2xkaW5nJTIwdmVnZXRhYmxlcyUyMGJhc2tldHxlbnwxfHx8fDE3NzQzODk3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const wheatImg = "https://images.unsplash.com/photo-1760379858768-c41ec217514c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluJTIwY2xvc2V1cCUyMGFncmljdWx0dXJhbCUyMGhhcnZlc3R8ZW58MXx8fHwxNzc0Mzg5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const cards = [
  {
    img: familyImg,
    title: "Fresh from the field, just for you",
    tag: "Family Boxes",
  },
  {
    img: farmerWomanImg,
    title: "Handpicked with love for organic farms",
    tag: "Farm Direct",
  },
  {
    img: wheatImg,
    title: "Premium of Organic Farming Products",
    tag: "Best Quality",
  },
];

export function OrganicFoodSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
              <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Our Mission</span>
            </div>
            <h2
              className="text-[#0f172a]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              We grow fresh organic food for you
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs" style={{ lineHeight: 1.7 }}>
            Every meal is an opportunity to nourish your body with the cleanest ingredients nature provides.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[4/3]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-[#f5ad10] text-[#1a1a1a] text-xs px-2.5 py-1 rounded-sm mb-3" style={{ fontWeight: 600 }}>
                  {card.tag}
                </span>
                <h3 className="text-white" style={{ fontWeight: 600, lineHeight: 1.4 }}>
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-white/70 text-sm group-hover:text-[#f5ad10] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
