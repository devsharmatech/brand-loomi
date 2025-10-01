"use client";

import { MapPin } from "lucide-react";

export default function OurProcess() {
  const steps = [
    "Discovery & Requirements",
    "Solution Architecture", 
    "Agile Development",
    "Testing & QA",
    "Deployment & Support",
  ];

  return (
    <div className="bg-transparent relative text-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic mb-12 md:mb-20 flex items-center">
          OUR PROCESS
          <span className="ml-4 flex-1 border-t border-gray-600 relative">
            <span className="absolute -right-2 -top-3 text-xl">*</span>
          </span>
        </h2>

        <div className="flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center group hover:translate-x-2 transition-transform duration-300 ease-out
                ${index === 0 ? 'ml-0' : ''}
                ${index === 1 ? 'ml-0 sm:ml-8 md:ml-12 lg:ml-16' : ''}
                ${index === 2 ? 'ml-0 sm:ml-16 md:ml-24 lg:ml-32' : ''}
                ${index === 3 ? 'ml-0 sm:ml-24 md:ml-36 lg:ml-48' : ''}
                ${index === 4 ? 'ml-0 sm:ml-32 md:ml-48 lg:ml-64' : ''}
              `}
            >
              <div className="relative flex-shrink-0">
                <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              
              <div className="flex items-center ml-3 sm:ml-4 w-full min-w-0">
                <span className="text-cyan-400 mr-2 sm:mr-3 text-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">|</span>
                <span className="text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap group-hover:text-cyan-300 transition-colors duration-300">
                  {step}
                </span>
                <span className="flex-1 border-b border-gray-600 ml-3 sm:ml-4 group-hover:border-cyan-400 transition-colors duration-300"></span>
              </div>

              <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-gray-600 ml-4 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <span className="text-xs font-bold text-white group-hover:text-gray-900">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}