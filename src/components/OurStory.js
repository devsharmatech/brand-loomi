"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Rocket } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative bg-transparent text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Enhanced Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-lg">
                <motion.img
                  src="./about-us-1.jpg" 
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="rounded-3xl object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <Rocket className="w-4 h-4" />
                <span className="font-bold">Since 2022</span>
              </motion.div>

              {/* Bottom Right Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-2xl shadow-2xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="font-semibold">50+ Projects</span>
                </div>
              </motion.div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-green-400 rounded-tl-2xl"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-green-400 rounded-bl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl"></div>
            </div>
          </motion.div>

          {/* Right: Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Target className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-300">Our Journey</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-500  bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                OUR STORY
              </motion.h2>
            </div>

            {/* Content Paragraphs */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-emerald-500 font-semibold">Brandloomi</span> began with a simple goal: to make digital branding
                accessible for startups and small businesses often overlooked by
                traditional agencies. By offering premium services at a fraction of
                the cost, we help founders build a strong digital presence.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Driven by social impact, our <span className="text-cyan-500 font-semibold">"Pay What You Can"</span> program supports
                budget-limited startups, while our <span className="text-green-500 font-semibold">Student Ambassador Program</span>
                empowers international students. Today, we're proud to be a trusted
                partner for startups across Ireland—delivering fast, affordable, and
                heartfelt digital solutions.
              </p>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { icon: Heart, number: "100%", label: "Client Satisfaction" },
                { icon: Users, number: "50+", label: "Startups Helped" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Underline */}
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}