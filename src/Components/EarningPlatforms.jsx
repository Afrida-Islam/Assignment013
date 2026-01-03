import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Globe,
  Terminal,
  Layers,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const EarningPlatforms = () => {
  // Brand colors from your image
  const theme = {
    primaryOrange: "#FF7A00",
    deepNavy: "#0F172A",
    softCream: "#FFFBF7", // Matches the subtle warm background in your hero
  };

  const platforms = [
    {
      name: "Upwork",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Sync hourly contracts and fixed-price milestones.",
      stats: "12M+ Freelancers",
      category: "Enterprise",
      isConnected: true,
    },
    {
      name: "Fiverr",
      icon: <Layers className="w-6 h-6" />,
      description: "Manage gig orders and professional service revenue.",
      stats: "4M+ Active Gigs",
      category: "Creative",
      isConnected: false,
    },
    {
      name: "Guru",
      icon: <Terminal className="w-6 h-6" />,
      description: "Track SafePay balances and invoice history.",
      stats: "99% Satisfaction",
      category: "Technical",
      isConnected: false,
    },
    {
      name: "Freelancer",
      icon: <Globe className="w-6 h-6" />,
      description: "Import contest winnings and bid-based projects.",
      stats: "50M+ Users",
      category: "Global",
      isConnected: false,
    },
  ];

  return (
    <section
      className={`py-24 px-6 overflow-hidden`}
      style={{ backgroundColor: theme.softCream }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
                Consolidate Your <br />
                <span style={{ color: theme.primaryOrange }}>Earnings</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Just like your Wallet Balance, track everything in one place.
                Connect your profiles to see total revenue and performance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5" />,
                  title: "Auto-Syncing",
                  sub: "Updates every 15 mins",
                  color: "text-[#FF7A00]",
                  bg: "bg-orange-50",
                },
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: "Unified Analytics",
                  sub: "One chart for all platforms",
                  color: "text-slate-800",
                  bg: "bg-slate-100",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-orange-100 shadow-sm"
                >
                  <div
                    className={`p-3 rounded-xl ${feature.bg} ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{feature.title}</p>
                    <p className="text-sm text-slate-400 font-medium">
                      {feature.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Platform Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-all shadow-sm"
              >
                <div className="flex justify-between items-start mb-10">
                  <div
                    className="p-4 rounded-2xl bg-slate-50 text-slate-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #f1f5f9",
                    }}
                  >
                    <div className="group-hover:text-[#FF7A00] transition-colors">
                      {platform.icon}
                    </div>
                  </div>

                  {platform.isConnected ? (
                    <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full">
                      <div className="w-1.5 h-1.5 bg-[#FF7A00] rounded-full animate-pulse" />
                      <span className="text-[10px] font-black uppercase text-[#FF7A00] tracking-wider">
                        Connected
                      </span>
                    </div>
                  ) : (
                    <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                        Available
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#0F172A] text-xl">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {platform.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-black text-slate-900">
                      {platform.stats}
                    </span>
                  </div>

                  <button
                    style={{
                      backgroundColor: platform.isConnected
                        ? "#F1F5F9"
                        : theme.deepNavy,
                      color: platform.isConnected ? "#475569" : "white",
                    }}
                    className={`flex items-center gap-2 text-xs font-bold py-3 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-slate-200`}
                  >
                    {platform.isConnected ? "Manage" : "Connect"}
                    {!platform.isConnected && (
                      <ArrowRight className="w-3 h-3 text-[#FF7A00]" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningPlatforms;
