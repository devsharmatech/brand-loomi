"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How can you offer such affordable prices?",
    a: "We optimize processes, leverage automation, and cut unnecessary costs to deliver high-quality work at lower rates without compromising on quality or service.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "No technical knowledge required! We handle all the technical details and keep communication simple and clear for you throughout the entire process.",
  },
  {
    q: "How does your process work after I contact you?",
    a: "We start with a free consultation to understand your needs, create a customized plan, and then move step by step while keeping you updated at every milestone.",
  },
  {
    q: "What platforms or technologies do you use for development?",
    a: "We work with modern, scalable technologies including Next.js, React, Tailwind CSS, Node.js, and various cloud solutions to ensure optimal performance.",
  },
  {
    q: "Can you customize solutions for my specific needs?",
    a: "Absolutely! Every project is uniquely tailored to your goals, budget, timeline, and specific business requirements.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Timelines vary based on complexity, but we typically deliver small projects in 2-4 weeks and larger solutions within 2-3 months.",
  },
  {
    q: "What if I need support after the project is done?",
    a: "We provide comprehensive ongoing support and maintenance packages to ensure everything runs smoothly long-term.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We collaborate with clients worldwide through remote tools and maintain clear communication across all time zones.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-transparent text-white py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16"
        >
          <div className="mb-8 lg:mb-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Got Questions?</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent">
              Frequently Asked
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl">
              Everything you need to know about our services and process. Can't find your answer? Contact us directly.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-3 px-6 py-4 rounded-xl border border-cyan-500/30 bg-white/5 text-cyan-400 font-semibold hover:border-cyan-400 transition-all duration-300"
          >
            Contact Support
            <ChevronUp className="w-5 h-5 rotate-45" />
          </motion.button>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Question Header */}
                <div className="relative z-10 flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold text-white pr-8 flex-1">
                    {faq.q}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </motion.div>
                </div>

                {/* Answer Content */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative z-10 pt-4 mt-4 border-t border-slate-700/50"
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.a}
                        </p>
                        
                        {/* Decorative Element */}
                        <div className="absolute -left-2 top-4 w-1 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Number Indicator */}
              <div className="absolute -left-3 -top-3 w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-slate-900">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}