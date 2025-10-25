"use client";
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  // Check if user already gave consent
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle consent choices
  const handleConsent = (type) => {
    localStorage.setItem("cookieConsent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 animate-in slide-in-from-bottom duration-500 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto p-6">
        <div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can choose to accept all cookies, 
              reject all, or accept only necessary cookies for basic functionality.
            </p>
          </div>
          <div className="flex mt-4 flex-col sm:flex-row gap-3 w-full lg:w-auto">
            

            <button
              onClick={() => handleConsent("necessary")}
              className="px-6 py-3 bg-gray-800 border border-gray-600 text-gray-200 rounded-lg 
                         hover:bg-gray-700 hover:border-gray-500 hover:text-white active:bg-gray-600 
                         transition-all duration-200 shadow-sm hover:shadow-md 
                         font-medium text-sm whitespace-nowrap"
            >
              AcceptNecessary Only
            </button>

            <button
              onClick={() => handleConsent("all")}
              className="px-6 py-3 bg-white text-gray-900 rounded-lg 
                         hover:bg-gray-100 active:bg-gray-200 
                         transition-all duration-200 shadow-sm hover:shadow-md 
                         font-medium text-sm whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;