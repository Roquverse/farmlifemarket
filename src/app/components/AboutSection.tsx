import { useState } from "react";
import { Plus, Minus, Globe, Truck, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const farmerImage = "/img1.png";

const features = [
  { 
    icon: Globe,
    title: "Integrated Market Access", 
    desc: "Direct connections between farmers and verified buyers, removing unnecessary intermediaries." 
  },
  { 
    icon: Truck,
    title: "Coordinated Logistics", 
    desc: "Streamlined movement of goods from farm to destination with speed and reliability." 
  },
  { 
    icon: TrendingUp,
    title: "Scalable Growth Tools", 
    desc: "Access to resources and systems that support expansion and long-term profitability." 
  },
];

export function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeader
            badge="About Us"
            title="Building the Infrastructure"
            titleHighlight="Behind Modern Agriculture"
            description=""
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Accordion */}
          <div className="space-y-4">
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
              Farm Life Market is a technology-driven platform designed to connect agricultural supply with real market demand. We bring together farmers, buyers, logistics, and financial access into one structured ecosystem—improving efficiency, reducing loss, and enabling scalable growth across regions.
            </p>
            {features.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-xl shadow-black/5 border-gray-100" : "bg-[#f8f9fa] border-transparent hover:bg-[#f1f3f5]"}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-[#c5e855]" : "bg-[#e9ecef]"}`}>
                        <f.icon size={20} className={isOpen ? "text-[#1a2e1a]" : "text-gray-500"} />
                      </div>
                      <span className={`text-[15px] font-semibold ${isOpen ? "text-[#1a2e1a]" : "text-gray-700"}`}>
                        {f.title}
                      </span>
                    </div>
                    <div>
                      {isOpen ? <Minus size={20} className="text-[#1a2e1a]" /> : <Plus size={20} className="text-gray-400" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 pl-[80px]">
                      <p className="text-gray-500 text-sm leading-relaxed pr-6">
                        {f.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden">
            <img
              src={farmerImage}
              alt="Modern Agriculture Infrastructure"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
