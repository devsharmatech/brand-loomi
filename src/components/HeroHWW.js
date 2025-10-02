"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Target, Rocket } from "lucide-react";
import Header from "@/components/Header";

export default function HeroHWW({
  heading,
  subheading,
  logo
}) {
  return (
    <section className="relative w-full min-h-[30vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50" logo={logo} />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-emerald-500/40 blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/40 to-emerald-500/40 blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1  items-center py-20 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-5xl leading-relaxed" dangerouslySetInnerHTML={{ __html: subheading }} />
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-emerald-500" dangerouslySetInnerHTML={{ __html: heading }} />

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="w-16 h-px bg-gray-500"></div>
              <span className="text-white text-4xl">*</span>
              <div className="w-16 h-px bg-gray-500"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
