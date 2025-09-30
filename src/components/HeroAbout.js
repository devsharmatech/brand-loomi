"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Target, Rocket } from "lucide-react";
import Header from "@/components/Header";

export default function HeroAbout() {
  return (
    <section className="relative w-full min-h-[100vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50"/>
      
      {/* Enhanced Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-emerald-500/40 blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/40 to-emerald-500/40 blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 -z-10"
      >
        <Sparkles className="w-8 h-8 text-cyan-400/60" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">About Brandloomi</span>
          </motion.div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            YOUR <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              DIGITAL
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              COMPANION
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We are your strategic partner in digital transformation, 
            combining cutting-edge technology with creative solutions 
            to bring your vision to life.
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
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-400 text-white bg-cyan-400/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              <span className="font-semibold">Let&apos;s Discuss</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 group-hover:text-black transition-colors" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Image Section with Corner Design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative w-full max-w-6xl mx-auto mt-12 lg:mt-20"
      >
        <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 backdrop-blur-sm">
          {/* Main Image Container */}
          <div className="relative">
            <img
              src="./about-us-1.jpg"
              alt="Team working"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Corner Design Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cyan-400 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-emerald-400 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-cyan-400 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-400 rounded-br-3xl"></div>

            {/* Animated Corner Accents */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-4 right-4 w-3 h-3 bg-emerald-400 rounded-full"
            ></motion.div>
          </div>

          {/* Expert Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            20+ Experts
          </motion.div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-xl -z-10"></div>
      </motion.div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}