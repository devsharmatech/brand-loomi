"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code, Rocket, Cpu, Cloud } from "lucide-react";

export default function DeliverTechStack({deliverables,techStack}) {
 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative bg-transparent text-white py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Section - What We Deliver */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <motion.h2
                className="text-xl font-semibold italic border-b-2 border-emerald-500/50 pb-2"
                whileHover={{ scale: 1.02 }}
              >
                What We Deliver
              </motion.h2>
            </motion.div>

            {/* Deliverables List */}
            <motion.ul variants={containerVariants} className="space-y-6">
              {deliverables.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                    className="flex-shrink-0 mt-1"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-lg text-gray-200 group-hover:text-white transition-colors"
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Decorative Element */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full"
            />
          </motion.div>

          {/* Right Section - Our Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <motion.h2
                className="text-xl font-semibold italic border-b-2 border-cyan-500/50 pb-2"
                whileHover={{ scale: 1.02 }}
              >
                Our Tech Stack
              </motion.h2>
            </motion.div>

            {/* Tech Stack List */}
            <motion.ul variants={containerVariants} className="space-y-6">
              {techStack.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                    className="flex-shrink-0 mt-1"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-lg text-gray-200 group-hover:text-white transition-colors"
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-500/20 rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 w-4 h-4 bg-blue-500/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}