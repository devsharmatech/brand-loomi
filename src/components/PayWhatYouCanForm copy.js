"use client";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PayWhatYouCanForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessLocation: "",
    contactName: "",
    websiteURL: "",
    phone: "",
    email: "",
    industry: "",
    businessType: "",
    businessDescription: "",
    marketingChallenges: "",
    uniqueSelling: "",
    targetAudience: "",
    foundedDate: "",
    employeeCount: "",
    websiteGoal: "",
    admiredWebsites: "",
    brandingAssets: "",
    yearsInBusiness: "",
    annualRevenue: "",
    hearAbout: "",
    agreePayModel: false,
    agreePrivacy: false,
    subscribe: true,
  });

  const [videoFile, setVideoFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((p) => ({ ...p, [name]: checked }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      // Validate file size (200MB max)
      if (f.size > 200 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          videoFile: "Video must be less than 200MB",
        }));
        return;
      }
      setVideoFile(f);
      setErrors((prev) => ({ ...prev, videoFile: "" }));
    }
  };

  const validate = () => {
    const err = {};
    if (!formData.businessName.trim())
      err.businessName = "Business name required";
    if (!formData.contactName.trim()) err.contactName = "Contact name required";
    if (!formData.email.trim()) {
      err.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Email format invalid";
    }
    if (!formData.businessDescription.trim())
      err.businessDescription = "Brief description required";
    if (!videoFile)
      err.videoFile = "Please upload a 2-minute video (essential)";
    if (!formData.agreePayModel)
      err.agreePayModel = "Must agree to Pay What You Can terms";
    if (!formData.agreePrivacy)
      err.agreePrivacy = "Must agree to Privacy Policy";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append video file
      if (videoFile) {
        formDataToSend.append("video", videoFile);
      }

      const response = await fetch("/api/paywhatyoucan", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);

      // Reset form
      setFormData({
        businessName: "",
        businessLocation: "",
        contactName: "",
        websiteURL: "",
        phone: "",
        email: "",
        industry: "",
        businessType: "",
        businessDescription: "",
        marketingChallenges: "",
        uniqueSelling: "",
        targetAudience: "",
        foundedDate: "",
        employeeCount: "",
        websiteGoal: "",
        admiredWebsites: "",
        brandingAssets: "",
        yearsInBusiness: "",
        annualRevenue: "",
        hearAbout: "",
        agreePayModel: false,
        agreePrivacy: false,
        subscribe: false,
      });
      setVideoFile(null);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error.message || "Failed to submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-neutral-700 placeholder-neutral-400 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200";

  // Special class for select elements with dark dropdown styling
  const selectClass = `
    ${inputClass}
    [&>option]:bg-[#1a1a1a]
    [&>option]:text-white
    [&>option]:hover:bg-cyan-600
    [&>option]:hover:text-white
    appearance-none
    bg-[#1a1a1a]
    cursor-pointer
  `;

  return (
    <>
      <Head>
        <title>Application Form — Pay What You Can</title>
        <style jsx global>{`
          select option {
            background: #1a1a1a !important;
            color: white !important;
            padding: 12px !important;
          }
          select option:hover {
            background: #0891b2 !important;
          }
          select:focus option:checked {
            background: #0891b2 !important;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-transparent text-white px-6 py-12 flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl space-y-10"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="space-y-3"
          >
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
              We believe every great idea deserves a digital home — regardless
              of budget.
            </h1>
            <p className="text-neutral-400 text-xl">
              Fill out this form. This is our &quot;Pay What You Can&quot;
              initiative — we evaluate applications based on story, vision and
              fit. Please provide as much detail as possible so we can make a
              thoughtful decision.
            </p>
          </motion.div>

          {/* Contact & Business Information */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              Contact & Business Information
            </h2>
            <p className="text-sm text-neutral-400">
              Help us get in touch — provide your official business details and
              contact info. We&apos;ll only use this to contact you about the
              application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  className={inputClass}
                />
                {errors.businessName && (
                  <p className="text-xs text-rose-400 mt-1">
                    {errors.businessName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="businessLocation"
                  value={formData.businessLocation}
                  onChange={handleChange}
                  placeholder="Business Location (city, country)"
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="First & Last name"
                  className={inputClass}
                />
                {errors.contactName && (
                  <p className="text-xs text-rose-400 mt-1">
                    {errors.contactName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="websiteURL"
                  value={formData.websiteURL}
                  onChange={handleChange}
                  placeholder="Website URL (if any)"
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact phone"
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business / contact email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Industry (e.g., e-commerce / SaaS / Education)"
                  className={inputClass}
                />
              </div>

              <div>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" className="text-neutral-400">
                    Business Type (select)
                  </option>
                  <option>Startup</option>
                  <option>Small Business</option>
                  <option>Nonprofit</option>
                  <option>Independent Creator</option>
                </select>
              </div>
            </div>
          </motion.section>

          {/* About Your Business/Startup */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              About Your Business / Startup
            </h2>
            <p className="text-sm text-neutral-400">
              Tell us what you build, who you build it for, traction so far, and
              how a website would accelerate growth. Be honest — we want the
              full picture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <textarea
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  placeholder="Short description: what you do, the problem you solve, current status (MVP, launched, revenue etc.)"
                  className={inputClass + " h-28 resize-none"}
                />
                {errors.businessDescription && (
                  <p className="text-xs text-rose-400 mt-1">
                    {errors.businessDescription}
                  </p>
                )}
              </div>

              <div className="md:col-span-1">
                <textarea
                  name="marketingChallenges"
                  value={formData.marketingChallenges}
                  onChange={handleChange}
                  placeholder="Marketing / growth challenges you face"
                  className={inputClass + " h-28 resize-none"}
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="uniqueSelling"
                  value={formData.uniqueSelling}
                  onChange={handleChange}
                  placeholder="What purpose / value do you serve?"
                  className={inputClass + " h-28 resize-none"}
                />
              </div>

              <div className="md:col-span-2">
                <input
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="Target audience (who are your customers?)"
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-1">
                <input
                  name="foundedDate"
                  value={formData.foundedDate}
                  onChange={handleChange}
                  placeholder="Founded (year)"
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-1">
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" className="text-neutral-400">
                    Employee count
                  </option>
                  <option>1 (solo)</option>
                  <option>2-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                </select>
              </div>
            </div>
          </motion.section>

          {/* Your Vision for a Website */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              Your Vision for a Website
            </h2>
            <p className="text-sm text-neutral-400">
              You don&apos;t need to be technical — tell us what success looks
              like (lead generation, sales, portfolio, booking, etc.), pages you
              need, and any must-have features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="websiteGoal"
                  value={formData.websiteGoal}
                  onChange={handleChange}
                  placeholder="Website Goals"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  name="admiredWebsites"
                  value={formData.admiredWebsites}
                  onChange={handleChange}
                  placeholder="Admired Websites"
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <input
                  name="brandingAssets"
                  value={formData.brandingAssets}
                  onChange={handleChange}
                  placeholder="Do You Have Branding Assets?"
                  className={inputClass}
                />
              </div>
            </div>
          </motion.section>

          {/* Video Submission */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              The 2-Minute Video Submission (Essential!)
            </h2>
            <p className="text-sm text-neutral-400">
              Upload a short 1–2 minute video introducing you and your business.
              Tell us the problem, solution and why now. (We recommend MP4, max
              ~200MB).
            </p>

            <div className="items-center gap-4">
              <input
                accept="video/*"
                onChange={handleFile}
                type="file"
                className="bg-[#070707] border w-full border-neutral-700 rounded-lg px-3 py-2 text-neutral-300"
              />
              <br />
              <div className="text-sm mt-2 text-neutral-400">
                {videoFile ? (
                  <div>
                    <div className="font-medium text-white">
                      {videoFile.name}
                    </div>
                    <div className="text-xs">
                      {Math.round(videoFile.size / 1024 / 1024)} MB
                    </div>
                  </div>
                ) : (
                  "No video selected"
                )}
              </div>
            </div>
            {errors.videoFile && (
              <p className="text-xs text-rose-400 mt-1">{errors.videoFile}</p>
            )}
          </motion.section>

          {/* How You Heard */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              How You Did You Hear About Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option value="" className="text-neutral-400">
                    Where Did You Hear About Us?
                  </option>
                  <option>Social media</option>
                  <option>Search engine</option>
                  <option>Friend / referral</option>
                  <option>Podcast / article</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <select
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option value="" className="text-neutral-400">
                    Years In Business?
                  </option>
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <select
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  className={selectClass}
                  onChange={handleChange}
                >
                  <option value="" className="text-neutral-400">
                    Annual Revenue?
                  </option>
                  <option>Less than $10,000</option>
                  <option>$10,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $500,000</option>
                  <option>$500,000+</option>
                </select>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="space-y-6 max-w-full mx-auto"
          >
            {/* Title */}
            <h2 className="text-2xl font-bold">
              &quot;Pay What You Can&quot; Agreement & Terms
            </h2>

            {/* Model Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Understanding the &quot;Pay What You Can&quot; Model:
              </h3>
              <p className="text-sm text-neutral-300">
                &quot;As part of our commitment to supporting small businesses,
                if you are selected as our monthly winner, we will design and
                develop a professional website tailored to your needs. In
                return, we ask you to contribute what you genuinely can afford.
                This is a voluntary contribution, and your ability to pay will
                not influence your selection.&quot;
              </p>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="agreePayModel"
                  checked={formData.agreePayModel}
                  className="w-5 h-5 accent-cyan-500"
                  onChange={handleChange}
                />
                <span className="text-sm">
                  I understand and agree to the &quot;Pay What You Can&quot;
                  <Link href="/pwyc-scheme-terms-and-conditions" className="text-cyan-400 mx-2">terms and conditions</Link>
                </span>
              </label>
              {errors.agreePayModel && (
                <p className="text-xs text-rose-400">{errors.agreePayModel}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Terms and Conditions:</h3>
              <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                <li>
                  &quot;By submitting this application, you agree to
                  <Link href="/pwyc-scheme-terms-and-conditions" className="text-cyan-400 mx-2">our full terms and conditions</Link>
                  .&quot;
                </li>
                <li>
                  &quot;You acknowledge that only one winner will be selected
                  each month. We reserve the right to verify all information
                  provided.&quot;
                </li>
                <li>
                  &quot;Winners will be notified via email and phone. If a
                  winner cannot be reached or does not respond within 5 working
                  days, another winner may be selected.&quot;
                </li>
              </ul>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={formData.agreePrivacy}
                  className="w-5 h-5 accent-cyan-500"
                  onChange={handleChange}
                />
                <span className="text-sm">
                  &quot;I have read and agree to the <Link href="/privacy-policy" className="text-cyan-400 mx-1">Privacy Policy</Link>.&quot;
                </span>
              </label>
              {errors.agreePrivacy && (
                <p className="text-xs text-rose-400">{errors.agreePrivacy}</p>
              )}

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  className="w-5 h-5 accent-cyan-500"
                  onChange={handleChange}
                />
                <span className="text-sm">Subscribe to newsletter</span>
              </label>
            </div>

            {/* Submit Button & Status */}
            <div className="flex items-center justify-between gap-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 font-semibold rounded-lg shadow-sm transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white text-black hover:opacity-95"
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "APPLY NOW"}
              </motion.button>

              <div className="text-sm text-neutral-400">
                {submitSuccess && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-emerald-400"
                  >
                    Application submitted successfully!
                  </motion.span>
                )}
                {submitError && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-rose-400"
                  >
                    {submitError}
                  </motion.span>
                )}
              </div>
            </div>
          </motion.section>
        </motion.form>
      </div>
    </>
  );
}
