import React from "react";
import bannerImg from "../assets/bannerImg.jpeg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDFCFB]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F7F3F0] rounded-l-[100px] z-0 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                Live: 2,400+ Tasks Available
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Turn your time <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                into digital gold.
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              The world's most rewarding micro-task platform. Complete simple
              surveys, test apps, and watch videos to earn instant cash payouts.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-2">
                Start Earning Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:border-orange-200 transition-all flex items-center justify-center gap-2">
                How it works
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-white"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold font-mono">
                  4.9/5
                </span>{" "}
                rating from over 10k users
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Visuals */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={bannerImg}
                alt="Working"
                className="w-full h-[500px] "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Earnings Widget */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50 w-64 animate-float">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Wallet Balance
                </span>
                <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md">
                  +12%
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">
                  $2,450
                </span>
                <span className="text-sm font-bold text-slate-400">USD</span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">
                  ₿
                </div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-3/4" />
                </div>
              </div>
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="h-10 w-10 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Latest Payout
                </p>
                <p className="text-sm font-black text-slate-900">
                  +$45.00 via PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
