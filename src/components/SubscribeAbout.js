"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles, Star, Send } from "lucide-react";

export default function SubscribeAbout({heading, btntext}) {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="relative flex items-center justify-center min-h-[70vh] bg-transparent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
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
          className="absolute top-20 left-10 md:left-20"
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
          className="absolute bottom-20 right-10 md:right-20"
        >
          <Star className="w-8 h-8 text-emerald-400/60" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Enhanced Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <img src="./logo.png" className="h-10" />
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/* Enhanced Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
        >
         {heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to transform your vision into reality? 
          Start your journey with us today.
        </motion.p>

        {/* Enhanced Email Input */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Main Input Container */}
            <motion.div
              className={`flex items-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-2 border backdrop-blur-sm transition-all duration-300 ${
                isFocused 
                  ? "border-cyan-400/50 shadow-2xl shadow-cyan-500/20" 
                  : "border-slate-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter your email address..."
                className="flex-1 px-6 py-5 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                required
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500"
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ 
                    backgroundSize: "200% 100%"
                  }}
                />
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="font-semibold">{btntext}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
            />
          </div>
        </motion.form>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full border-2 border-slate-900"></div>
              ))}
            </div>
            <span>Join 2,000+ successful businesses</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Get started in minutes</span>
          </div>
        </motion.div>
      </div>

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
    </div>
  );
}