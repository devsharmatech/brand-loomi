"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Target, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function HeroServiceInner({
  heading,
  subheading,
  btntext,
  btnlink,
}) {
  return (
    <section className="relative w-full min-h-[50vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50" />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-emerald-500/40 blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/40 to-emerald-500/40 blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-20 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold text-emerald-500"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          <p
            className="text-gray-300 text-lg max-w-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: subheading }}
          />

          {/* CTA Buttons */}
          <div className="flex items-center gap-6 pt-4">
           
            {/* Animated Contact Us button */}
            <Link href="/contact-us" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-400 text-white bg-emerald-400/10 backdrop-blur-sm hover:bg-emerald-400 hover:text-black transition-all duration-300 group"
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
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center lg:items-end gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="w-16 h-px bg-gray-500"></div>
              <span className="text-white text-4xl">*</span>
              <div className="w-16 h-px bg-gray-500"></div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h3 className="text-5xl font-extrabold text-white">8+</h3>
            <p className="text-gray-400 text-lg">Clients Helped</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
