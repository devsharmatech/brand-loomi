"use client";

import { 
  ArrowRight, 
  Upload, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkInquiries() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <section className="w-full bg-transparent text-white py-20 px-6">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {/* Left Section */}
        <motion.div 
          className="flex flex-col justify-start pr-10 border-r border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="./logo.png" alt="Brandloomi" className="h-10 mb-4" />
          </motion.div>
          
          <motion.p 
            className="mt-4 text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Affordable, high-quality digital solutions to help startups and
            small businesses launch, grow, and thrive
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex gap-4 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              { Icon: FacebookIcon, href: "#" },
              { Icon: InstagramIcon, href: "#" },
              { Icon: TwitterIcon, href: "#" },
              { Icon: LinkedinIcon, href: "#" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700/50 transition"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { 
                    duration: 0.2,
                    ease: "backOut"
                  }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-lg font-semibold italic"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Work Inquiries
            </motion.h3>
            <motion.div 
              className="flex-1 h-[1px] bg-gray-600 mx-3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.span 
              className="text-xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              *
            </motion.span>
          </motion.div>

          {/* Form */}
          <motion.form 
            className="space-y-5"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              { type: "text", placeholder: "Enter Your Full Name" },
              { type: "email", placeholder: "Email Address" },
              { type: "text", placeholder: "Mobile Number" },
            ].map((field, index) => (
              <motion.input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "#10b981",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)"
                }}
                whileHover={{ 
                  borderColor: "#4b5563",
                  scale: 1.01
                }}
              />
            ))}

            {/* Select Fields */}
            {[
              { options: ["Subject", "Software Development", "Digital Media Marketing", "Web App Development","Branding & Design","Mobile App Development","Startup Consulting","Other"] },
              { options: ["How did you hear about us?", "Google", "Social Media", "Referral"] }
            ].map((select, index) => (
              <motion.select 
                key={index}
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "#10b981",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)"
                }}
                whileHover={{ 
                  borderColor: "#4b5563",
                  scale: 1.01
                }}
              >
                {select.options.map((option, optIndex) => (
                  <option key={optIndex} className="bg-gray-900">
                    {option}
                  </option>
                ))}
              </motion.select>
            ))}

            <motion.input
              type="text"
              placeholder="companyName"
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#10b981",
                boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)"
              }}
              whileHover={{ 
                borderColor: "#4b5563",
                scale: 1.01
              }}
            />

            {/* File Input */}
            <motion.div 
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <input
                type="file"
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 file:hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              />
              <motion.span 
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Upload className="w-5 h-5" />
              </motion.span>
            </motion.div>

            <motion.textarea
              placeholder="message"
              rows={5}
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 resize-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#10b981",
                boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)"
              }}
              whileHover={{ 
                borderColor: "#4b5563",
                scale: 1.01
              }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={isSubmitting ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isSubmitting ? { 
                scale: [1, 1.02, 1],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.span>
              ) : (
                <>
                  SUBMIT <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}