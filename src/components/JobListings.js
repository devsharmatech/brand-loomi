"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  X,
  Search,
  DollarSign,
  Award,
} from "lucide-react";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs/open");
        const data = await res.json();
        if (res.ok) {
          const parsedJobs = data.map((job) => ({
            ...job,
            requirements: Array.isArray(job.requirements)
              ? job.requirements
              : [],
            responsibilities: Array.isArray(job.responsibilities)
              ? job.responsibilities
              : [],
            benefits: Array.isArray(job.benefits) ? job.benefits : [],
          }));
          setJobs(parsedJobs);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[70vh] bg-transparent text-white px-4 sm:px-6 py-8 sm:py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-start items-center gap-3 mb-8 sm:mb-12 max-w-4xl ">
          <div className="relative w-full sm:max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Seek and you shall find"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
            <span className="text-sm sm:text-base">Discover</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="group cursor-pointer rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs uppercase font-medium border border-emerald-500/30">
                  {job.employment_type || "Full Time"}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">Brandloomi</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {job.short_description || job.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 capitalize text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{job.experience_level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-300">
                  <DollarSign className="w-4 h-4" />
                  <span>
                    {job.salary_min && job.salary_max
                      ? `${job.currency} ${job.salary_min} - ${job.salary_max}`
                      : "Not Specified"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-emerald-500/30 transition-colors duration-300">
              <span className="text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        className="relative z-[10002]"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <Dialog.Panel className="w-full max-w-2xl rounded-2xl bg-gray-900 border border-white/10 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-white/10 bg-gray-800/50">
              <div className="flex-1 min-w-0 pr-4">
                <Dialog.Title className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent truncate">
                  {selectedJob?.title}
                </Dialog.Title>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> Brandloomi
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {selectedJob?.location}
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    <DollarSign className="w-4 h-4" />{" "}
                    {selectedJob?.salary_min && selectedJob?.salary_max
                      ? `${selectedJob.currency} ${selectedJob.salary_min} - ${selectedJob.salary_max}`
                      : "Not Specified"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Single Column with Scroll */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
              {/* Job Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-sm text-gray-400">Employment Type</div>
                  <div className="text-emerald-400 font-semibold capitalize mt-1">
                    {selectedJob?.employment_type}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-sm text-gray-400">Experience Level</div>
                  <div className="text-amber-400 font-semibold capitalize mt-1">
                    {selectedJob?.experience_level}
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  Job Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
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
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob?.requirements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits & Perks */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  Benefits & Perks
                </h3>
                <ul className="space-y-2">
                  {selectedJob?.benefits.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(74, 222, 128, 0.3) rgba(30, 41, 59, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  );
}
