import { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  titleHighlight?: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  dark?: boolean;
}

const SERIF = "'Playfair Display', Georgia, serif";

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  const badgeDotClass = dark ? "bg-[#E8B835]" : "bg-[#2d5016]";
  const badgeBorderClass = dark ? "border-white/20" : "border-gray-200";
  const badgeTextClass = dark ? "text-white/80" : "text-gray-600";
  
  const titleClass = dark ? "text-white" : "text-[#1a2e1a]";
  const highlightClass = dark ? "text-[#E8B835]" : "";
  const descClass = dark ? "text-white/70" : "text-gray-600";

  return (
    <div className={`mb-16 ${centered ? "text-center" : "flex flex-col lg:flex-row lg:items-end justify-between gap-8"}`}>
      <div className={centered ? "flex flex-col items-center" : "lg:max-w-2xl"}>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${badgeBorderClass} mb-6`}>
          <span className={`w-1.5 h-1.5 rounded-full ${badgeDotClass}`} />
          <span className={`${badgeTextClass} text-[11px] uppercase tracking-widest font-semibold`}>
            {badge}
          </span>
        </div>
        
        <h2
          className={`${titleClass} mb-0`}
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
          {titleHighlight && (
            <>
              <br />
              <em
                className={highlightClass}
                style={{
                  fontFamily: SERIF,
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "0.95em",
                }}
              >
                {titleHighlight}
              </em>
            </>
          )}
        </h2>
      </div>

      {description && (
        <div className={centered ? "mt-5 max-w-2xl mx-auto" : "lg:w-5/12 pb-1"}>
          <p className={`${descClass} text-sm md:text-base leading-relaxed`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
