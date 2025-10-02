"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ArrowRight, MapPin, Clock, Building2, X, Search, DollarSign, Award } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Web Developer",
    type: "Full Time",
    location: "Ireland",
    company: "Brandloomi",
    description:
      "Responsible for planning and developing software solutions and web applications, maintaining websites and digital products.",
    responsibilities: [
      "Develop, test, and deploy web applications",
      "Collaborate with designers and backend engineers",
      "Maintain company website and ensure performance",
      "Troubleshoot and debug applications",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in HTML, CSS, JavaScript, React/Next.js",
      "Experience with REST APIs",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Health insurance",
      "Flexible working hours",
      "Hybrid remote policy",
      "Annual training budget",
    ],
    salary: "€45,000 - €60,000 / year",
    experience: "2+ years of professional experience",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    type: "Full Time",
    location: "Remote",
    company: "Brandloomi",
    description:
      "Building scalable and responsive frontend components, integrating APIs, and ensuring accessibility across devices.",
    responsibilities: [
      "Implement UI components in React/Next.js",
      "Work closely with backend developers",
      "Ensure cross-browser and cross-device compatibility",
    ],
    requirements: [
      "Strong understanding of React.js and Next.js",
      "Experience with Tailwind CSS",
      "Knowledge of accessibility best practices",
    ],
    benefits: [
      "Remote-first culture",
      "Performance bonuses",
      "Paid parental leave",
    ],
    salary: "$70,000 - $85,000 / year",
    experience: "3+ years frontend experience",
  },
  {
    id: 3,
    title: "Backend Engineer",
    type: "Contract",
    location: "Ireland",
    company: "Brandloomi",
    description:
      "Designing and maintaining scalable backend systems, managing databases, and building APIs.",
    responsibilities: [
      "Build and optimize REST/GraphQL APIs",
      "Manage cloud infrastructure (AWS, GCP)",
      "Ensure application security and data protection",
    ],
    requirements: [
      "Strong Node.js and Express experience",
      "Knowledge of databases (PostgreSQL, MongoDB)",
      "Familiarity with Docker & Kubernetes",
    ],
    benefits: [
      "Competitive hourly rates",
      "Work with international teams",
      "Option to extend contract",
    ],
    salary: "$40 - $60 / hour",
    experience: "5+ years backend development",
  },
];

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[70vh] bg-transparent text-white px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4">
          Career Opportunities
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Join our innovative team and build the future with cutting-edge technology and creative solutions.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8 sm:mb-12 max-w-4xl mx-auto">
        <div className="relative w-full sm:max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Search</span>
        </button>
      </div>

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm">
          Showing {filteredJobs.length} of {jobs.length} positions
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="group cursor-pointer rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between h-full"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                  PRODUCT
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">{job.company}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {job.description}
              </p>

              {/* Quick Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-300">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-emerald-500/30 transition-colors duration-300">
              <span className="text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No jobs found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your search terms</p>
        </div>
      )}

      {/* Modal */}
      <Dialog
        open={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 p-6 sm:p-8 transform transition-all duration-300 scale-95 hover:scale-100">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <Dialog.Title className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {selectedJob?.title}
                </Dialog.Title>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-gray-300">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{selectedJob?.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{selectedJob?.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{selectedJob?.salary}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Job Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedJob?.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob?.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob?.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    Benefits & Perks
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob?.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Type</div>
                    <div className="text-emerald-400 font-semibold">{selectedJob?.type}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Experience</div>
                    <div className="text-amber-400 font-semibold text-sm">{selectedJob?.experience}</div>
                  </div>
                </div>
              </div>
            </div>

          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}