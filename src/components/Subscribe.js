"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Star, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-transparent to-slate-950 text-white py-28 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
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
          <Zap className="w-8 h-8 text-blue-400/60" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4"
        >
          <Star className="w-6 h-6 text-emerald-400/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced Branding */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-gray-300 font-semibold tracking-wide">Brandloomi</span>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Ready to{" "}
            <span className="relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  backgroundSize: "200% 100%"
                }}
              >
                Launch
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>{" "}
            Your Business Online?
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of successful businesses that launched with us. 
            Get exclusive insights and early access to new features.
          </motion.p>

          {/* Enhanced Subscription Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
            onSubmit={handleSubmit}
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
                animate={{ 
                  boxShadow: isHovered 
                    ? "0 20px 40px rgba(6, 182, 212, 0.15)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.3)" 
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
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
                    <span className="font-semibold">Launch</span>
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
                className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.form>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-cyan-400 rounded-full border-2 border-slate-900"></div>
                ))}
              </div>
              <span>Join 2,000+ businesses</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Rated 4.9/5</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </section>
  );
}