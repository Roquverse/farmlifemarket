import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router";

export function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5ee] px-6 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#E8B835]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#2d5016]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-white rounded-3xl p-10 md:p-16 text-center shadow-sm relative z-10 border border-gray-100">
        <div className="w-20 h-20 bg-[#E8B835]/15 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Clock size={32} className="text-[#E8B835]" />
        </div>
        
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-0.5 bg-[#E8B835]"></span>
          <span className="text-[#E8B835] text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Coming Soon</span>
          <span className="w-8 h-0.5 bg-[#E8B835]"></span>
        </div>

        <h1 
          className="text-[#1a2e1a] mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}
        >
          Our Platform is <br className="hidden sm:block" /> Almost Ready
        </h1>

        <p className="text-gray-600 mb-10 max-w-lg mx-auto" style={{ lineHeight: 1.8 }}>
          We're putting the finishing touches on the Farm Life Market digital platform. Soon, you'll have full access to our global marketplace, real-time logistics, and agricultural trading tools.
        </p>

        <form className="max-w-md mx-auto mb-10 flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email to get notified" 
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1a2e1a] outline-none focus:border-[#E8B835] focus:bg-white transition-colors"
            required
          />
          <button 
            type="button"
            className="bg-[#1a2e1a] text-white px-6 py-3.5 rounded-lg text-sm hover:bg-[#2d5016] transition-colors shrink-0"
            style={{ fontWeight: 600 }}
          >
            Notify Me
          </button>
        </form>

        <div className="border-t border-gray-100 pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1a2e1a] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
