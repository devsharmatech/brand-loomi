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
import { useState, useRef, useEffect } from "react";
import contactAnimation from "@/lotties/contact-loti.json";
import Lottie from "lottie-react";
import Link from "next/link";

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
    agreeTerms: false,
    agreePrivacy: false,
    subscribe: true,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});

  // CAPTCHA state
  const [captchaCode, setCaptchaCode] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const canvasRef = useRef(null);

  // Required fields configuration
  const requiredFields = {
    full_name: "Full Name",
    email: "Email Address",
    service: "Service/Subject",
    agreeTerms: "Terms and Conditions",
    agreePrivacy: "Privacy Policy",
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Generate random CAPTCHA code and draw on canvas
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(code);
    setUserCaptchaInput("");
    setCaptchaError("");

    // Draw CAPTCHA on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text styling
      ctx.font = "bold 24px Arial";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Add some distortion
      for (let i = 0; i < code.length; i++) {
        const x = 25 + i * 25;
        const y = 25 + Math.random() * 10 - 5;
        const rotation = Math.random() * 0.4 - 0.2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillText(code[i], 0, 0);
        ctx.restore();
      }

      // Add noise
      ctx.strokeStyle = "#374151";
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }

      // Add dots
      ctx.fillStyle = "#4b5563";
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  };

  // Validate CAPTCHA
  const validateCaptcha = () => {
    if (userCaptchaInput.toLowerCase() !== captchaCode.toLowerCase()) {
      setCaptchaError("CAPTCHA code does not match");
      return false;
    }
    setCaptchaError("");
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, [name]: checked }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCaptchaChange = (e) => {
    setUserCaptchaInput(e.target.value);
    if (captchaError) {
      setCaptchaError("");
    }
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

  const validateForm = () => {
    const newErrors = {};

    // Check all required fields
    Object.entries(requiredFields).forEach(([key, label]) => {
      if (!form[key]?.toString().trim()) {
        newErrors[key] = `${label} is required`;
      }
    });

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format invalid";
    }

    // CAPTCHA validation
    if (!validateCaptcha()) {
      newErrors.captcha = "CAPTCHA validation failed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validateForm()) {
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
      fd.append("agreeTerms", form.agreeTerms);
      fd.append("agreePrivacy", form.agreePrivacy);
      fd.append("subscribe", form.subscribe);

      // Append CAPTCHA verification
      fd.append("captchaCode", captchaCode);
      fd.append("userCaptchaInput", userCaptchaInput);

      if (selectedFile) {
        // Append file using the key 'file' as server expects
        fd.append("file", selectedFile, selectedFile.name);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      setStatus({
        type: "success",
        message: data.message || "Inquiry submitted successfully!",
      });

      // Reset form
      setForm({
        full_name: "",
        email: "",
        phone: "",
        subject: "Subject",
        service: "Subject",
        company_name: "",
        message: "",
        source: "How did you hear about us?",
        agreeTerms: false,
        agreePrivacy: false,
        subscribe: false,
      });
      setSelectedFile(null);
      setSelectedFileName("");
      setUserCaptchaInput("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      generateCaptcha(); // Generate new CAPTCHA after successful submission
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong",
      });
      console.error(err);
      // Regenerate CAPTCHA on error
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to render label with red asterisk for required fields
  const renderLabel = (fieldName, label) => {
    const isRequired = fieldName in requiredFields;
    return (
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm text-gray-300">{label}</span>
        {isRequired && <span className="text-xs text-rose-400">*</span>}
      </div>
    );
  };

  return (
    <section className="w-full bg-transparent text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">
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
            {/* Full Name */}
            <div>
              {renderLabel("full_name", "Full Name")}
              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              {errors.full_name && (
                <p className="text-xs text-rose-400 mt-1">{errors.full_name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              {renderLabel("email", "Email Address")}
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="your@email.com"
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone (Optional) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-300">Mobile Number</span>
              </div>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                placeholder="+1 (555) 123-4567"
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Service select */}
            <div>
              {renderLabel("service", "Service/Subject")}
              <select
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
                  Select a service
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
              </select>
              {errors.service && (
                <p className="text-xs text-rose-400 mt-1">{errors.service}</p>
              )}
            </div>

            {/* Source (Optional) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-300">
                  How did you hear about us?
                </span>
              </div>
              <select
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
                  Select an option
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
                <option value="Other" className="bg-[#111] text-white">
                  Other
                </option>
              </select>
            </div>

            {/* Company Name (Optional) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-300">Company Name</span>
              </div>
              <input
                name="company_name"
                value={form.company_name}
                onChange={handleChange}
                type="text"
                placeholder="Your company name"
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* File Input - Optional */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-300">
                  Attach File (Optional)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  name="file"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-600 bg-transparent hover:bg-gray-800 transition"
                >
                  <Upload className="w-5 h-5" />
                  <span className="text-sm">Choose file</span>
                </button>
                <div className="text-sm text-gray-300 truncate">
                  {selectedFileName || "No file selected"}
                </div>
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-300">Message</span>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full p-4 rounded-xl bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
              />
            </div>

            {/* CAPTCHA Section */}
            <motion.div
              className="space-y-4 p-4 border border-gray-600 rounded-xl bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-300">
                  Security Verification
                </span>
                <span className="text-xs text-rose-400">*</span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Please enter the characters you see in the image below to verify
                you're human.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <canvas
                      ref={canvasRef}
                      width={180}
                      height={50}
                      className="border border-gray-600 rounded-lg bg-[#1a1a1a]"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      ↻ Refresh
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Can't read the text? Click refresh for a new code.
                  </p>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-300">
                      Enter CAPTCHA Code
                    </span>
                    <span className="text-xs text-rose-400">*</span>
                  </div>
                  <input
                    type="text"
                    value={userCaptchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Type the code shown above"
                    className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-white"
                    maxLength={6}
                  />
                  {(captchaError || errors.captcha) && (
                    <p className="text-xs text-rose-400 mt-1">
                      {captchaError || errors.captcha}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Terms and Conditions Checkboxes */}
            <motion.div
              className="space-y-4 p-4 border border-gray-600 rounded-xl bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="space-y-4">
                {/* Terms and Conditions */}
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onChange={handleChange}
                    className="w-5 h-5 accent-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-300">
                    I understand and agree to the{" "}
                    <Link
                      href="/terms-services"
                      className="text-emerald-400 hover:underline"
                    >
                      terms and conditions
                    </Link>
                    <span className="text-rose-400 ml-1">*</span>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-xs text-rose-400 ml-8">
                    {errors.agreeTerms}
                  </p>
                )}

                {/* Privacy Policy */}
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={form.agreePrivacy}
                    onChange={handleChange}
                    className="w-5 h-5 accent-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-300">
                    I have read and agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-emerald-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-rose-400 ml-1">*</span>
                  </span>
                </label>
                {errors.agreePrivacy && (
                  <p className="text-xs text-rose-400 ml-8">
                    {errors.agreePrivacy}
                  </p>
                )}

                {/* Newsletter Subscription */}
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={form.subscribe}
                    onChange={handleChange}
                    className="w-5 h-5 accent-emerald-500"
                  />
                  <span className="text-sm text-gray-300">
                    Subscribing to newsletter 
                  </span>
                </label>
              </div>
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
            {/* Submit Button */}
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition disabled:opacity-60 w-full justify-center"
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
