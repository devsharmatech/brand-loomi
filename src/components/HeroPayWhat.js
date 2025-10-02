"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function HeroPayWhat() {
  return (
    <section className="relative w-full min-h-[60vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50" />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 to-emerald-500/30 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto  text-left py-24 space-y-8">
        {/* Top Label */}
        <p className="uppercase tracking-widest text-sm text-gray-300">
          No Startup Left Behind
        </p>

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Introducing <br />
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Pay What You Can
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg sm:text-2xl md:text-3xl max-w-full leading-relaxed">
          We believe every great idea deserves a digital home – regardless of
          budget. Apply for our monthly draw and get a professional website or
          app built at a price you decide.
        </p>
        {/* Footer Small Text */}
        <p className="text-gray-400 text-xs md:text-sm max-w-full leading-relaxed">
          At Brandloom, we understand that many startups and small businesses
          struggle to afford quality digital services. That’s why we created the
          "Pay What You Can" program – a unique initiative designed to
          democratize access to professional websites, mobile apps, and digital
          marketing.
        </p>
      </div>
    </section>
  );
}
