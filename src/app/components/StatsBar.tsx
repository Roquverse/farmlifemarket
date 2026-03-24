const stats = [
  { value: "2025", label: "Founded Year" },
  { value: "Fresno", label: "Location, CA" },
  { value: "$14M", label: "Annual Revenue" },
  { value: "26", label: "Team Members" },
];

export function StatsBar() {
  return (
    <section className="bg-[#f8f5ee] border-y border-[#e8e2d4] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div
                className="text-[#1a2e1a]"
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
