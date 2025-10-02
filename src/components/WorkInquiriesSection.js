"use client";

import { Check, ArrowRight } from "lucide-react";

export default function WorkInquiriesSection() {
  const steps = [
    "Submit your story and a short video.",
    "We select one winner each month.",
    "We build your landing page. You pay what you can.",
    "Share your testimonial and success story.",
  ];

  return (
    <section className="bg-transparent text-white py-16 pt-8 px-4 md:px-2 relative overflow-hidden max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-10">
        {/* Left Section */}
        <div className="pr-6 border-r border-neutral-800">
          {/* Heading */}
          <div className="flex items-center mb-6">
            <h2 className="text-lg md:text-xl font-semibold italic">
              Start Now: Pay What You Can!
            </h2>
            <div className="flex-1 ml-4 border-b border-neutral-700"></div>
          </div>

          <p className="text-neutral-300 mb-6">
            Every month, we select a deserving startup to receive a professional
            landing page—regardless of their budget.
          </p>

          {/* How it Works */}
          <h3 className="text-base font-semibold italic mb-4">
            How It Works
          </h3>

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
          {/* Heading */}
          <div className="flex items-center mb-6">
            <h2 className="text-lg md:text-xl font-semibold italic">
              Work Inquiries
            </h2>
            <div className="flex-1 ml-4 border-b border-neutral-700"></div>
            <span className="ml-3 text-lg">*</span>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="text"
              placeholder="Referral ID"
              className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition"
            >
              SUBMIT <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
