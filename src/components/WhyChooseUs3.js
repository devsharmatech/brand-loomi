"use client";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Industry-specific design expertise",
    "Scalable, future-ready solutions",
    "Strong focus on security, accessibility & user experience",
    "Dedicated support and collaboration",
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto bg-transparent text-white">
      {/* Section Heading */}
      <div className="flex items-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold italic">
          Why Choose Us Across Industries?
        </h2>
        <div className="flex-1 ml-4 border-b border-neutral-700"></div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Green Circle with Check */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400 text-black">
              <Check className="w-5 h-5" strokeWidth={2.5} />
            </span>
            {/* Text */}
            <p className="text-sm md:text-base mb-0 mt-1 text-neutral-200">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
