"use client";

import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Rocket,
  Target,
  Eye,
  Heart,
  Users,
  Sparkles,
  Zap,
} from "lucide-react";

const WhoWeAre = ({cards_who_we_are}) => {
    const icons = { Target, Eye, Heart, Rocket, Zap, Sparkles };
    const [cards, setCards] = useState(cards_who_we_are);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative w-full bg-transparent text-white px-6 md:px-12 py-20 md:py-28 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10"
        >
          <Sparkles className="w-8 h-8 text-cyan-400/40" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10"
        >
          <Zap className="w-8 h-8 text-emerald-400/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* WHO WE ARE Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="relative">
            {/* Vertical Label */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -left-20 lg:-left-24 top-10 transform -rotate-90 text-sm tracking-wider text-cyan-400 font-semibold flex items-center gap-2"
            >
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              Digital Solution
            </motion.span>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">About Us</span>
            </motion.div>

            <h3 className="text-emerald-400 text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">
              Who We Are
            </h3>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed"
            >
              <p>
                At{" "}
                <span className="text-cyan-400 font-semibold">Brandloom</span>,
                we believe that digital success should be accessible to every
                entrepreneur and small business, not just those with big
                budgets. Founded in Dublin, our agency was born from the desire
                to break down barriers and empower startups with affordable,
                high-quality digital branding and marketing solutions.
              </p>
              <p>
                Our unique approach allows us to deliver stunning websites,
                mobile apps, and marketing campaigns at prices startups can
                afford, without compromising on quality or speed.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">
                  Startup Consultancy
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400 text-white bg-cyan-400/10 hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  Let&apos;s Discuss
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:text-black" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-end justify-between space-y-8 lg:space-y-0"
          >
            <div className="flex items-center gap-6">
              <div className="hidden md:block w-24 h-px bg-gradient-to-l from-gray-600 to-transparent"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-cyan-400 text-4xl">✦</span>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center lg:text-right p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2"
              >
                8+
              </motion.p>
              <p className="text-gray-400 text-lg">Happy Clients</p>
              <div className="flex justify-center lg:justify-end mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full border-2 border-slate-900"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Empowering Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-6xl mx-auto">
            Empowering Growth Through{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Affordable
            </span>{" "}
            Digital Innovation
          </h2>
        </motion.div>

        {/* Mission / Vision / Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards_who_we_are.map((card) => {
            const Icon = icons[card.icon];
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 ${card.hoverBorder}`}
              >
                <div
                  className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h4 className="text-white font-bold text-xl mb-4 mt-4">
                  {card.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {card.description}
                </p>
                <div
                  className={`absolute bottom-4 right-4 w-8 h-8 ${card.hoverBg} rounded-full ${card.hoverBgHover} transition-colors`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
