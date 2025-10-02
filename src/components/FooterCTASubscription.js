"use client";

import { ArrowUpRight } from "lucide-react";

export default function FooterCTASubscription({ footerHeading, footer_btntext }) {
  return (
    <section className="relative w-full py-8 px-2 sm:px-4 md:px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        {/* Card */}
        <div className="relative rounded-[1rem] bg-gradient-to-r from-[#043d63] via-transparent to-[#06456f] p-4 sm:p-8 md:p-12 text-center shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          {/* Logo / Brand */}
          <div className="flex items-center justify-center mb-6">
            <img src="./logo.png" alt="Brandloomi Logo" className="h-10" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-snug italic" dangerouslySetInnerHTML={{ __html: footerHeading }} />

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-cyan-500 border border-white/10 hover:from-gray-700/80 hover:to-gray-800/80 transition-all"
            >
              <span className="text-sm font-medium">{footer_btntext}</span>
              <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
