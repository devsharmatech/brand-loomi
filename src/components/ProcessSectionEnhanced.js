"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Zap, Rocket, TrendingUp } from "lucide-react";

export default function ProcessSectionEnhanced() {
  const steps = [
    { name: "Discover", icon: Sparkles, color: "from-purple-500 to-pink-500" },
    { name: "Define", icon: Target, color: "from-blue-500 to-cyan-500" },
    { name: "Develop", icon: Zap, color: "from-green-500 to-emerald-500" },
    { name: "Deliver", icon: Rocket, color: "from-orange-500 to-red-500" },
    { name: "Evolve", icon: TrendingUp, color: "from-violet-500 to-indigo-500" },
  ];

  return (
    <section className="relative bg-transparent text-white px-6 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute  overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Our Workflow</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent">
            FROM IDEAS TO
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <p className="text-lg text-cyan-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Our Process
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Enhanced Diamond Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          {/* Challenge Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 flex items-center gap-2 text-cyan-300 font-semibold"
          >
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
            Challenge
          </motion.div>

          {/* Left Diamond */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 50 }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-cyan-900/30 via-emerald-900/30 to-slate-900 border border-cyan-500/30 rounded-2xl flex items-center justify-center rotate-90 shadow-2xl"
          >
            {/* Animated Border */}
            <div className="absolute  rounded-2xl bg-gradient-to-r from-cyan-500 via-transparent to-emerald-500 animate-pulse opacity-20"></div>
            <div className="absolute  rounded-2xl bg-slate-900"></div>
            
            <motion.p 
              className="text-center rotate-[-135deg] text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent z-10 p-8"
              whileHover={{ scale: 1.1 }}
            >
              Designing the<br />
              <span className="text-cyan-100">right things</span>
            </motion.p>
          </motion.div>

          {/* Connection Arrows */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 text-sm text-gray-400"
            >
              <span>Strategic</span>
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 text-sm text-gray-400"
            >
              <ArrowRight className="w-5 h-5 text-emerald-400" />
              <span>Iterative</span>
            </motion.div>
          </div>

          {/* Right Diamond */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 40 }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-900/30 via-cyan-900/30 to-slate-900 border border-emerald-500/30 rounded-2xl flex items-center justify-center rotate-90 shadow-2xl"
          >
            {/* Animated Border */}
            <div className="absolute  rounded-2xl bg-gradient-to-r from-emerald-500 via-transparent to-cyan-500 animate-pulse opacity-20"></div>
            <div className="absolute  rounded-2xl bg-slate-900"></div>
            
            <motion.p 
              className="text-center rotate-[-135deg] text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent z-10 p-8"
              whileHover={{ scale: 1.1 }}
            >
              Delivering the<br />
              <span className="text-emerald-100">things right</span>
            </motion.p>
          </motion.div>

          {/* Outcome Label */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:rotate-90 flex items-center gap-2 text-emerald-300 font-semibold"
          >
            Outcome
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
          </motion.div>
        </div>

        {/* Enhanced Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/20">
                    {/* Step Number */}
                    <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {idx + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Step Name */}
                    <h3 className="text-center font-bold text-lg text-white mb-2">
                      {step.name}
                    </h3>
                    
                    {/* Progress Line */}
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 + 0.5 }}
                          className="absolute -right-2 -top-1.5"
                        >
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Start Your Project
            <Rocket className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}