import { Link } from "react-router";
import { Tractor, Cloud, Sun, Wheat, Home, Sprout } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[75vh] bg-gradient-to-b from-[#eaf2e3] to-[#f8f5ee] relative overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      <style>{`
        @keyframes drive {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(100vw); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        @keyframes drift {
          0% { transform: translateX(-150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes bounce-harvest {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }
        .animate-drive {
          animation: drive 14s linear infinite;
        }
        .animate-drift-1 {
          animation: drift 35s linear infinite;
        }
        .animate-drift-2 {
          animation: drift 50s linear infinite;
          animation-delay: -15s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-bounce-harvest {
          animation: bounce-harvest 0.6s ease-in-out infinite;
        }
      `}</style>

      {/* Sky elements */}
      <div className="absolute top-10 right-[15%] text-[#E8B835] animate-spin-slow opacity-90">
        <Sun size={120} strokeWidth={1} />
      </div>
      <div className="absolute top-24 left-0 text-white animate-drift-1">
        <Cloud size={90} fill="white" strokeWidth={0} className="opacity-90 drop-shadow-sm" />
      </div>
      <div className="absolute top-12 left-0 text-white animate-drift-2">
        <Cloud size={160} fill="white" strokeWidth={0} className="opacity-70 drop-shadow-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto bg-white/70 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white shadow-xl animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-[#2d5016]/20 to-[#E8B835]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#2d5016]">
          <Sprout size={44} strokeWidth={1.5} />
        </div>
        <h1 className="text-7xl text-[#2d5016] mb-2" style={{ fontWeight: 800 }}>404</h1>
        <h2 className="text-2xl text-[#1a2e1a] mb-5" style={{ fontWeight: 700 }}>Field Not Found</h2>
        <p className="text-gray-600 mb-8 text-base" style={{ lineHeight: 1.7 }}>
          Looks like you've wandered off the trail. The page you're looking for has been moved, harvested, or never existed.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[#2d5016] text-white px-8 py-3.5 rounded-xl hover:bg-[#1f3a0f] transition-all hover:shadow-lg hover:-translate-y-0.5"
          style={{ fontWeight: 600 }}
        >
          <Home size={18} />
          Return to Homepage
        </Link>
      </div>

      {/* Ground & Tractor */}
      <div className="absolute bottom-0 left-0 w-full h-20 border-t-[6px] border-[#2d5016]/20 bg-[#2d5016]/10">
        <div className="absolute bottom-full left-0 mb-[-8px] text-[#2d5016] animate-drive flex items-end">
          <Tractor size={80} strokeWidth={1.2} className="text-[#2d5016]" fill="currentColor" fillOpacity={0.1} />
          <div className="flex gap-1 ml-2 text-[#E8B835] animate-bounce-harvest origin-bottom">
            <Wheat size={30} strokeWidth={1.5} />
            <Wheat size={30} strokeWidth={1.5} />
            <Wheat size={30} strokeWidth={1.5} />
          </div>
        </div>
        {/* Ground patterns */}
        <div className="w-full h-full opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, #2d5016 40px, #2d5016 80px)' }}></div>
      </div>
    </div>
  );
}
