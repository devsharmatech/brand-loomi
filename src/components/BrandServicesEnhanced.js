"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const BrandServicesEnhanced = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const data = {
      title: "HOW TO ESTABLISH YOUR BRAND",
      services: [
        {
          id: 1,
          title: "Software Development",
          description:
            "Custom software that solves your business problems and scales with your growth",
          icon: "💻",
        },
        {
          id: 2,
          title: "Digital Media Marketing",
          description:
            "Grow your brand and reach your target audience with proven strategies.",
          icon: "📱",
        },
        {
          id: 3,
          title: "Web App Development",
          description:
            "Responsive, high-performance web applications for any device.",
          icon: "🌐",
        },
        {
          id: 4,
          title: "Branding & Design",
          description:
            "Stand out with a memorable brand, crafted by our creative experts.",
          icon: "🎨",
        },
        {
          id: 5,
          title: "Mobile App Development",
          description:
            "iOS, Android, and cross-platform experiences that engage users.",
          icon: "📲",
        },
        {
          id: 6,
          title: "Startup Consulting",
          description:
            "From business plans to funding, we guide you every step of the way.",
          icon: "🚀",
        },
      ],
    };
    setServicesData(data);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!servicesData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent py-16 px-4">
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center justify-between  mb-16 gap-5"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-50 mb-6 md:mb-0 italic">
            {servicesData.title}
          </h1>
          <a
            href="#"
            className="h-10 w-10 bg-cyan-600  flex items-center justify-center  rounded-full hover:bg-cyan-700 transition"
          >
            <FiArrowRight className="text-white" />
          </a>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <ServiceCardEnhanced service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ServiceCardEnhanced = ({ service }) => {
  return (
    <div className="relative glass-card rounded-4xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-500 h-75 flex flex-col">
      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-8 flex flex-col flex-grow">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-4xl mb-6"
        >
          {service.icon}
        </motion.div>

        <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-cyan-600 transition-colors duration-300 italic">
          {service.title}
        </h3>

        <p className="text-gray-10 md:text-gray-100 leading-relaxed mb-4 overflow-hidden line-clamp-3">
          {service.description}
        </p>

        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center justify-center h-10 w-10 bg-gray-50 text-gray-800 md:bg-cyan-500 md:text-white rounded-full pointer font-semibold mt-auto"
        >
          
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
      ></motion.div>
    </div>
  );
};


export default BrandServicesEnhanced;
