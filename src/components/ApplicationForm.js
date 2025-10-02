"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: "",
    portfolio: "",
    coverLetter: "",
    skills: "",
    referral: "",
    eligible: "",
    consent: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const values = [
    "People First, Always: We believe great work happens when our team feels heard, valued, and supported.",
    "Kindness Over Everything: We are all about good vibes, mutual respect, and lifting each other up.",
    "Excellence in Execution: We strive for quality in everything we do, delivering beyond expectations.",
    "Innovation & Creativity: We embrace new ideas and encourage thinking outside the box.",
    "Collaboration & Teamwork: We achieve more together by supporting and learning from each other.",
    "Growth Mindset: We are committed to continuous learning and personal development."
  ];

  return (
    <div className="min-h-screen bg-transparent text-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto border-t border-gray-700 pt-8 sm:pt-12">
        
        {/* LEFT SIDE - VALUES */}
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="italic font-semibold text-lg sm:text-xl text-gray-300 tracking-wide">
              ONE STEP AWAY
            </h2>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              WHAT WE CARE ABOUT
            </h3>
          </div>

          {/* Values List */}
          <ul className="space-y-4 sm:space-y-6">
            {values.map((value, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                {/* Animated Bullet */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-emerald-500 group-hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Value Text */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {value.split(":")[0] && (
                      <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {value.split(":")[0]}:
                      </span>
                    )}
                    {value.split(":")[1] && ` ${value.split(":")[1]}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          {/* Form Header */}
          <div className="mb-2">
            <h3 className="font-semibold text-lg sm:text-xl text-gray-300 mb-1">
              Join Our Team
            </h3>
            <p className="text-sm text-gray-400">
              Fill in your details and lets build something amazing together
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid gap-4 sm:gap-6">
            {/* Personal Information */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
            />

            {/* URL Fields */}
            <div className="space-y-4 sm:space-y-6">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile link"
                value={form.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
              />
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="url"
                  name="resume"
                  placeholder="Resume URL"
                  value={form.resume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
                />
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio URL"
                  value={form.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
                />
              </div>
              
              <input
                type="url"
                name="coverLetter"
                placeholder="Cover Letter URL"
                value={form.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:scale-105"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <select
                name="skills"
                value={form.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-gray-300 focus:outline-none focus:scale-105 appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800">Skills Experience</option>
                <option value="junior" className="bg-gray-800">Junior (0-2 yrs)</option>
                <option value="mid" className="bg-gray-800">Mid-Level (2-5 yrs)</option>
                <option value="senior" className="bg-gray-800">Senior (5+ yrs)</option>
              </select>

              <select
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-gray-300 focus:outline-none focus:scale-105 appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800">Referral Source</option>
                <option value="linkedin" className="bg-gray-800">LinkedIn</option>
                <option value="website" className="bg-gray-800">Company Website</option>
                <option value="employee" className="bg-gray-800">Employee Referral</option>
              </select>
            </div>

            <select
              name="eligible"
              value={form.eligible}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-gray-300 focus:outline-none focus:scale-105 appearance-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Eligible to Work in Ireland?</option>
              <option value="yes" className="bg-gray-800">Yes</option>
              <option value="no" className="bg-gray-800">No</option>
            </select>

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 group-hover:border-emerald-400"
                />
                <span>
                  I consent to the processing of my personal data for recruitment purposes.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 group-hover:border-emerald-400"
                />
                <span>
                  *I have read and agree to the{" "}
                  <a href="#" className="underline text-emerald-400 hover:text-emerald-300 transition-colors">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 active:scale-95 group w-full sm:w-auto"
            >
              <span>APPLY NOW</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}