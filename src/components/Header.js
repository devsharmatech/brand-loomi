"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent py-6 px-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/home" className="flex items-center">
            <img
              src="./logo.png"
              alt="Brandloomi"
              className=" h-12 mr-3"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          </Link>

          {/* Right side - All Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Navigation Menus */}
            <nav className="flex items-center space-x-8 mr-4">
              <Link
                href="/how-we-work"
                className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                Company
              </Link>
              <Link
                href="/pay-what-you-can"
                className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                Launchpad
              </Link>
              <Link
                href="/services"
                className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className="text-gray-100 hover:text-[#00BBDC] font-[200] transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                Blogs
              </Link>
            </nav>

            
            <Link
              href="/contact-us"
              className=" text-white  font-[200] hover:text-[#00a8c5] transition-all duration-200 flex items-center space-x-3 group"
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
          {/* Left side - Logo */}
          <Link href="/home" className="flex items-center">
            <img src="./logo.png" alt="Brandloomi" className="h-8 mr-2" />
          </Link>

          {/* Right side - Mobile Menu */}
          <div className="flex items-center space-x-3">
           
            <button className="bg-[#00BBDC] text-white p-3 rounded-full font-medium hover:bg-[#00a8c5] transition-colors flex items-center justify-center shadow-md">
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
            </button>

            {/* Mobile Menu Hamburger */}
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
            <Link
              href="#"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ cursor: "pointer" }}
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ cursor: "pointer" }}
            >
              Launchpad
            </Link>
            <Link
              href="/services"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ cursor: "pointer" }}
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className="text-gray-100 hover:text-[#00BBDC] font-[200] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ cursor: "pointer" }}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
