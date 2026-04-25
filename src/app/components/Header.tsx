import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router";

const navGroups = [
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    children: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Logistics", href: "/logistics" },
    ],
  },
  { label: "Platform", href: "/coming-soon" },
  {
    label: "Global",
    children: [
      { label: "Global Operations", href: "/global-operations" },
      { label: "Network", href: "/network" },
      { label: "Trade & Supply", href: "/trade-supply" },

    ],
  },
  { label: "Connect", href: "/connect" },
];

function DropdownMenu({
  label,
  children,
  isScrolled,
}: {
  label: string;
  children: { label: string; href: string }[];
  isScrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${isScrolled
          ? "text-[#1a2e1a]/80 hover:text-[#1a2e1a]"
          : "text-white/90 hover:text-white"
          }`}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
          {children.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm transition-colors ${isActive
                  ? "text-[#2d5016] bg-[#f0f7e8]"
                  : "text-gray-700 hover:text-[#2d5016] hover:bg-[#f0f7e8]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-transparent"
        }`}
    >
      {/* Top Navbar */}
      <div className="bg-[#cc0000] text-white text-xs font-medium py-1.5 px-6 hidden md:flex justify-end gap-6 items-center w-full">
        <Link to="/quality-compliance" className="hover:text-white/80 transition-colors">Quality & Compliance</Link>
        <Link to="/network" className="hover:text-white/80 transition-colors">
          Network
        </Link>
        <Link to="/partnerships" className="hover:text-white/80 transition-colors">Partnerships</Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Farmlife Market logo"
            className="w-12 h-12 object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navGroups.map((group) =>
            group.children ? (
              <DropdownMenu
                key={group.label}
                label={group.label}
                children={group.children}
                isScrolled={isScrolled}
              />
            ) : (
              <NavLink
                key={group.href}
                to={group.href!}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isScrolled
                    ? isActive
                      ? "text-[#2d5016]"
                      : "text-[#1a2e1a]/80 hover:text-[#1a2e1a]"
                    : isActive
                      ? "text-[#E8B835]"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {group.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className={`text-sm transition-colors ${isScrolled
              ? "text-[#1a2e1a]/70 hover:text-[#1a2e1a]"
              : "text-white/90 hover:text-white"
              }`}
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="bg-[#E8B835] text-[#1a1a1a] px-5 py-2 rounded-sm text-sm hover:bg-[#d4a52e] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-[#1a2e1a]" : "text-white"
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navGroups.map((group) =>
            group.children ? (
              <div key={group.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === group.label ? null : group.label
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-sm text-[#1a2e1a]/80"
                  style={{ fontWeight: 500 }}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileExpanded === group.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {group.children.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `py-2 text-sm ${isActive
                            ? "text-[#2d5016]"
                            : "text-gray-600 hover:text-[#2d5016]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={group.href}
                to={group.href!}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm border-b border-gray-50 last:border-0 ${isActive ? "text-[#2d5016]" : "text-[#1a2e1a]/80 hover:text-[#2d5016]"
                  }`
                }
              >
                {group.label}
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-[#E8B835] text-[#1a1a1a] px-5 py-3 rounded-sm text-sm text-center"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
