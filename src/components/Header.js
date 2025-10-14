"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header({ logo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

  return (
    <header className="bg-transparent py-6 px-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/home" className="flex items-center">
            <img
              src={logo || "./logo.png"}
              alt="Brandloomi"
              className="h-12 mr-3"
            />
          </Link>

          {/* Navigation Menus */}
          <div className="flex items-center justify-end space-x-8 mr-4">
            {/* Company Dropdown */}
            <div className="relative group">
              <span className="text-gray-100 hover:text-[#00BBDC] font-[200] cursor-pointer transition-colors duration-200">
                Company
              </span>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-transparent text-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-white hover:bg-[#00BBDC] hover:text-white transition border-b border-white last:border-b-0"
                >
                  About Us
                </Link>
                <Link
                  href="/industries"
                  className="block px-4 py-2 text-white hover:bg-[#00BBDC] hover:text-white transition border-b border-white last:border-b-0"
                >
                  Industries
                </Link>
                <Link
                  href="/how-we-work"
                  className="block px-4 py-2 text-white hover:bg-[#00BBDC] hover:text-white transition"
                >
                  How We Work
                </Link>
              </div>
            </div>

            <Link
              href="/pay-what-you-can"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
            >
              PWYC
            </Link>
            <Link
              href="/services"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
            >
              Services
            </Link>
            
            <Link
              href="/contact-us"
              className="text-white font-[200] hover:text-[#00a8c5] transition-all duration-200 flex items-center space-x-3 group"
            >
              <span>Let&apos;s Connect</span>
              <div className="w-8 h-8 bg-[#00BBDC] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-200">
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:text-[#00BBDC] transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/home" className="flex items-center">
            <img
              src={logo || "./logo.png"}
              alt="Brandloomi"
              className="h-8 mr-2"
            />
          </Link>

          <div className="flex items-center space-x-3">
            <Link
              href="/contact-us"
              className="bg-[#00BBDC] text-white p-3 rounded-full font-medium hover:bg-[#00a8c5] transition-colors flex items-center justify-center shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-100 hover:text-[#00BBDC] hover:bg-gray-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`md:hidden mt-4 py-4 border-t border-gray-200 transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {/* Company Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                className="w-full text-left text-gray-100 font-[200] py-2 flex justify-between items-center hover:text-[#00BBDC] transition-colors"
              >
                Company
                <span>{isMobileCompanyOpen ? "-" : "+"}</span>
              </button>
              {isMobileCompanyOpen && (
                <div className="flex flex-col ml-4 mt-2 space-y-2">
                  <Link
                    href="/about-us"
                    className="text-gray-200 hover:text-[#00BBDC]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/industries"
                    className="text-gray-200 hover:text-[#00BBDC]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Industries
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="text-gray-200 hover:text-[#00BBDC]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How We Work
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pay-what-you-can"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Launchpad
            </Link>
            <Link
              href="/services"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
