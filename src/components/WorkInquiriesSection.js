"use client";

import { useState, useRef } from "react";
import { Check, ArrowRight, Upload } from "lucide-react";

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
    subject: "",
    service: "Subject",
    company_name: "",
    message: "",
    source: "How did you hear about us?",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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

    if (!form.full_name.trim() || !form.email.trim()) {
      setStatus({ type: "error", message: "Name and email are required." });
      return;
    }

    setIsSubmitting(true);

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => fd.append(key, value || ""));
      if (selectedFile) fd.append("file", selectedFile, selectedFile.name);

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || data.message || "Submission failed");

      setStatus({ type: "success", message: data.message || "Inquiry submitted successfully!" });

      setForm({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        service: "Subject",
        company_name: "",
        message: "",
        source: "How did you hear about us?",
      });
      setSelectedFile(null);
      setSelectedFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong" });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
            <input
              type="text"
              name="full_name"
              placeholder="Enter Your Full Name"
              value={form.full_name}
              onChange={handleChange}
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />

            {/* File input */}
            <div className="relative">
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
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : <>SUBMIT <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
