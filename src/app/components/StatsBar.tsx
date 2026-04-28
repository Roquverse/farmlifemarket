const stats = [
  { value: "2025", label: "Platform Launch" },
  { value: "Global Network", label: "Expanding Across Key Agricultural Regions" },
  // { value: "$14M+", label: "Trade Volume Facilitated" },
  // { value: "26+", label: "Active Partners & Operators" },
];

export function StatsBar() {
  return (
    <section className="bg-[#f8f5ee] border-y border-[#e8e2d4] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div
                className="text-[#0f172a]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
