import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    farm: "GREENFARM LAGOS",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1080",
    price: "₦4,500",
    oldPrice: "₦5,000",
    discount: "-10%",
    rating: 4,
    reviews: 15,
  },
  {
    id: 2,
    name: "Live Catfish (1kg)",
    farm: "AQUALIFE RIVERS",
    image: "https://images.unsplash.com/photo-1516682662057-04d80d29abaf?auto=format&fit=crop&q=80&w=1080",
    price: "₦3,200",
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 32,
  },
  {
    id: 3,
    name: "Yam Tubers (Abuja)",
    farm: "EARTHGROWN FCT",
    image: "https://images.unsplash.com/photo-1589254881681-420286fc77ba?auto=format&fit=crop&q=80&w=1080",
    price: "₦5,000",
    oldPrice: "₦6,500",
    discount: "-23%",
    rating: 4,
    reviews: 9,
  },
];

export function ProduceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
            <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Products</span>
            <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
          </div>
          <h2
            className="text-[#0f172a]"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
          >
            Wonderful produce
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
            From our fields to your plate — browse our full selection of certified organic farm products.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative aspect-[1.1] bg-gray-50">
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-[#f5ad10] text-[#1a1a1a] text-[13px] px-3 py-1.5 rounded-sm z-10" style={{ fontWeight: 700 }}>
                    {product.discount}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="text-[#1a2e1a] text-[11px] tracking-[0.1em] uppercase mb-3" style={{ fontWeight: 800 }}>
                  {product.farm}
                </div>
                <h3 className="text-[#1a1a1a] text-xl mb-4" style={{ fontWeight: 700 }}>
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < product.rating ? "fill-[#f5ad10] text-[#f5ad10]" : "fill-gray-200 text-gray-200"} 
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2 font-medium">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="text-3xl text-[#1a1a1a]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                    {product.price}
                  </div>
                  {product.oldPrice && (
                    <div className="text-gray-400 text-base line-through mb-1" style={{ fontWeight: 500 }}>
                      {product.oldPrice}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-[#f8f5ee] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={18} className="text-[#f5ad10] fill-[#f5ad10]" />
            ))}
          </div>
          <blockquote
            className="text-[#0f172a] mb-6"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", fontWeight: 500, lineHeight: 1.7 }}
          >
            "The quality of produce from Farmlife Market is absolutely outstanding. Every delivery
            is fresh, flavourful, and you can genuinely taste the difference that organic farming makes."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f5ad10]/30 flex items-center justify-center text-sm" style={{ fontWeight: 700 }}>
              SM
            </div>
            <div className="text-left">
              <div className="text-[#0f172a] text-sm" style={{ fontWeight: 600 }}>Sarah Mitchell</div>
              <div className="text-gray-400 text-xs">Loyal customer since 2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
