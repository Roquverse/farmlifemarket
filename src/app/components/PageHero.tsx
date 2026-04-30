import { Link } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  image: string;
  imagePosition?: string;
  breadcrumb?: { label: string; href?: string }[];
  overlayStrength?: string;
  button?: string;
  buttonTarget?: string;
  button2?: string;
  button2Target?: string;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  image,
  imagePosition = "center",
  breadcrumb,
  overlayStrength = "from-black/70 via-black/45 to-black/20",
  button,
  buttonTarget,
  button2,
  button2Target,
  children,
}: PageHeroProps) {
  return (
    <section className="relative h-[72vh] min-h-[480px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" style={{objectPosition: imagePosition}} />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayStrength}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full pt-32">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 mb-6 flex-wrap">
            <Link to="/" className="text-white/60 text-xs hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/40" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-white/60 text-xs hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E8B835]" />
            <span className="text-white/90 text-xs">{badge}</span>
          </div>
        )}

        <h1
          className="text-white mb-5 max-w-2xl"
          style={{
            fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-[#E8B835]">{titleHighlight}</span>
          )}
        </h1>

        <p
          className="text-white/75 max-w-lg"
          style={{ lineHeight: 1.75, fontSize: "1rem" }}
        >
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}
