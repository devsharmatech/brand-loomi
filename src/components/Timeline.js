"use client";
import { motion } from "framer-motion";
import { MapPin, Rocket, Users, Heart, Globe } from "lucide-react";

const timeline = [
  {
    year: "2022",
    text: "Agency founded in Dublin.",
    icon: Rocket,
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2023",
    text: "50 startups launched successfully.",
    icon: Users,
    color: "from-emerald-500 to-green-500",
  },
  {
    year: "2024",
    text: "Pay What You Can initiative introduced.",
    icon: Heart,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2025",
    text: "Expanded to serve clients across Europe.",
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
];

export default function Timeline() {
  return (
    <section className="bg-trasparent text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Our Journey</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold italic mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">OUR</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              TIMELINE
            </span>
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <span className="text-cyan-400 text-lg">Milestones</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-emerald-500 to-purple-500 rounded-full"
          />

          {/* Timeline Items */}
          <div className="space-y-32">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'pr-8 lg:pr-16' : 'pl-8 lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 ${
                        isEven ? 'text-right' : 'text-left'
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className={`inline-flex items-center gap-3 mb-4 ${
                          isEven ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">{item.year}</span>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed"
                      >
                        {item.text}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.1, type: "spring" }}
                      className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full shadow-2xl border-4 border-slate-900 z-10 relative`}
                    />
                    
                    {/* Connecting Line from Node to Card */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${
                        isEven 
                          ? `${item.color.split(' ')[1]} right-0 translate-x-full` 
                          : `${item.color.split(' ')[1].replace('to-', 'from-')} left-0 -translate-x-full`
                      } rounded-full`}
                    />
                  </div>

                  {/* Empty Space for alternating sides */}
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Start and End Points */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-2xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-2xl"
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.p
            className="text-gray-400 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            And our journey continues...
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Join Our Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
