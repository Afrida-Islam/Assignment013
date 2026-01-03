import React from "react";
import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Hero Container */}
      <div className="relative overflow-hidden rounded-[40px] bg-[#F9F7F2] p-8 md:p-16">
        {/* Background Decorative Element (Optional) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
              Unlock your potential and finally make your free{" "}
              <span className="text-orange-500">time pay</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 font-medium">
              Why users love our platform:
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-64 md:h-[400px] w-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
              alt="People working together"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Floating Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Highlighted (Cream/Orange) */}
          <div className="bg-[#FEF6E5] p-8 rounded-[32px] flex flex-col justify-between border border-orange-100/50 shadow-sm">
            <div>
              <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Quick & Easy Tasks
              </h3>
              <p className="text-slate-600 mt-2">
                Surveys, clicks, and mini-jobs
              </p>
            </div>
            <button className="mt-8 bg-[#1A1C1E] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors w-fit">
              Start Earning
            </button>
          </div>

          {/* Card 2: White */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Secure & Instant Payouts
            </h3>
            <p className="text-slate-600 mt-2">PayPal, Crypto, & more</p>
          </div>

          {/* Card 3: White */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Boost Your Income
            </h3>
            <p className="text-slate-600 mt-2">Daily bonuses & referrals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
