"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Target, Rocket } from "lucide-react";
import Header from "@/components/Header";

export default function HeroAbout({ heading, subheading, btntext, btnlink }) {
  return (
    <section className="relative w-full min-h-[70vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50" />

      {/* Enhanced Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-emerald-500/40 blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/40 to-emerald-500/40 blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 -z-10"
      >
        <Sparkles className="w-8 h-8 text-cyan-400/60" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 -z-10"
      >
        <Target className="w-8 h-8 text-emerald-400/60" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-end py-20 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {subheading}
          </motion.p>
        </motion.div>

        {/* Right Content - CTA Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-start lg:items-end gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="w-20 h-px bg-gradient-to-r from-gray-500 to-transparent"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-cyan-400 text-2xl">✦</span>
              </motion.div>
              <div className="w-20 h-px bg-gradient-to-l from-gray-500 to-transparent"></div>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "white",
                color: "black",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-400 text-white bg-cyan-400/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              <span className="font-semibold">{btntext}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5 group-hover:text-black transition-colors" />
              </motion.div>
            </motion.button>
          </div>
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
}
