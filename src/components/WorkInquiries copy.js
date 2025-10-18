"use client";

import {
  ArrowRight,
  Upload,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import contactAnimation from "@/lotties/contact-loti.json";
import Lottie from "lottie-react";

export default function WorkInquiries() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    service: "Subject",
    company_name: "",
    message: "",
    source: "How did you hear about us?",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setSelectedFileName("");
      return;
    }

    // Optional: limit file size to 5MB
    const MAX = 5 * 1024 * 1024;
    if (file.size > MAX) {
      setStatus({ type: "error", message: "File too large. Max size 5MB." });
      e.target.value = "";
      setSelectedFile(null);
      setSelectedFileName("");
      return;
    }

    setSelectedFile(file);
    setSelectedFileName(file.name);
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Basic required validation
    if (!form.full_name.trim() || !form.email.trim()) {
      setStatus({ type: "error", message: "Name and email are required." });
      return;
    }

    setIsSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("full_name", form.full_name);
      fd.append("email", form.email);
      fd.append("phone", form.phone || "");
      fd.append("subject", form.subject || "");
      fd.append("service", form.service || "");
      fd.append("company_name", form.company_name || "");
      fd.append("message", form.message || "");
      fd.append("source", form.source || "website");

      if (selectedFile) {
        // Append file using the key 'file' as server expects
        fd.append("file", selectedFile, selectedFile.name);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd, // do NOT set Content-Type — browser will set the multipart boundary
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      setStatus({
        type: "success",
        message: data.message || "Inquiry submitted successfully!",
      });

      // Reset
      setForm({
        full_name: "",
        email: "",
        phone: "",
        subject: "Subject",
        service: "Subject",
        company_name: "",
        message: "",
        source: "How did you hear about us?",
      });
      setSelectedFile(null);
      setSelectedFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong",
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-transparent text-white py-20 px-6">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative"
        
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-start pr-10 border-r border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="./logo.png" alt="Brandloomi" className="h-10 mb-4" />
          </motion.div>

          <motion.p
            className="mt-4 text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Affordable, high-quality digital solutions to help startups and
            small businesses launch, grow, and thrive
          </motion.p>
          <div className="flex justify-start my-5 md:justify-start">
            <Lottie
              animationData={contactAnimation}
              loop={true}
              className="w-full max-w-md"
            />
          </div>
          <motion.div
            className="flex gap-4 mt-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700/50 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-lg font-semibold italic"
              whileHover={{ scale: 1.05 }}
            >
              Work Inquiries
            </motion.h3>
            <motion.div
              className="flex-1 h-[1px] bg-gray-600 mx-3"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.span
              className="text-xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              *
            </motion.span>
          </motion.div>

          {status.message && (
            <div
              className={`mb-4 p-3 rounded-md text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          <motion.form
            className="space-y-5"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
          >
            <motion.input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Full Name"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <motion.input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <motion.input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Mobile Number"
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            {/* Service select */}
            <motion.select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "white",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option value="" className="bg-[#111] text-white">
                Subject
              </option>
              <option
                value="Software Development"
                className="bg-[#111] text-white"
              >
                Software Development
              </option>
              <option
                value="Digital Media Marketing"
                className="bg-[#111] text-white"
              >
                Digital Media Marketing
              </option>
              <option
                value="Web App Development"
                className="bg-[#111] text-white"
              >
                Web App Development
              </option>
              <option
                value="Branding & Design"
                className="bg-[#111] text-white"
              >
                Branding & Design
              </option>
              <option
                value="Mobile App Development"
                className="bg-[#111] text-white"
              >
                Mobile App Development
              </option>
              <option
                value="Startup Consulting"
                className="bg-[#111] text-white"
              >
                Startup Consulting
              </option>
              <option value="Other" className="bg-[#111] text-white">
                Other
              </option>
            </motion.select>

            <motion.select
              name="source"
              value={form.source}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "white",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option value="" className="bg-[#111] text-white">
                How did you hear about us?
              </option>
              <option value="Google" className="bg-[#111] text-white">
                Google
              </option>
              <option value="Social Media" className="bg-[#111] text-white">
                Social Media
              </option>
              <option value="Referral" className="bg-[#111] text-white">
                Referral
              </option>
            </motion.select>

            <motion.input
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            {/* File Input - hidden input + visible button */}
            <motion.div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                name="file"
              />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-600 bg-transparent hover:bg-gray-800 transition"
                >
                  <Upload className="w-5 h-5" />
                  <span className="text-sm">Attach file</span>
                </button>

                <div className="text-sm text-gray-300 truncate">
                  {selectedFileName || "No file selected"}
                </div>
              </div>
            </motion.div>

            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
            />

            <motion.button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition disabled:opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
      </div>
    </section>
  );
}
