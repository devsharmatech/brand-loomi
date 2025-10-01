"use client";

import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Web Developer (Remote/Ireland)",
    description: "Looking for a skilled web developer experienced in React, Next.js, and modern web technologies.",
    requirements: [
      "3+ years of experience",
      "Proficiency in React/Next.js",
      "Knowledge of APIs & Databases",
    ],
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description: "We need a digital marketing expert to run campaigns, manage SEO, and boost online presence.",
    requirements: [
      "2+ years in Digital Marketing",
      "SEO/SEM knowledge",
      "Experience with Google Ads & Analytics",
    ],
  },
  {
    id: 3,
    title: "Project Manager",
    description: "Seeking a project manager with experience in agile methodologies and client communication.",
    requirements: [
      "5+ years of PM experience",
      "Strong organizational skills",
      "Agile/Scrum experience",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    description: "Creative designer needed to craft intuitive and user-friendly interfaces.",
    requirements: [
      "Portfolio of UI/UX projects",
      "Figma/Sketch expertise",
      "Knowledge of design systems",
    ],
  },
];

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <section className="w-full relative py-16 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - unchanged as requested */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold italic">Job Listings</h2>
          <div className="flex-1 h-[1px] bg-gray-500 mx-3"></div>
          <span className="text-2xl">*</span>
        </div>

        {/* Job Grid with Equal Height Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="cursor-pointer group relative"
            >
              {/* Glassmorphism Card with Fixed Height */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden h-full min-h-[220px] flex flex-col">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Title with Controlled Line Height */}
                  <h3 className="text-md font-medium text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight line-clamp-2 mb-3 min-h-[2.5rem] flex items-start">
                    {job.title}
                  </h3>
                  
                  {/* Description with Consistent Height */}
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 flex-1 line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>
                  
                  {/* Animated CTA - Always at Bottom */}
                  <div className="mt-4 pt-3 border-t border-white/10 group-hover:border-emerald-500/30 transition-colors duration-300">
                    <div className="flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium">View Details</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal with Animations */}
        {selectedJob && (
          <div className={`fixed inset-0 flex justify-center items-center z-50 p-4 ${isModalClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
            {/* Backdrop with Blur */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <div className={`relative bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-lg transform ${isModalClosing ? 'animate-scaleOut' : 'animate-scaleIn'} shadow-2xl`}>
              
              {/* Enhanced Close Button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                onClick={handleCloseModal}
              >
                ✕
              </button>

              {/* Job Title with Gradient */}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {selectedJob.title}
              </h2>
              
              <p className="text-gray-300 mt-3 leading-relaxed">
                {selectedJob.description}
              </p>

              {/* Requirements with Icons */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  Requirements:
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 opacity-70"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Job Application Form */}
              <form className="mt-8 space-y-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  />
                  <textarea
                    placeholder="Why are you a good fit?"
                    rows="4"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 active:scale-95"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.9); opacity: 0; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-fadeOut { animation: fadeOut 0.3s ease-in; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .animate-scaleOut { animation: scaleOut 0.3s ease-in; }
      `}</style>
    </section>
  );
}