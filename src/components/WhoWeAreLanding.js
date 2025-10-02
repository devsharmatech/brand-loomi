"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

export default function WhoWeAreLanding() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  const points = [
    "Affordable, transparent pricing",
    "Fast turnaround times",
    "Ongoing support",
    "Proven track record",
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-transparent px-4 md:px-3 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-emerald-400 mb-10 flex items-center gap-4"
        >
          WHO ARE WE ?
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"
          />
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-lg  leading-relaxed text-gray-200">
              At Brandloomi, we believe that digital success should be
              accessible to every entrepreneur and small business, not just
              those with big budgets. Founded in Dublin, our agency was born
              from the desire to break down barriers and empower startups with
              affordable, high-quality digital branding and marketing solutions.
              Our unique approach allows us to deliver stunning websites, mobile
              apps, and marketing campaigns at prices startups can afford,
              without compromising on quality or speed. 
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 text-lg group"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                  }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                >
                  {point}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
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
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
