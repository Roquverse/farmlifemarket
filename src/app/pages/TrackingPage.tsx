import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PageHero } from "../components/PageHero";
import {
  Search,
  Package,
  Truck,
  Warehouse,
  CheckCircle2,
  Clock,
  MapPin,
  AlertCircle,
  Ship,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200";

// Demo shipment data keyed by tracking number
const DEMO_SHIPMENTS: Record<string, ShipmentData> = {
  "FLM-2026-004891": {
    id: "FLM-2026-004891",
    status: "in_transit",
    commodity: "Dried Cocoa Beans – Grade A",
    weight: "22,400 kg",
    origin: "Kumasi, Ghana",
    destination: "Rotterdam, Netherlands",
    carrier: "OceaLink Freight GmbH",
    vessel: "MV Atlantic Harvest",
    eta: "April 14, 2026",
    lastUpdate: "March 31, 2026 · 18:47 WAT",
    temperature: "20°C",
    tempStatus: "within range",
    milestones: [
      { label: "Order Confirmed", date: "Mar 12, 2026", done: true, icon: Package },
      { label: "Loaded at Origin", date: "Mar 18, 2026", done: true, icon: Warehouse },
      { label: "Departed Tema Port", date: "Mar 22, 2026", done: true, icon: Ship },
      { label: "In Transit – Atlantic", date: "Ongoing", done: true, active: true, icon: Truck },
      { label: "Arrived Rotterdam", date: "Est. Apr 14, 2026", done: false, icon: MapPin },
      { label: "Delivered to Buyer", date: "Est. Apr 16, 2026", done: false, icon: CheckCircle2 },
    ],
  },
  "FLM-2026-003217": {
    id: "FLM-2026-003217",
    status: "delivered",
    commodity: "Frozen Tilapia Fillets",
    weight: "8,600 kg",
    origin: "Accra, Ghana",
    destination: "Miami, USA",
    carrier: "ColdFreight Partners",
    vessel: "MV Caribbean Star",
    eta: "March 28, 2026",
    lastUpdate: "March 28, 2026 · 09:12 EST",
    temperature: "−18°C",
    tempStatus: "within range",
    milestones: [
      { label: "Order Confirmed", date: "Mar 4, 2026", done: true, icon: Package },
      { label: "Loaded at Origin", date: "Mar 9, 2026", done: true, icon: Warehouse },
      { label: "Departed Tema Port", date: "Mar 12, 2026", done: true, icon: Ship },
      { label: "In Transit – Atlantic", date: "Mar 12–26, 2026", done: true, icon: Truck },
      { label: "Arrived Miami Port", date: "Mar 26, 2026", done: true, icon: MapPin },
      { label: "Delivered to Buyer", date: "Mar 28, 2026", done: true, icon: CheckCircle2 },
    ],
  },
};

interface Milestone {
  label: string;
  date: string;
  done: boolean;
  active?: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface ShipmentData {
  id: string;
  status: string;
  commodity: string;
  weight: string;
  origin: string;
  destination: string;
  carrier: string;
  vessel: string;
  eta: string;
  lastUpdate: string;
  temperature: string;
  tempStatus: string;
  milestones: Milestone[];
}

const statusConfig = {
  in_transit: { label: "In Transit", color: "bg-blue-500", textColor: "text-blue-600", bg: "bg-blue-50" },
  delivered: { label: "Delivered", color: "bg-green-500", textColor: "text-green-600", bg: "bg-green-50" },
  delayed: { label: "Delayed", color: "bg-amber-500", textColor: "text-amber-600", bg: "bg-amber-50" },
  pending: { label: "Pending", color: "bg-gray-400", textColor: "text-gray-600", bg: "bg-gray-50" },
};

function TrackingResult({ shipment }: { shipment: ShipmentData }) {
  const status = statusConfig[shipment.status as keyof typeof statusConfig] || statusConfig.pending;
  const progress = shipment.milestones.filter((m) => m.done).length;
  const total = shipment.milestones.length;
  const progressPct = Math.round((progress / total) * 100);

  return (
    <div className="space-y-6 mt-10">
      {/* Summary card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#1a2e1a] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Tracking ID</p>
            <p className="text-white font-bold text-lg">{shipment.id}</p>
          </div>
          <span className={`inline-flex items-center gap-2 ${status.bg} ${status.textColor} px-4 py-2 rounded-full text-sm font-semibold self-start sm:self-auto`}>
            <span className={`w-2 h-2 rounded-full ${status.color}`} />
            {status.label}
          </span>
        </div>

        <div className="p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Commodity", value: shipment.commodity },
              { label: "Total Weight", value: shipment.weight },
              { label: "Carrier", value: shipment.carrier },
              { label: "Vessel / Transport", value: shipment.vessel },
              { label: "Origin", value: shipment.origin },
              { label: "Destination", value: shipment.destination },
              { label: "ETA / Delivered", value: shipment.eta },
              { label: "Temp. Status", value: `${shipment.temperature} · ${shipment.tempStatus}` },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[#1a2e1a] text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
            <span>{progress} of {total} milestones complete</span>
            <span className="font-semibold text-[#1a2e1a]">{progressPct}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-[#E8B835] rounded-full transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-gray-400 text-xs">Last updated: {shipment.lastUpdate}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-[#1a2e1a] font-bold text-lg mb-8">Shipment Timeline</h3>
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-100" />
          <div className="space-y-0">
            {shipment.milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <div key={i} className="flex gap-6 relative pb-8 last:pb-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-2 transition-colors ${
                      milestone.active
                        ? "bg-[#E8B835] border-[#E8B835] shadow-md shadow-[#E8B835]/30"
                        : milestone.done
                        ? "bg-[#1a2e1a] border-[#1a2e1a]"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={
                        milestone.done || milestone.active ? "text-white" : "text-gray-300"
                      }
                    />
                  </div>
                  <div className="pt-1.5">
                    <p
                      className={`text-sm font-semibold ${
                        milestone.active
                          ? "text-[#E8B835]"
                          : milestone.done
                          ? "text-[#1a2e1a]"
                          : "text-gray-400"
                      }`}
                    >
                      {milestone.label}
                      {milestone.active && (
                        <span className="ml-2 text-xs bg-[#E8B835]/15 text-[#b87d00] px-2 py-0.5 rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{milestone.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-[#f8f5ee] rounded-2xl border border-[#e8e2d4] p-7 flex flex-col sm:flex-row items-center gap-6 justify-between">
        <div>
          <p className="text-[#1a2e1a] font-semibold mb-1">Need help with this shipment?</p>
          <p className="text-gray-500 text-sm">Our logistics operations desk is available Mon–Fri, 8am–6pm WAT.</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <a href="tel:+2348012345678" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1a2e1a] px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
            <Phone size={14} /> Call Us
          </a>
          <a href="mailto:logistics@farmlifemarket.com" className="inline-flex items-center gap-2 bg-[#1a2e1a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2d5016] transition-colors">
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

function NotFound({ trackingId }: { trackingId: string }) {
  return (
    <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
      <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-5">
        <AlertCircle size={28} className="text-amber-500" />
      </div>
      <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">No shipment found</h3>
      <p className="text-gray-500 text-sm mb-1">
        We couldn't find a shipment matching <span className="font-semibold text-[#1a2e1a]">"{trackingId}"</span>.
      </p>
      <p className="text-gray-400 text-sm">
        Please double-check the tracking ID or contact our logistics desk.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <p className="text-gray-400 text-xs w-full">Demo tracking IDs to try:</p>
        {Object.keys(DEMO_SHIPMENTS).map((id) => (
          <span key={id} className="bg-[#f8f5ee] border border-[#e8e2d4] text-[#1a2e1a] text-xs px-3 py-1.5 rounded-full font-mono">
            {id}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrackingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialId = searchParams.get("id") || "";
  const [inputValue, setInputValue] = useState(initialId);
  const [searched, setSearched] = useState(!!initialId);

  const shipment = initialId ? DEMO_SHIPMENTS[initialId.trim().toUpperCase()] : null;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setSearched(true);
    navigate(`/tracking?id=${encodeURIComponent(trimmed)}`, { replace: true });
  }

  return (
    <div>
      <PageHero
        badge="Shipment Tracking"
        title="Track Your"
        titleHighlight="Shipment"
        description="Enter your Farm Life Market tracking ID to get real-time status updates, milestone progress, and estimated delivery information."
        image={heroImage}
        breadcrumb={[
          { label: "Logistics", href: "/logistics" },
          { label: "Track Shipment" },
        ]}
        overlayStrength="from-black/75 via-black/50 to-black/20"
      />

      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Search form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-[#1a2e1a] font-bold text-xl mb-2">Enter Tracking ID</h2>
            <p className="text-gray-400 text-sm mb-6">
              Your tracking ID is included in your shipment confirmation email (format: FLM-YYYY-XXXXXX).
            </p>
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="flex-1 relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="e.g. FLM-2026-004891"
                  className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#E8B835] focus:ring-2 focus:ring-[#E8B835]/20 transition-all font-mono"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1a2e1a] text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#2d5016] transition-colors flex items-center gap-2 shrink-0"
              >
                Track <ArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Results */}
          {searched && initialId && (
            shipment ? <TrackingResult shipment={shipment} /> : <NotFound trackingId={initialId} />
          )}

          {!searched && (
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm mb-4">Don't have a tracking ID yet?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/contact" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1a2e1a] px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                  <Phone size={14} /> Contact Logistics Desk
                </a>
                <a href="/logistics" className="inline-flex items-center gap-2 bg-[#1a2e1a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2d5016] transition-colors">
                  Learn About Logistics <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
