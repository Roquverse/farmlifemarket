import { Leaf, Droplets, Sun } from "lucide-react";

const tractorImg = "https://images.unsplash.com/photo-1706862609885-7771b001daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjdG9yJTIwZmllbGQlMjBhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc0Mzg5NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const produceImg = "https://images.unsplash.com/photo-1741515044901-58696421d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwcHJvZHVjZSUyMG1hcmtldHxlbnwxfHx8fDE3NzQzODk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const benefits = [
  {
    icon: <Leaf size={20} className="text-[#2d5016]" />,
    title: "Rich in Nutrients",
    desc: "Our produce is harvested at peak ripeness, locking in maximum vitamins and minerals.",
  },
  {
    icon: <Droplets size={20} className="text-[#2d5016]" />,
    title: "No Chemicals",
    desc: "Zero synthetic pesticides or herbicides — just clean water and natural compost.",
  },
  {
    icon: <Sun size={20} className="text-[#2d5016]" />,
    title: "Sun-Grown Goodness",
    desc: "Open-air cultivation under natural sunlight produces superior flavour and nutrition.",
  },
];

export function HealthSection() {
  return (
    <section className="py-24 bg-[#f8f5ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]"></span>
              <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Nutrition</span>
            </div>
            <h2
              className="text-[#1a2e1a] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              Food shapes your health
            </h2>
            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
              What you eat determines how you feel. Our organically grown produce is free from
              harmful additives and bursting with the natural goodness your body craves every single day.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8B835]/15 flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-[#1a2e1a] text-sm mb-1" style={{ fontWeight: 600 }}>{b.title}</div>
                    <div className="text-gray-500 text-sm" style={{ lineHeight: 1.6 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#2d5016] text-white px-8 py-3.5 rounded-sm hover:bg-[#1f3a0f] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Explore Products
            </a>
          </div>

          {/* Images right */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden aspect-[3/4]">
              <img src={tractorImg} alt="Tractor in field" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] mt-8">
              <img src={produceImg} alt="Fresh organic vegetables" className="w-full h-full object-cover" />
            </div>
            {/* Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#E8B835]/20 rounded-full flex items-center justify-center">
                <Leaf size={16} className="text-[#b8891a]" />
              </div>
              <div>
                <div className="text-[#1a2e1a] text-xs" style={{ fontWeight: 700 }}>100% Organic</div>
                <div className="text-gray-400 text-xs">Certified produce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
