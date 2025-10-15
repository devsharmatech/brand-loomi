"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, Upload, FileText, X } from "lucide-react";

export default function ApplicationForm() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    portfolio: "",
    coverLetter: "",
    skills: "",
    referral: "",
    eligible: "",
    jobPost: "",
    consent: false,
    privacy: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [resumeName, setResumeName] = useState("");

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs/open");
        const data = await res.json();
        if (res.ok) {
          setJobs(data);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "file") {
      if (files && files[0]) {
        const file = files[0];
        // Validate file type (PDF only)
        if (file.type !== "application/pdf") {
          setMessage({ type: "error", text: "Please upload a PDF file only." });
          return;
        }
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          setMessage({ type: "error", text: "File size must be less than 5MB." });
          return;
        }
        setForm({
          ...form,
          [name]: file
        });
        setResumeName(file.name);
        setMessage({ type: "", text: "" });
      }
    } else {
      setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleRemoveResume = () => {
    setForm({
      ...form,
      resume: null
    });
    setResumeName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Validate required fields
    if (!form.jobPost) {
      setMessage({ type: "error", text: "Please select a job position." });
      setLoading(false);
      return;
    }

    if (!form.resume) {
      setMessage({ type: "error", text: "Please upload your resume/CV." });
      setLoading(false);
      return;
    }

    if (!form.consent || !form.privacy) {
      setMessage({ type: "error", text: "Please agree to the consent and privacy policy." });
      setLoading(false);
      return;
    }

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("linkedin", form.linkedin);
      formData.append("resume", form.resume);
      formData.append("portfolio", form.portfolio);
      formData.append("coverLetter", form.coverLetter);
      formData.append("skills", form.skills);
      formData.append("referral", form.referral);
      formData.append("eligible", form.eligible);
      formData.append("jobPost", form.jobPost);
      formData.append("consent", form.consent);
      formData.append("privacy", form.privacy);

      const res = await fetch("/api/application", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Application submitted successfully!" });
        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          resume: null,
          portfolio: "",
          coverLetter: "",
          skills: "",
          referral: "",
          eligible: "",
          jobPost: "",
          consent: false,
          privacy: false,
        });
        setResumeName("");
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }

    setLoading(false);
  };

  const renderSelect = (name, value, options) => (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        required={name === "jobPost"}
        className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 text-gray-300 focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer transition-all duration-300 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-gray-800 text-gray-300">
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="w-4 h-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  const values = [
    "People First, Always: We believe great work happens when our team feels heard, valued, and supported.",
    "Kindness Over Everything: We are all about good vibes, mutual respect, and lifting each other up.",
    "Excellence in Execution: We strive for quality in everything we do, delivering beyond expectations.",
    "Innovation & Creativity: We embrace new ideas and encourage thinking outside the box.",
    "Collaboration & Teamwork: We achieve more together by supporting and learning from each other.",
    "Growth Mindset: We are committed to continuous learning and personal development.",
  ];

  return (
    <div className="min-h-screen bg-transparent text-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto border-t border-gray-700 pt-8 sm:pt-12">

        {/* LEFT SIDE - VALUES */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h2 className="italic font-semibold text-lg sm:text-xl text-gray-300 tracking-wide">ONE STEP AWAY</h2>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              WHAT WE CARE ABOUT
            </h3>
          </div>
          <ul className="space-y-4 sm:space-y-6">
            {values.map((value, idx) => (
              <li key={idx} className="flex items-start gap-4 mb-5 md:mb-16 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-emerald-500 group-hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {value.split(":")[0] && <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">{value.split(":")[0]}:</span>}
                    {value.split(":")[1] && ` ${value.split(":")[1]}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="mb-2">
            <h3 className="font-semibold text-lg sm:text-xl text-gray-300 mb-1">Join Our Team</h3>
            <p className="text-sm text-gray-400">Fill in your details and let's build something amazing together</p>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {/* Job Post Selection */}
            {renderSelect("jobPost", form.jobPost, [
              { value: "", label: "Select Job Position *" },
              ...jobs.map(job => ({
                value: job.id,
                label: job.title
              }))
            ])}

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input 
                type="text" 
                name="name" 
                placeholder="Enter Your Full Name *" 
                value={form.name} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                value={form.email} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
              />
            </div>

            <input 
              type="text" 
              name="phone" 
              placeholder="Mobile Number *" 
              value={form.phone} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
            />

            <input 
              type="url" 
              name="linkedin" 
              placeholder="LinkedIn Profile link" 
              value={form.linkedin} 
              onChange={handleChange} 
              className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
            />

            {/* File Upload for Resume - FIXED VERSION */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Upload Resume/CV (PDF only, max 5MB) *
              </label>
              
              {resumeName ? (
                // File Selected State
                <div className="px-4 py-3 sm:py-4 rounded-xl border border-emerald-500/50 bg-emerald-500/10 backdrop-blur-sm flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <FileText className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">
                        {resumeName}
                      </span>
                      <span className="text-emerald-400/70 text-xs">PDF uploaded successfully</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveResume}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                // File Upload Area
                <label className="block cursor-pointer group">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,application/pdf"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                  <div className="px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300">
                        <Upload className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-gray-300 block group-hover:text-white transition-colors duration-300">
                          Choose PDF file
                        </span>
                        <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                          PDF, max 5MB
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-lg text-xs text-gray-300 group-hover:text-white group-hover:bg-emerald-500/20 transition-all duration-300">
                      Browse
                    </div>
                  </div>
                </label>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input 
                type="url" 
                name="portfolio" 
                placeholder="Portfolio URL" 
                value={form.portfolio} 
                onChange={handleChange} 
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
              />
              <input 
                type="url" 
                name="coverLetter" 
                placeholder="Cover Letter URL" 
                value={form.coverLetter} 
                onChange={handleChange} 
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-300 placeholder-gray-400 focus:outline-none transition-all duration-300" 
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {renderSelect("skills", form.skills, [
                { value: "", label: "Skills Experience" },
                { value: "junior", label: "Junior (0-2 yrs)" },
                { value: "mid", label: "Mid-Level (2-5 yrs)" },
                { value: "senior", label: "Senior (5+ yrs)" },
              ])}

              {renderSelect("referral", form.referral, [
                { value: "", label: "Referral Source" },
                { value: "linkedin", label: "LinkedIn" },
                { value: "website", label: "Company Website" },
                { value: "employee", label: "Employee Referral" },
              ])}
            </div>

            {renderSelect("eligible", form.eligible, [
              { value: "", label: "Eligible to Work in Ireland?" },
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="consent" 
                  checked={form.consent} 
                  onChange={handleChange} 
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 group-hover:border-emerald-400" 
                />
                <span>I consent to the processing of my personal data for recruitment purposes. *</span>
              </label>
              <label className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="privacy" 
                  checked={form.privacy} 
                  onChange={handleChange} 
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 group-hover:border-emerald-400" 
                />
                <span>*I have read and agree to the{" "}
                  <a href="#" className="underline text-emerald-400 hover:text-emerald-300 transition-colors">Privacy Policy</a>.
                </span>
              </label>
            </div>

            {/* Messages */}
            {message.text && (
              <div className={`px-4 py-3 rounded-lg ${message.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
                {message.text}
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading} 
              className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 active:scale-95 group w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{loading ? "Submitting..." : "APPLY NOW"}</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}