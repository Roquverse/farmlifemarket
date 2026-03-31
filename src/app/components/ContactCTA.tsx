import { Mail, Phone } from "lucide-react";

const sheepImg = "https://images.unsplash.com/photo-1759871416502-81923d777e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVlcCUyMGZhcm0lMjBwYXN0b3JhbCUyMGNvdW50cnlzaWRlJTIwZ3JlZW58ZW58MXx8fHwxNzc0Mzg5NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={sheepImg} alt="Pastoral farm scene" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-[#f5ad10]"></span>
              <span className="text-[#f5ad10] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Get in Touch</span>
            </div>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Have questions?<br />Get in touch!
            </h2>
            <p className="text-white/70 max-w-md" style={{ lineHeight: 1.7 }}>
              Our friendly team is ready to answer any questions about our farm, products, or delivery options.
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-[#0f172a] mb-6" style={{ fontWeight: 700 }}>Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#0f172a] text-xs mb-1.5 block" style={{ fontWeight: 600 }}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#1e293b] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#0f172a] text-xs mb-1.5 block" style={{ fontWeight: 600 }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#1e293b] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#0f172a] text-xs mb-1.5 block" style={{ fontWeight: 600 }}>Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#1e293b] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#0f172a] text-xs mb-1.5 block" style={{ fontWeight: 600 }}>Message</label>
                <textarea
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#1e293b] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f5ad10] text-[#1a1a1a] py-3.5 rounded-lg hover:bg-[#e09a05] transition-colors"
                style={{ fontWeight: 700 }}
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <a href="tel:+15595550182" className="flex items-center gap-2 text-gray-500 hover:text-[#1e293b] text-sm transition-colors">
                <Phone size={14} />
                (559) 555-0182
              </a>
              <a href="mailto:hello@agrofarm.com" className="flex items-center gap-2 text-gray-500 hover:text-[#1e293b] text-sm transition-colors">
                <Mail size={14} />
                hello@agrofarm.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
