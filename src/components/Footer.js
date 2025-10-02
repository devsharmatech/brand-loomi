"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Rocket, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const socials = [
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Dribbble", icon: <FaDribbble /> },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };
  const services = [
    { name: "Software Development", href: "/software-development" },
    { name: "Web App Development", href: "/web-app-development" },
    {
      name: "Mobile App Development",
      href: "/mobile-app-development",
    },
    {
      name: "Social & Digital Media Marketing",
      href: "/digital-media-marketing",
    },
    { name: "Startup Consulting", href: "/startup-consulting" },
    { name: "Branding & Design", href: "/branding-design" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ];

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
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-white text-gray-900 py-16 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10"
        >
          <Sparkles className="w-6 h-6 text-cyan-400/40" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10"
        >
          <Rocket className="w-5 h-5 text-emerald-400/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Brandloomi
              </h3>
            </motion.div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Affordable, high-quality digital solutions to help startups and
              small businesses launch, grow, and thrive in the digital world.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 border border-gray-200"
                >
                  {social.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li
                  key={service.name}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer group flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                  <Link href={service.href}>{service.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer group flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              Contact
            </h4>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600 group">
                <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-600" />
                </div>
                <span className="group-hover:text-cyan-600 transition-colors">
                  brandloomi@email.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 group">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="group-hover:text-emerald-600 transition-colors">
                  Dublin, Ireland
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm">
            © 2025 Brandloomi. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <motion.a
              href="#"
              whileHover={{ color: "#0891b2" }}
              className="hover:text-cyan-600 transition-colors"
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#2563eb" }}
              className="hover:text-blue-600 transition-colors"
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#059669" }}
              className="hover:text-emerald-600 transition-colors"
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </footer>
  );
}
