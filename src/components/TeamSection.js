"use client";

import { Twitter, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  {
    name: "ANUJ AGGARWAL",
    role: "CEO & Founder",
    description:
      "Visionary leader and startup mentor with 5+ years of experience in digital transformation.",
    image: "./teams/a1.jpg",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    description:
      "Tech innovator specializing in scalable solutions and cutting-edge technologies.",
    image: "./teams/a2.jpg",
  },
  {
    name: "John Smith",
    role: "Head of Design",
    description:
      "Creative director with a passion for user-centered design and brand storytelling.",
    image: "./teams/a3.jpg",
  },
];
const socialIcons = [
  { name: "LinkedIn", icon: <Linkedin size={16} /> },
  { name: "Twitter", icon: <Twitter size={16} /> },
  { name: "GitHub", icon: <Github size={16} /> },
];
export default function TeamSection() {
  return (
    <section className="relative bg-transparent text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Our Experts</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            MEET OUR TEAM
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to transforming your digital
            vision into reality
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col items-center relative ${
                idx === 1 ? "lg:-translate-y-12" : ""
              }`}
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-full max-w-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  {/* Role Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    {member.role}
                  </motion.div>
                </div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.4 }}
                  className="p-6 text-center relative -mt-4"
                >
                  {/* Name */}
                  <h3 className="font-bold text-xl text-white mb-2">
                    {member.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.5 }}
                    className="flex justify-center gap-3 mt-4"
                  >
                    {socialIcons.map((social) => (
                      <motion.div
                        key={social.name}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/20 transition-all duration-300"
                      >
                        <span className="text-gray-300 hover:text-white">
                          {social.icon}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Corner Decorations */}
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
              </motion.div>

              {/* Middle Card Highlight Effect */}
              {idx === 1 && (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-lg"
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/careers" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Join Our Team
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
