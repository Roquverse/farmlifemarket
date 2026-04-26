import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Users, Globe, Leaf, Handshake, TrendingUp, ShieldCheck, Lock, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const inquiryCategories = [
  "Partnership Opportunity",
  "Sourcing & Trade",
  "Farmer Network Support",
  "Investment & Relations",
  "Other"
];

const regions = [
  "Global / Multiple Regions",
  "North America",
  "Africa",
  "Europe",
  "Asia Pacific",
  "South America"
];

export function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    region: "",
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
    <div className="bg-[#fcfaf8]">
      {/* Custom Split Hero */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          {/* Left Text Side */}
          {/* Left Text Side */}
          <div className="relative pt-32 pb-24 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2))] lg:pr-16 flex flex-col justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              {/* <img src="/contact.png" alt="Contact Hero" className="w-full h-full object-cover" /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" /> */}
            </div>

            <div className="relative z-10 w-full">
              <nav className="flex items-center gap-1.5 mb-6 flex-wrap">
                <Link to="/" className="text-green/60 text-xs hover:text-green transition-colors">Home</Link>
                <span className="flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-green/40" />
                  <span className="text-green/90 text-xs">Connect</span>
                </span>
              </nav>
              
              <div className="inline-flex items-center gap-2 bg-green-dark/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E8B835]" />
                <span className="text-green/90 text-xs">Connect</span>
              </div>
              
              <h1
                className="text-green mb-5 max-w-2xl"
                style={{
                  fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Connect With{" "}
                <span className="text-[#E8B835] block mt-2">Farm Life Market</span>
              </h1>
              
              <p
                className="text-green/75 max-w-lg mb-10"
                style={{ lineHeight: 1.75, fontSize: "1rem" }}
              >
                Engage our team on partnerships, sourcing, trade opportunities and strategic collaboration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-[#E8B835] text-[#1a2e1a] px-7 py-3.5 rounded hover:bg-[#d4a52e] transition-colors font-semibold">
                  <Users size={18} />
                  Partnership Inquiry
                </button>
                <a href="tel:+12123726006" className="inline-flex items-center gap-2 bg-[#1a2e1a] text-[#d4a52e] px-7 py-3.5 rounded hover:bg-[#1a2e1a] transition-colors font-semibold">
                  <Phone size={18} />
                  Speak With Our Team
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image Grid Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 h-[600px] lg:h-auto">
            {/* Col 1 */}
            <div className="relative group overflow-hidden">
              <img src="/connect-hero.png" alt="Strategic Partnerships" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#112311] text-white p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-white/80" size={20} />
                  <h3 className="text-sm font-bold tracking-wide uppercase">Strategic Partnerships</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">Building alliances that drive growth and impact.</p>
              </div>
            </div>
            {/* Col 2 */}
            <div className="relative group overflow-hidden">
              <img src="/operations.jpeg" alt="Global Trade Network" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#172f17] text-white p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-white/80" size={20} />
                  <h3 className="text-sm font-bold tracking-wide uppercase">Global Trade Network</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">Connecting markets and moving commodities efficiently.</p>
              </div>
            </div>
            {/* Col 3 */}
            <div className="relative group overflow-hidden">
              <img src="/connect-hero2.png" alt="Sustainable Impact" className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#1c381c] text-white p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="text-white/80" size={20} />
                  <h3 className="text-sm font-bold tracking-wide uppercase">Sustainable Impact</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">Empowering farmers and strengthening food systems for the future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Cards Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto -mt-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#f8f5ee] text-[#1a2e1a] rounded-full flex items-center justify-center mb-6">
              <Handshake size={22} />
            </div>
            <h3 className="text-[#1a2e1a] font-bold text-lg mb-3">Partnership Inquiries</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Explore strategic partnerships and collaboration opportunities.
            </p>
            <button className="text-[#E8B835] self-start mt-auto"><ArrowRight size={20} className="stroke-[2.5]" /></button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#f8f5ee] text-[#1a2e1a] rounded-full flex items-center justify-center mb-6">
              <Globe size={22} />
            </div>
            <h3 className="text-[#1a2e1a] font-bold text-lg mb-3">Trade & Supply Requests</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Connect with our team for sourcing and trade opportunities.
            </p>
            <button className="text-[#E8B835] self-start mt-auto"><ArrowRight size={20} className="stroke-[2.5]" /></button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#f8f5ee] text-[#1a2e1a] rounded-full flex items-center justify-center mb-6">
              <Leaf size={22} />
            </div>
            <h3 className="text-[#1a2e1a] font-bold text-lg mb-3">Farmer Network Support</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Get support for onboarding, training and network access.
            </p>
            <button className="text-[#E8B835] self-start mt-auto"><ArrowRight size={20} className="stroke-[2.5]" /></button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#f8f5ee] text-[#1a2e1a] rounded-full flex items-center justify-center mb-6">
              <TrendingUp size={22} />
            </div>
            <h3 className="text-[#1a2e1a] font-bold text-lg mb-3">Investor Relations</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Learn about investment opportunities and our growth.
            </p>
            <button className="text-[#E8B835] self-start mt-auto"><ArrowRight size={20} className="stroke-[2.5]" /></button>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Left Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#E8B835]" />
              <span className="text-[#E8B835] text-xs uppercase tracking-widest font-semibold">REQUEST A CONSULTATION</span>
            </div>
            <h2 className="text-[#1a2e1a] text-3xl md:text-4xl font-bold mb-4">Let's Build Something<br/><span className="text-[#647c55]">Strategic Together</span></h2>
            <p className="text-gray-500 mb-10 text-sm">Fill out the form and our team will get back to you within 1-2 business days.</p>

            {submitted ? (
                <div className="bg-[#f0f7e8] border border-[#2d5016]/20 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 bg-[#2d5016]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-[#2d5016]" />
                  </div>
                  <h3 className="text-[#1a2e1a] mb-3" style={{ fontWeight: 700, fontSize: "1.3rem" }}>Message Received!</h3>
                  <p className="text-gray-600" style={{ lineHeight: 1.75 }}>
                    Thank you for reaching out to Farm Life Market. One of our team members will be in touch within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", category: "", region: "", message: "" }); }}
                    className="mt-6 text-[#2d5016] text-sm hover:underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Users size={18} className="text-gray-400" />
                    </div>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full Name *" className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2d5016] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="sr-only">Organization / Company</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                    </div>
                    <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder="Organization / Company *" className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2d5016] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">Inquiry Category</label>
                  <select name="category" required value={form.category} onChange={handleChange} className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-[#2d5016] transition-colors appearance-none bg-white">
                    <option value="" disabled>Inquiry Category *</option>
                    {inquiryCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className="sr-only">Region of Interest</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                    <select name="region" required value={form.region} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-[#2d5016] transition-colors appearance-none bg-white">
                      <option value="" disabled>Region of Interest *</option>
                      {regions.map(reg => <option key={reg} value={reg}>{reg}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="sr-only">Message</label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Tell us more about your inquiry *" className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2d5016] transition-colors resize-none"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#112311] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a351a] transition-colors font-semibold">
                <Send size={18} />
                Submit Inquiry
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
                <Lock size={12} />
                <p>Your information is secure and will only be used to respond to your inquiry.</p>
              </div>
            </form>
            )}
          </div>

          {/* Right Contact Info */}
          <div className="lg:col-span-2 bg-[#f8f5ee] rounded-2xl p-8 md:p-10 flex flex-col justify-center border border-[#e8e2d4]">
            <h3 className="text-[#1a2e1a] text-xl font-bold mb-8">Other Ways to Connect</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <Mail size={20} className="text-[#1a2e1a]" />
                </div>
                <div>
                  <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Email Us</h4>
                  <a href="mailto:contact@farmlifemarket.com" className="text-gray-500 text-sm hover:text-[#2d5016] transition-colors">contact@farmlifemarket.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <Phone size={20} className="text-[#1a2e1a]" />
                </div>
                <div>
                  <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Call Us</h4>
                  <a href="tel:+12123726006" className="text-gray-500 text-sm hover:text-[#2d5016] transition-colors">+1 (212) 372 6006</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <Clock size={20} className="text-[#1a2e1a]" />
                </div>
                <div>
                  <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Business Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <MapPin size={20} className="text-[#1a2e1a]" />
                </div>
                <div>
                  <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Our Headquarters</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">One World Trade Center, 85th Floor<br/>New York, NY 10007, USA</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[#1a2e1a] text-2xl font-bold mb-4">Trusted by partners and communities across the globe</h3>
            <span className="w-12 h-0.5 bg-[#E8B835] mx-auto block"></span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center shrink-0">
                <Users size={18} className="text-[#1a2e1a]" />
              </div>
              <div>
                <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Global Network</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Connecting partners in 20+ countries.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center shrink-0">
                <Leaf size={18} className="text-[#1a2e1a]" />
              </div>
              <div>
                <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Sustainable Impact</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Improving livelihoods and strengthening food systems.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-[#1a2e1a]" />
              </div>
              <div>
                <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Built on Trust</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Transparency, reliability and long-term commitment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center shrink-0">
                <Globe size={18} className="text-[#1a2e1a]" />
              </div>
              <div>
                <h4 className="text-[#1a2e1a] font-bold text-sm mb-1">Future Focused</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Innovating for a more efficient and resilient agriculture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
