"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Code,
  HeartHandshake,
  FileText,
  Star,
  CheckCircle,
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
    },
    {
      text: "Benefit from expert design, development, and marketing.",
      icon: Code,
    },
    {
      text: "Join a community of startups supported by our agency.",
      icon: Users,
    },
    {
      text: "Help us build a more inclusive startup ecosystem in Ireland.",
      icon: HeartHandshake,
    },
  ];

  // Right Side: How It Works
  const howItWorks = [
    {
      text: "Apply by telling us your story and business vision.",
      icon: CheckCircle,
    },
    {
      text: "Each month, we select a deserving startup or small business.",
      icon: Star,
    },
    {
      text: "We build your website or app with the same quality and care as our full-price clients.",
      icon: FileText,
    },
    {
      text: "You pay what you can afford – even if that’s less than our usual launch fee.",
      icon: DollarSign,
    },
    {
      text: "All we ask in return is your honest testimonial and permission to share your success story.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="relative bg-transparent text-white py-24 pt-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT SECTION */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold italic border-b border-gray-600/50 pb-2 mb-10"
            >
              Why Participate?
            </motion.h2>

            <motion.ul variants={containerVariants} className="space-y-8">
              {whyParticipate.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  {/* FIXED ICON BACKGROUND */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#00F5A0]/25 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.15)]">
                    <item.icon className="w-5 h-5 text-[#00F5A0]" strokeWidth={2.2} />
                  </div>
                  <span className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold italic border-b border-gray-600/50 pb-2 mb-10"
            >
              How It Works
            </motion.h2>

            <motion.ul variants={containerVariants} className="space-y-8">
              {howItWorks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  {/* FIXED ICON BACKGROUND */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#00F5A0]/25 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.15)]">
                    <item.icon className="w-5 h-5 text-[#00F5A0]" strokeWidth={2.2} />
                  </div>
                  <span className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
