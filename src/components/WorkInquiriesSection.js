"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function WorkInquiriesSection() {
  const steps = [
    "Submit your story and a short video.",
    "We select one winner each month.",
    "We build your landing page. You pay what you can.",
    "Share your testimonial and success story.",
  ];

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "Landing Page", // Hidden with fixed value
    service: "Subject",
    company_name: "",
    source: "How did you hear about us?",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
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
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Generate random CAPTCHA code and draw on canvas
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(code);
    setUserCaptchaInput("");
    setCaptchaError("");

    // Draw CAPTCHA on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Text styling
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
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
      ctx.strokeStyle = '#374151';
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }
      
      // Add dots
      ctx.fillStyle = '#4b5563';
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
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
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
      Object.entries(form).forEach(([key, value]) => fd.append(key, value || ""));
      
      // Append CAPTCHA verification
      fd.append("captchaCode", captchaCode);
      fd.append("userCaptchaInput", userCaptchaInput);

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || data.message || "Submission failed");

      setStatus({ type: "success", message: data.message || "Application submitted successfully!" });

      // Reset form
      setForm({
        full_name: "",
        email: "",
        phone: "",
        subject: "Landing Page",
        service: "Subject",
        company_name: "",
        source: "How did you hear about us?",
      });
      setUserCaptchaInput("");
      generateCaptcha(); // Generate new CAPTCHA after successful submission
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong" });
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
        <span className="text-sm text-neutral-300">{label}</span>
        {isRequired && (
          <span className="text-xs text-rose-400">*</span>
        )}
      </div>
    );
  };

  return (
    <section className="bg-transparent text-white py-16 pt-8 px-4 md:px-2 relative overflow-hidden max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-10">
        {/* Left Section */}
        <div className="pr-6 border-r border-neutral-800">
          <div className="flex items-center mb-6">
            <h2 className="text-lg md:text-xl font-semibold italic">Start Now: Pay What You Can!</h2>
            <div className="flex-1 ml-4 border-b border-neutral-700"></div>
          </div>

          <p className="text-neutral-300 mb-6">
            Every month, we select a deserving startup to receive a professional landing page—regardless of their budget.
          </p>

          <h3 className="text-base font-semibold italic mb-4">How It Works</h3>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-400 text-black">
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <p className="text-neutral-200 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="pl-6">
          <div className="flex items-center mb-6">
            <h2 className="text-lg md:text-xl font-semibold italic">Work Inquiries</h2>
            <div className="flex-1 ml-4 border-b border-neutral-700"></div>
            <span className="ml-3 text-lg">*</span>
          </div>

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Hidden Subject Field */}
            <input
              type="hidden"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />

            {/* Full Name */}
            <div>
              {renderLabel("full_name", "Full Name")}
              <input
                type="text"
                name="full_name"
                placeholder="Enter Your Full Name"
                value={form.full_name}
                onChange={handleChange}
                className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
              />
              {errors.full_name && (
                <p className="text-xs text-rose-400 mt-1">{errors.full_name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              {renderLabel("email", "Email Address")}
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone (Optional) */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-neutral-300">Mobile Number</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
            {/* CAPTCHA Section */}
            <div className="space-y-3 p-4 border border-neutral-700 rounded-xl bg-transparent">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-neutral-300">Security Verification</span>
                <span className="text-xs text-rose-400">*</span>
              </div>
              <p className="text-xs text-neutral-400 mb-3">
                Please enter the characters you see in the image below to verify you're human.
              </p>

              <div className="grid grid-cols-1 gap-4 items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <canvas
                      ref={canvasRef}
                      width={180}
                      height={50}
                      className="border border-neutral-700 rounded-lg bg-[#1a1a1a]"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      ↻ Refresh
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Can't read the text? Click refresh for a new code.
                  </p>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-neutral-300">Enter CAPTCHA Code</span>
                    <span className="text-xs text-rose-400">*</span>
                  </div>
                  <input
                    type="text"
                    value={userCaptchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Type the code shown above"
                    className="w-full p-3 rounded-lg bg-transparent border border-neutral-700 focus:outline-none focus:border-emerald-400 transition text-white text-sm"
                    maxLength={6}
                  />
                  {(captchaError || errors.captcha) && (
                    <p className="text-xs text-rose-400 mt-1">
                      {captchaError || errors.captcha}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition disabled:opacity-60 w-full"
            >
              {isSubmitting ? "Submitting..." : <>SUBMIT <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}