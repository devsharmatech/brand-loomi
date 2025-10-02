"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Sparkles,
  HeartHandshake,
  FileText,
  Star,
  Code,
  DollarSign,
  MessageSquare,
} from "lucide-react";

export default function DeliverTechStackPayWhat() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Left Side: Why Participate?
  const whyParticipate = [
    {
      text: "Kickstart your online presence without financial strain.",
      icon: Rocket,
      bg: "bg-emerald-500/20",
      color: "text-emerald-400",
    },
    {
      text: "Benefit from expert design, development, and marketing.",
      icon: Sparkles,
      bg: "bg-emerald-500/20",
      color: "text-emerald-400",
    },
    {
      text: "Join a community of startups supported by our agency.",
      icon: Users,
      bg: "bg-emerald-500/20",
      color: "text-emerald-400",
    },
    {
      text: "Help us build a more inclusive startup ecosystem in Ireland.",
      icon: HeartHandshake,
      bg: "bg-emerald-500/20",
      color: "text-emerald-400",
    },
  ];

  // Right Side: How It Works
  const howItWorks = [
    {
      text: "Apply by telling us your story and business vision.",
      icon: FileText,
      bg: "bg-cyan-500/20",
      color: "text-cyan-400",
    },
    {
      text: "Each month, we select a deserving startup or small business.",
      icon: Star,
      bg: "bg-cyan-500/20",
      color: "text-cyan-400",
    },
    {
      text: "We build your website or app with the same quality and care as our full-price clients.",
      icon: Code,
      bg: "bg-cyan-500/20",
      color: "text-cyan-400",
    },
    {
      text: "You pay what you can afford – even if that’s less than our usual launch fee.",
      icon: DollarSign,
      bg: "bg-cyan-500/20",
      color: "text-cyan-400",
    },
    {
      text: "All we ask in return is your honest testimonial and permission to share your success story.",
      icon: MessageSquare,
      bg: "bg-cyan-500/20",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="relative bg-transparent text-white py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold italic border-b border-gray-500/50 pb-2 mb-8"
            >
              Why Participate?
            </motion.h2>
            <motion.ul variants={containerVariants} className="space-y-6">
              {whyParticipate.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon with background */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg}`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-lg text-gray-200">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold italic border-b border-gray-500/50 pb-2 mb-8"
            >
              How It Works
            </motion.h2>
            <motion.ul variants={containerVariants} className="space-y-6">
              {howItWorks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon with background */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg}`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-lg text-gray-200">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
