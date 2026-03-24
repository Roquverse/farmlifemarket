import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Premium Wheat Grain",
    category: "Grains",
    price: "$12.99 / kg",
    rating: 4.9,
    reviews: 128,
    emoji: "🌾",
    bg: "#f0f7e6",
  },
  {
    name: "Organic Mixed Vegetables",
    category: "Vegetables",
    price: "$8.50 / box",
    rating: 4.8,
    reviews: 96,
    emoji: "🥬",
    bg: "#e6f0f7",
  },
  {
    name: "Fresh Fruit Basket",
    category: "Fruits",
    price: "$22.00 / basket",
    rating: 5.0,
    reviews: 210,
    emoji: "🍎",
    bg: "#f7ede6",
  },
  {
    name: "Artisan Honey",
    category: "Honey",
    price: "$18.00 / jar",
    rating: 4.9,
    reviews: 74,
    emoji: "🍯",
    bg: "#f7f3e6",
  },
  {
    name: "Free-Range Eggs",
    category: "Dairy",
    price: "$6.50 / dozen",
    rating: 4.7,
    reviews: 155,
    emoji: "🥚",
    bg: "#f5efe6",
  },
  {
    name: "Cold-Pressed Olive Oil",
    category: "Oils",
    price: "$24.99 / bottle",
    rating: 4.8,
    reviews: 89,
    emoji: "🫒",
    bg: "#edf7e6",
  },
];

export function ProduceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E8B835]"></span>
            <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Products</span>
            <span className="w-8 h-0.5 bg-[#E8B835]"></span>
          </div>
          <h2
            className="text-[#1a2e1a]"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
          >
            Wonderful produce
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
            From our fields to your plate — browse our full selection of certified organic farm products.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div
                className="w-full rounded-xl flex items-center justify-center text-5xl mb-5 py-8"
                style={{ background: p.bg }}
              >
                {p.emoji}
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#b8891a] bg-[#E8B835]/10 px-2.5 py-0.5 rounded-full" style={{ fontWeight: 600 }}>
                  {p.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-[#E8B835] fill-[#E8B835]" />
                  <span className="text-xs text-gray-600" style={{ fontWeight: 600 }}>{p.rating}</span>
                  <span className="text-xs text-gray-400">({p.reviews})</span>
                </div>
              </div>
              <h3 className="text-[#1a2e1a] mt-2 mb-1" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                {p.name}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[#2d5016]" style={{ fontWeight: 700, fontSize: "1rem" }}>{p.price}</span>
                <button className="w-9 h-9 bg-[#2d5016] text-white rounded-lg flex items-center justify-center hover:bg-[#1f3a0f] transition-colors">
                  <ShoppingCart size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-[#f8f5ee] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={18} className="text-[#E8B835] fill-[#E8B835]" />
            ))}
          </div>
          <blockquote
            className="text-[#1a2e1a] mb-6"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", fontWeight: 500, lineHeight: 1.7 }}
          >
            "The quality of produce from Agrofarm is absolutely outstanding. Every delivery
            is fresh, flavourful, and you can genuinely taste the difference that organic farming makes."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8B835]/30 flex items-center justify-center text-sm" style={{ fontWeight: 700 }}>
              SM
            </div>
            <div className="text-left">
              <div className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>Sarah Mitchell</div>
              <div className="text-gray-400 text-xs">Loyal customer since 2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
