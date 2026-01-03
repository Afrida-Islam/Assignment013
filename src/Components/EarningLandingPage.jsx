import React from "react";
import { motion } from "framer-motion";

const EarningLandingPage = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 md:p-10 font-sans text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Introduction (Top Cards) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Intro Text Card */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <i className="fas fa-quote-right text-6xl text-blue-600"></i>
            </div>

            <h2 className="text-3xl font-bold mb-4">Hi, I'm Sarah.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I founded <strong>EarnWave</strong> to help people monetize their
              digital skills. Our platform connects you with global brands for
              high-paying tasks.
            </p>

            <div className="flex gap-4 mt-4">
              <div className="bg-blue-50 p-5 rounded-3xl flex-1 border border-blue-100">
                <div className="text-3xl font-black text-blue-700">50k+</div>
                <div className="text-xs text-blue-600 uppercase font-bold tracking-wider">
                  Active Earners
                </div>
              </div>
              <div className="bg-green-50 p-5 rounded-3xl flex-1 border border-green-100">
                <div className="text-3xl font-black text-green-700">$10M+</div>
                <div className="text-xs text-green-600 uppercase font-bold tracking-wider">
                  Paid Out
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-5 bg-gradient-to-br from-pink-100 to-rose-200 rounded-[2.5rem] overflow-hidden flex items-end justify-center relative min-h-[400px]"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-10 left-10 w-72 h-72 bg-white/30 rounded-full blur-2xl"
            ></motion.div>
            <img
              src="https://i.ibb.co.com/6crGYVPc/download-5.jpg"
              alt="Founder Sarah"
              className="relative z-10 object-cover w-full h-full transform hover:scale-105 transition duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Section 2: "What happens next" */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          What happens next
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Step 1: Image Anchor */}
          <motion.div
            variants={fadeInUp}
            className="md:row-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[500px] shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              alt="Earning"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-white/90 text-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Claim Your $10 Starter Bonus
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Join our community today and receive an immediate credit to
                start your earning journey.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Info Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-rose-50 p-10 rounded-[2.5rem] relative border border-rose-100 flex flex-col justify-between"
          >
            <div className="bg-rose-200/50 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-rose-800">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pick Your Daily Gigs</h3>
              <p className="text-gray-600 text-sm">
                Choose from micro-tasks, surveys, and content reviews updated
                every hour.
              </p>
            </div>
          </motion.div>

          {/* Step 3: Info Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-blue-50 p-10 rounded-[2.5rem] relative border border-blue-100 flex flex-col justify-between"
          >
            <div className="bg-blue-200/50 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-blue-800">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Level Up Your Rank</h3>
              <p className="text-gray-600 text-sm">
                Complete tasks consistently to unlock "Pro" status and 2x higher
                payout rates.
              </p>
            </div>
          </motion.div>

          {/* Step 4: Wide Result Card */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 bg-[#e8f5e9] p-10 rounded-[3rem] relative border border-green-100 overflow-hidden flex items-center"
          >
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-20 -top-20 w-64 h-64 bg-green-200/40 rounded-full blur-3xl"
            ></motion.div>

            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="bg-green-200/60 w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-6 text-green-800">
                  4
                </div>
                <h3 className="text-3xl font-bold mb-2 flex items-center">
                  Get Paid Instantly{" "}
                  <span className="ml-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                    LIVE
                  </span>
                </h3>
                <p className="text-gray-600 max-w-md">
                  Withdraw via PayPal, Crypto, or Bank. Most users receive funds
                  in under 2 hours.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-bold text-lg shadow-2xl hover:bg-black transition whitespace-nowrap"
              >
                Withdraw Earnings
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarningLandingPage;
