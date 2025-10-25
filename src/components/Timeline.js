"use client";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function Timeline() {
  const events = [
    { year: "2024", text: "Agency founded in Dublin." },
    { year: "2025", text: "First Client Onboarded" },
    { year: "2025", text: "“Pay What You Can” initiative introduced." },
    { year: "2025", text: "Startup consulting service line work in progress" },
  ];

  // Detect screen size (large = staircase layout)
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind lg breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-8 lg:px-12 flex flex-col items-start justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-extrabold italic tracking-tight mb-10 md:mb-16">
            TIMELINE
          </h2>

          {/* Decorative only on large screens */}
          {isLargeScreen && (
            <>
              <div className="absolute left-0 top-16 h-[2px] w-[90%] bg-gray-400/30"></div>
              <div className="absolute right-[5%] top-8 text-white text-2xl">*</div>
            </>
          )}
        </div>

        {/* Timeline Events */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-8 md:mt-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-gray-300"
              style={{
                marginLeft: isLargeScreen ? `${index * 3.5}rem` : "0rem",
              }}
            >
              <div className="p-2 border border-gray-500 rounded-full flex items-center justify-center">
                <MapPin size={18} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00AEEF] font-semibold">|</span>
                  <p className="text-lg sm:text-xl">{event.text}</p>
                </div>
                <p className="mt-1 text-sm italic font-semibold text-white">
                  {event.year}
                </p>
                <div className="h-[1px] w-40 bg-gray-500/40 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-cyan-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-cyan-700/20 rounded-full blur-3xl"></div>
    </section>
  );
}
