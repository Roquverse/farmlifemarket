import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";

const heroImage =
  "https://images.unsplash.com/photo-1716703371653-ca74beaa7a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBvZmZpY2UlMjBmYXJtJTIwY3VzdG9tZXIlMjBzdXBwb3J0fGVufDF8fHx8MTc3NDk4NTA1NXww&ixlib=rb-4.1.0&q=80&w=1080";

const offices = [
  {
    city: "New York",
    country: "United States (HQ)",
    address: "One World Trade Center 85th Floor New York, NY 10007",
    phone: "+1 (212) 372 6006",
    email: "contact@farmlifemarket.com",
    hours: "Mon–Fri, 8:00 AM – 6:00 PM PST",
  },
  {
    city: "Lagos",
    country: "Nigeria (Africa Hub)",
    address: "2 Olatunji street Agodo, Cele Egbe, lkotun Lagos",
    phone: "+2347077783725",
    email: "africahub@farmlifemarket.com",
    hours: "Mon–Fri, 9:00 AM – 5:30 PM CET",
  },
];

const contactReasons = [
  "Farm Onboarding",
  "Buyer Inquiry",
  "Trade & Export",
  "Partnership Opportunity",
  "Platform Support",
  "Press & Media",
  "Investment Inquiry",
  "Other",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        badge="Get in Touch"
        title="We'd Love to"
        titleHighlight="Hear From You"
        description="Whether you're a farmer looking to join our network, a buyer ready to source organic produce, or an organization interested in partnership — our team is here to help."
        image={heroImage}
        breadcrumb={[{ label: "Contact" }]}
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-[#E8B835]" />
                <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Send a Message</span>
              </div>

              {submitted ? (
                <div className="bg-[#f0f7e8] border border-[#2d5016]/20 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 bg-[#2d5016]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-[#2d5016]" />
                  </div>
                  <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 700, fontSize: "1.3rem" }}>Message Received!</h3>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>
                    Thank you for reaching out to Farmlife Market. One of our team members will be in touch within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", reason: "", message: "" }); }}
                    className="mt-6 text-[#2d5016] text-sm hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>Reason for Contact *</label>
                    <select
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/10 transition-all bg-white text-gray-700"
                    >
                      <option value="">Select a reason...</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2d5016] focus:ring-2 focus:ring-[#2d5016]/10 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2d5016] text-white px-8 py-3.5 rounded-xl hover:bg-[#1f3a0f] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-[#E8B835]" />
                <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Direct Contact</span>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 p-5 bg-[#f8f5ee] rounded-xl">
                  <div className="w-10 h-10 bg-[#E8B835]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#E8B835]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e1a] text-sm mb-1" style={{ fontWeight: 600 }}>Email Us</div>
                    <a href="mailto:hello@farmlifemarket.com" className="text-gray-500 text-sm hover:text-[#2d5016] transition-colors">
                      hello@farmlifemarket.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-[#f8f5ee] rounded-xl">
                  <div className="w-10 h-10 bg-[#E8B835]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#E8B835]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e1a] text-sm mb-1" style={{ fontWeight: 600 }}>Call Us</div>
                    <a href="tel:+15595550182" className="text-gray-500 text-sm hover:text-[#2d5016] transition-colors">
                      +1 (559) 555-0182
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-[#f8f5ee] rounded-xl">
                  <div className="w-10 h-10 bg-[#E8B835]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#E8B835]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e1a] text-sm mb-1" style={{ fontWeight: 600 }}>Business Hours</div>
                    <p className="text-gray-500 text-sm">Monday – Friday, 8:00 AM – 6:00 PM PST</p>
                    <p className="text-gray-400 text-xs mt-1">Trade desk available 24/7 for urgent matters</p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <h3 className="text-[#1a2e1a] mb-5" style={{ fontWeight: 600 }}>Our Offices</h3>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin size={16} className="text-[#E8B835] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[#1a2e1a] text-sm" style={{ fontWeight: 600 }}>{office.city}</div>
                        <div className="text-gray-400 text-xs">{office.country}</div>
                      </div>
                    </div>
                    <div className="pl-7 space-y-1">
                      <p className="text-gray-500 text-xs">{office.address}</p>
                      <p className="text-gray-500 text-xs">{office.phone}</p>
                      <p className="text-gray-500 text-xs">{office.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Prompt */}
      <section className="py-12 bg-[#f8f5ee] border-t border-[#e8e2d4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 600, fontSize: "1.2rem" }}>
            Looking for quick answers?
          </h3>
          <p className="text-gray-500 text-sm mb-5" style={{ lineHeight: 1.75 }}>
            Check our FAQ section on the homepage — you might find what you're looking for without waiting for a reply.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#2d5016] text-sm border border-[#2d5016] px-6 py-2.5 rounded-sm hover:bg-[#f0f7e8] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Visit FAQ
          </a>
        </div>
      </section>
    </div>
  );
}
