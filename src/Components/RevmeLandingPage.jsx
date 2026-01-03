import React from "react";

const RevmeLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <main className="relative pt-16">
        <section className="px-4 md:px-8 max-w-6xl mx-auto relative z-10">
          <div className="relative">
            {/* Main Hero Image - Updated to a professional tech/office vibe */}
            <div className="relative rounded-[60px] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1400"
                alt="Modern Workspace"
                className="w-full h-[600px] object-cover"
              />
              {/* Soft overlay for depth */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Review Bubble - Fixed (No animation) */}
            <div className="absolute top-12 right-12 bg-white/95 backdrop-blur-md p-7 rounded-[32px] shadow-2xl max-w-[280px] hidden lg:block border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-[#E87D4E] rounded-lg shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-bold text-sm tracking-tight">
                  Revme App
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-slate-700 font-medium">
                "Revme transformed how we collect feedback. It's automated and
                seamless."
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex text-orange-400 text-xs mb-1">★★★★★</div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                    Verified Business
                  </p>
                </div>
                <span className="text-2xl font-black text-slate-800">4.9</span>
              </div>
            </div>

            {/* Feature Tags - Grid Layout with updated styling */}
            <div className="absolute -bottom-8 left-0 right-0 flex flex-wrap justify-center gap-4 px-4">
              <Tag
                color="bg-white text-slate-700"
                label="Live support from Michael (Founder)"
                iconColor="text-blue-500"
              />
              <Tag
                color="bg-white text-slate-700"
                label="Automated SMS & email requests"
                iconColor="text-orange-500"
              />
              <Tag
                color="bg-white text-slate-700"
                label="Google maps ranking boost"
                iconColor="text-emerald-500"
              />
              <Tag
                color="bg-white text-slate-700"
                label="14-day free trial"
                iconColor="text-amber-500"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Refined Tag Component
const Tag = ({ color, label, iconColor }) => (
  <div
    className={`${color} px-6 py-5 rounded-[24px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 font-bold text-[15px] whitespace-nowrap transition-all hover:shadow-xl hover:-translate-y-1`}
  >
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-50 ${iconColor}`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    {label}
  </div>
);

export default RevmeLanding;
