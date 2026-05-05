import { Handshake, Building2, Globe, ArrowRight, Leaf, Users, Truck, Settings, TrendingUp, Target, Landmark } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router";

const heroImage = "/partnership.JPG";

const focusAreas = [
  {
    icon: Users,
    title: "Producer & Cooperative Partnerships",
    desc: "Empowering farmers and cooperatives with inputs, training, financing and market access to grow sustainably and profitably.",
  },
  {
    icon: Landmark,
    title: "Institutional & Government Partnerships",
    desc: "Collaborating with government agencies and institutions to strengthen food systems, policy frameworks and rural development.",
  },
  {
    icon: Truck,
    title: "Trade & Distribution Partnerships",
    desc: "Working with traders, processors and distributors to move quality products efficiently to local and global markets.",
  },
  {
    icon: Settings,
    title: "Finance & Technology Partnerships",
    desc: "Leveraging capital and innovative technology to drive efficiency, transparency and scalable agricultural solutions.",
  },
];

const impactStats = [
  { icon: Handshake, value: "50+", label: "Active Partners" },
  { icon: Globe, value: "25+", label: "Countries Reached" },
  { icon: Users, value: "2M+", label: "Farmers Impacted" },
  { icon: Leaf, value: "15+", label: "Commodities Traded" },
  { icon: TrendingUp, value: "$1B+", label: "Trade Facilitated" },
];

const futureValues = [
  {
    icon: Target,
    title: "Shared Goals",
    desc: "Aligning on common goals for sustainable growth and impact.",
  },
  {
    icon: Users,
    title: "Shared Growth",
    desc: "Creating opportunities that benefit partners, farmers and communities.",
  },
  {
    icon: Globe,
    title: "Shared Impact",
    desc: "Delivering long-term value for people, planet and markets.",
  },
];

export function PartnershipsPage() {
  return (
    <div>
      <PageHero
        badge="Public & Institutional Partnerships"
        title="Building Partnerships That Strengthen"
        titleHighlight=" Agricultural Systems"
        description="Farm Life Market believes the food system's biggest challenges require collaborative solutions. We partner with businesses, institutions, and organizations that share our vision for a more sustainable world."
        image={heroImage}
        breadcrumb={[{ label: "Partnerships" }]}
      />

      {/* Partnership Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Partnership Focus"
            title="Building Strong Partnerships."
            titleHighlight="Creating Shared Value."
            description="Together with our partners, we strengthen food systems, improve market access, and create sustainable value across the agriculture ecosystem."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="group bg-[#fafafa] border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-gray-200 transition-all flex flex-col text-center">
                <div className="w-14 h-14 bg-[#edf4e4] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#2d5016] transition-colors">
                  <item.icon size={24} className="text-[#2d5016] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#1a2e1a] font-semibold text-base mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Together */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with field image and dark green overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Agriculture field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1a0a]/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#E8B835] uppercase">
              Our Impact Together
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx !== impactStats.length - 1 ? "md:border-r border-white/10" : ""
                }`}
              >
                <stat.icon
                  size={24}
                  className="text-[#E8B835] mb-6"
                  strokeWidth={1.5}
                />
                <div
                  className="text-white text-3xl mb-2"
                  style={{ fontWeight: 800 }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Together */}
      <section className="bg-[#faf9f6] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          {/* Left + Middle Content - Dynamic padding to align with site container */}
          <div 
            className="lg:flex-1 py-20 flex flex-col lg:flex-row items-stretch"
            style={{ paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2))" }}
          >
            {/* Left Content */}
            <div className="lg:w-[45%] px-8 flex flex-col justify-center">
              <div className="max-w-md">
                <SectionHeader
                  badge="Let's Build the Future Together"
                  title="Stronger Partnerships."
                  titleHighlight="Stronger Food Systems."
                />
                <div className="-mt-12">
                  <p className="text-gray-500 mb-10 text-sm leading-relaxed max-w-sm">
                  Join us in building a resilient, inclusive and sustainable
                  agricultural future.
                </p>

                <Link
                  to="/connect"
                  className="inline-flex items-center gap-3 bg-[#0a1a0a] text-white px-8 py-4 rounded-sm hover:bg-[#2d5016] transition-all group font-bold text-xs uppercase tracking-wider"
                >
                  Become a Partner
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:flex items-center px-4">
              <div className="w-px h-48 bg-[#d4a52e]/30" />
            </div>

            {/* Middle Features */}
            <div className="lg:flex-1 py-10 lg:py-0 px-8 flex flex-col sm:flex-row items-center gap-10 justify-center">
              {futureValues.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[160px]">
                  <div className="w-14 h-14 bg-[#edf4e4] rounded-xl flex items-center justify-center mb-6">
                    <val.icon size={24} className="text-[#2d5016]" />
                  </div>
                  <h4 className="text-[#1a2e1a] text-sm mb-3 font-semibold uppercase tracking-wider">
                    {val.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Slanted Image - Full Bleed to Right */}
          <div className="lg:w-[25%] min-h-[500px] relative overflow-hidden hidden lg:block">
            <div 
              className="absolute inset-0 bg-gray-100"
              style={{ 
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <img
                src="/home-contact.JPG"
                alt="Small sprout"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Mobile Image (no slant) */}
          <div className="lg:hidden h-64 relative">
            <img
              src="/home-contact.JPG"
              alt="Small sprout"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

