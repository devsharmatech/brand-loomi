"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, X, Search, Filter, Loader2 } from "lucide-react";

export default function JobAdminPage() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingJobId, setDeletingJobId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    department: "",
    location: "",
    employment_type: "",
    experience_level: "",
    salary_min: "",
    salary_max: "",
    currency: "USD",
    short_description: "",
    description: "",
    status: "open",
    application_email: "",
    requirements: [],
    responsibilities: [],
    benefits: [],
  });

  const [arrayInputs, setArrayInputs] = useState({
    requirements: [""],
    responsibilities: [""],
    benefits: [""],
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };

    if (name === "title") {
      newForm.slug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    }

    setForm(newForm);
  };

  const handleArrayInputChange = (field, index, value) => {
    const newArrayInputs = { ...arrayInputs };
    newArrayInputs[field][index] = value;
    setArrayInputs(newArrayInputs);
  };

  const addArrayInput = (field) => {
    const newArrayInputs = { ...arrayInputs };
    newArrayInputs[field].push("");
    setArrayInputs(newArrayInputs);
  };

  const removeArrayInput = (field, index) => {
    const newArrayInputs = { ...arrayInputs };
    newArrayInputs[field].splice(index, 1);
    setArrayInputs(newArrayInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Convert array inputs to actual arrays for form submission
    const submissionForm = {
      ...form,
      requirements: arrayInputs.requirements.filter(
        (item) => item.trim() !== ""
      ),
      responsibilities: arrayInputs.responsibilities.filter(
        (item) => item.trim() !== ""
      ),
      benefits: arrayInputs.benefits.filter((item) => item.trim() !== ""),
    };

    const method = editingJob ? "PUT" : "POST";
    const url = editingJob ? `/api/jobs/${editingJob.id}` : "/api/jobs";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionForm),
      });

      if (res.ok) {
        setShowModal(false);
        fetchJobs();
        setEditingJob(null);
        resetArrayInputs();
      } else {
        alert("Failed to save job");
      }
    } catch (error) {
      alert("Failed to save job");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setForm(job);

    // Set array inputs for editing
    setArrayInputs({
      requirements:
        job.requirements && job.requirements.length > 0
          ? [...job.requirements, ""]
          : [""],
      responsibilities:
        job.responsibilities && job.responsibilities.length > 0
          ? [...job.responsibilities, ""]
          : [""],
      benefits:
        job.benefits && job.benefits.length > 0 ? [...job.benefits, ""] : [""],
    });

    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeletingJobId(id);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingJobId) return;
    
    setIsDeleting(true);
    try {
      await fetch(`/api/jobs/${deletingJobId}`, { method: "DELETE" });
      fetchJobs();
      setShowDeleteConfirm(false);
      setDeletingJobId(null);
    } catch (error) {
      alert("Failed to delete job");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
    setDeletingJobId(null);
  };

  const resetArrayInputs = () => {
    setArrayInputs({
      requirements: [""],
      responsibilities: [""],
      benefits: [""],
    });
  };

  const openModal = () => {
    setEditingJob(null);
    setForm({
      title: "",
      slug: "",
      department: "",
      location: "",
      employment_type: "",
      experience_level: "",
      salary_min: "",
      salary_max: "",
      currency: "USD",
      short_description: "",
      description: "",
      status: "open",
      application_email: "",
      requirements: [],
      responsibilities: [],
      benefits: [],
    });
    resetArrayInputs();
    setShowModal(true);
  };

  // Filter jobs based on search and status
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl lg:text-3xl font-bold text-white">
              Job Management
            </h1>
            <p className="text-gray-400 mt-2">
              Manage your job postings and applications
            </p>
          </div>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors border border-gray-600"
          >
            <Plus size={20} /> Add Job
          </button>
        </div>
        {/* Stats Bar */}
        <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-white">{jobs.length}</div>
            <div className="text-gray-400 text-sm">Total Jobs</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-green-400">
              {jobs.filter((j) => j.status === "open").length}
            </div>
            <div className="text-gray-400 text-sm">Open</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-red-400">
              {jobs.filter((j) => j.status === "closed").length}
            </div>
            <div className="text-gray-400 text-sm">Closed</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-emerald-400">
              {jobs.filter((j) => j.status === "draft").length}
            </div>
            <div className="text-gray-400 text-sm">Draft</div>
          </div>
        </div>
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search jobs by title, department, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2">
            <Filter className="text-gray-400" size={20} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="all" className="bg-gray-800">
                All Status
              </option>
              <option value="open" className="bg-gray-800">
                Open
              </option>
              <option value="closed" className="bg-gray-800">
                Closed
              </option>
              <option value="draft" className="bg-gray-800">
                Draft
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Table */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-300">
                  Title
                </th>
                <th className="p-4 text-left font-semibold text-gray-300 hidden md:table-cell">
                  Department
                </th>
                <th className="p-4 text-left font-semibold text-gray-300 hidden lg:table-cell">
                  Location
                </th>
                <th className="p-4 text-left font-semibold text-gray-300">
                  Status
                </th>
                <th className="p-4 text-left font-semibold text-gray-300 hidden sm:table-cell">
                  Salary
                </th>
                <th className="p-4 text-left font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.tr
                    key={job.id}
                    className="border-t border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-white">
                          {job.title}
                        </div>
                        <div className="text-sm text-gray-400 md:hidden">
                          {job.department || "-"}
                        </div>
                        <div className="text-sm text-gray-400 lg:hidden">
                          {job.location || "-"}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300 hidden md:table-cell">
                      {job.department || "-"}
                    </td>
                    <td className="p-4 text-gray-300 hidden lg:table-cell">
                      {job.location || "-"}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          job.status === "open"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : job.status === "closed"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300 hidden sm:table-cell">
                      {job.salary_min && job.salary_max ? (
                        <span className="text-green-400 font-medium">
                          {job.currency === "USD" ? "$" : "₹"}
                          {job.salary_min} -{" "}
                          {job.currency === "USD" ? "$" : "₹"}
                          {job.salary_max}
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(job)}
                          className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 transform hover:scale-105"
                          title="Edit job"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(job.id)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-200 transform hover:scale-105"
                          title="Delete job"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center">
                    <div className="text-gray-400 flex flex-col items-center gap-3">
                      <div className="text-6xl">📝</div>
                      <div className="text-lg">No jobs found</div>
                      <div className="text-sm text-gray-500">
                        {searchTerm || statusFilter !== "all"
                          ? "Try adjusting your search or filter"
                          : "Get started by creating your first job posting"}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create/Update Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[10002] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-700/50 p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button
                onClick={() => !isSubmitting && setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg p-2 transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingJob ? "Edit Job" : "Add New Job"}
                </h2>
                <p className="text-gray-400 mt-1">
                  {editingJob
                    ? "Update the job details below"
                    : "Fill in the details to create a new job posting"}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Inputs */}
                <Input
                  name="title"
                  label="Job Title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <Input name="slug" label="Slug" value={form.slug} disabled />
                <Select
                  name="department"
                  label="Department"
                  value={form.department}
                  onChange={handleChange}
                  options={[
                    { value: "engineering", label: "Engineering" },
                    { value: "marketing", label: "Marketing" },
                    { value: "sales", label: "Sales" },
                    { value: "hr", label: "Human Resources" },
                    { value: "design", label: "Design" },
                    { value: "other", label: "Other" },
                  ]}
                  disabled={isSubmitting}
                />

                <Input
                  name="location"
                  label="Location"
                  value={form.location}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />

                <Select
                  name="employment_type"
                  label="Employment Type"
                  value={form.employment_type}
                  onChange={handleChange}
                  options={[
                    { value: "full-time", label: "Full Time" },
                    { value: "part-time", label: "Part Time" },
                    { value: "contract", label: "Contract" },
                    { value: "freelance", label: "Freelance" },
                    { value: "internship", label: "Internship" },
                  ]}
                  disabled={isSubmitting}
                />
                <Select
                  name="experience_level"
                  label="Experience Level"
                  value={form.experience_level}
                  onChange={handleChange}
                  options={[
                    { value: "entry", label: "Entry Level" },
                    { value: "mid", label: "Mid Level" },
                    { value: "senior", label: "Senior Level" },
                    { value: "lead", label: "Lead" },
                    { value: "executive", label: "Executive" },
                  ]}
                  disabled={isSubmitting}
                />

                <Input
                  name="salary_min"
                  label="Min Salary"
                  type="number"
                  value={form.salary_min}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <Input
                  name="salary_max"
                  label="Max Salary"
                  type="number"
                  value={form.salary_max}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />

                <Select
                  name="currency"
                  label="Currency"
                  value={form.currency}
                  onChange={handleChange}
                  options={[
                    { value: "INR", label: "INR (₹)" },
                    { value: "USD", label: "USD ($)" },
                    { value: "OTHER", label: "Other" },
                  ]}
                  disabled={isSubmitting}
                />

                <Select
                  name="status"
                  label="Status"
                  value={form.status}
                  onChange={handleChange}
                  options={[
                    { value: "open", label: "Open" },
                    { value: "closed", label: "Closed" },
                    { value: "draft", label: "Draft" },
                  ]}
                  disabled={isSubmitting}
                />

                <Input
                  name="application_email"
                  label="Application Email"
                  type="email"
                  value={form.application_email}
                  onChange={handleChange}
                  className="md:col-span-2"
                  disabled={isSubmitting}
                />

                <Textarea
                  name="short_description"
                  label="Short Description"
                  value={form.short_description}
                  onChange={handleChange}
                  className="md:col-span-2"
                  disabled={isSubmitting}
                />
                <Textarea
                  name="description"
                  label="Full Description"
                  value={form.description}
                  onChange={handleChange}
                  className="md:col-span-2"
                  disabled={isSubmitting}
                />

                {/* Array Inputs */}
                <ArrayInputSection
                  title="Requirements"
                  field="requirements"
                  items={arrayInputs.requirements}
                  onChange={handleArrayInputChange}
                  onAdd={addArrayInput}
                  onRemove={removeArrayInput}
                  placeholder="Add a requirement..."
                  disabled={isSubmitting}
                />

                <ArrayInputSection
                  title="Responsibilities"
                  field="responsibilities"
                  items={arrayInputs.responsibilities}
                  onChange={handleArrayInputChange}
                  onAdd={addArrayInput}
                  onRemove={removeArrayInput}
                  placeholder="Add a responsibility..."
                  disabled={isSubmitting}
                />

                <ArrayInputSection
                  title="Benefits"
                  field="benefits"
                  items={arrayInputs.benefits}
                  onChange={handleArrayInputChange}
                  onAdd={addArrayInput}
                  onRemove={removeArrayInput}
                  placeholder="Add a benefit..."
                  disabled={isSubmitting}
                />

                <div className="md:col-span-2 flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => !isSubmitting && setShowModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl transition-all duration-200 border border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {editingJob ? "Updating..." : "Creating..."}
                      </>
                    ) : (
                      editingJob ? "Update Job" : "Create Job"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[10003] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 w-full max-w-md rounded-2xl shadow-2xl border border-gray-700/50 p-6 relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-500/20 mb-4">
                  <Trash2 className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Delete Job
                </h3>
                <p className="text-gray-300 mb-6">
                  Are you sure you want to delete this job? This action cannot be undone.
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleDeleteCancel}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl transition-all duration-200 border border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isDeleting}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteConfirm}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Components with dark theme
const Input = ({ label, name, className = "", disabled, ...props }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      name={name}
      disabled={disabled}
      {...props}
      className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    />
  </div>
);

const Textarea = ({ label, name, className = "", disabled, ...props }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="text-sm font-medium text-gray-300 mb-2">{label}</label>
    <textarea
      name={name}
      disabled={disabled}
      {...props}
      className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-vertical min-h-[100px] disabled:opacity-50 disabled:cursor-not-allowed"
    />
  </div>
);

const Select = ({ label, name, options, disabled, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-300 mb-2">{label}</label>
    <select
      name={name}
      disabled={disabled}
      {...props}
      className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <option value="" className="bg-gray-800">
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-gray-800">
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const ArrayInputSection = ({
  title,
  field,
  items,
  onChange,
  onAdd,
  onRemove,
  placeholder,
  disabled,
}) => (
  <div className="md:col-span-2">
    <label className="text-sm font-medium text-gray-300 mb-2 block">
      {title}
    </label>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => onChange(field, index, e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => onRemove(field, index)}
              disabled={disabled}
              className="px-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => onAdd(field)}
        disabled={disabled}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors border border-gray-600 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus size={16} /> Add {title.slice(0, -1)}
      </button>
    </div>
  </div>
);