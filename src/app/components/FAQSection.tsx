import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "What does Farm life Market offer?",
    a: "We offer a full range of certified organic produce including grains, vegetables, fruits, honey, eggs, and cold-pressed oils — all grown on our sustainable farm in Fresno, CA. We also provide farm tours, CSA (Community Supported Agriculture) boxes, and wholesale supply for restaurants.",
  },
  {
    q: "How can I contact the farm?",
    a: "You can reach us by phone at +1 (212) 372 6006, by email at contact@farmlifemarket.com, or by visiting us at our farm stand open Tuesday–Saturday 8am–5pm. Our team responds to all online inquiries within one business day.",
  },
  {
    q: "What guidelines do farming approvals?",
    a: "Our farm is USDA Certified Organic, Non-GMO Project Verified, and Certified Naturally Grown. We follow strict guidelines for soil health, water conservation, biodiversity, and zero synthetic inputs — ensuring the safest produce for you and the planet.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes! We deliver to all addresses within 50 miles of Fresno every Tuesday and Friday. Orders placed before 8pm the evening prior will be included in the next delivery run. Minimum order is $25.",
  },
  {
    q: "Can I visit the farm?",
    a: "Absolutely. We welcome visitors for self-guided tours on weekends and offer guided educational tours for school groups and families by appointment. Check our Events page for upcoming open-farm days.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f8f5ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeader
              badge="FAQ"
              title="Questions about"
              titleHighlight="our farm"
            />
            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.8 }}>
              Have more questions? We're happy to help. Browse our most common queries below
              or reach out to our team directly.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1e293b] text-white px-8 py-3.5 rounded-sm hover:bg-[#0f172a] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Contact Us
            </a>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="text-[#0f172a] text-sm pr-4"
                    style={{ fontWeight: 600 }}
                  >
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#f5ad10]/15 flex items-center justify-center shrink-0">
                    {open === i ? (
                      <Minus size={14} className="text-[#d18b00]" />
                    ) : (
                      <Plus size={14} className="text-[#d18b00]" />
                    )}
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
