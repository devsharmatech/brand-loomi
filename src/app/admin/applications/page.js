"use client";

import { useEffect, useState } from "react";
import { 
  Trash2, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Eye,
  X,
  FileText,
  ExternalLink,
  Building2,
  MapPin,
  Calendar,
  User,
  Mail,
  Phone,
  Globe,
  Award,
  CheckCircle,
  Clock
} from "lucide-react";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIds, setDeleteIds] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchApplications = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
        search: searchTerm,
        status: statusFilter,
        sortBy,
        sortOrder
      });

      const res = await fetch(`/api/application?${params}`);
      const data = await res.json();
      
      if (res.ok) {
        setApplications(data.data || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalCount(data.pagination?.totalCount || 0);
        setCurrentPage(data.pagination?.currentPage || 1);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to fetch" });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications(1);
  }, [searchTerm, statusFilter, sortBy, sortOrder, itemsPerPage]);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`/api/application`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        fetchApplications(currentPage);
        
        // Update selected application if it's open
        if (selectedApplication && selectedApplication.id === id) {
          setSelectedApplication(prev => ({ ...prev, status }));
        }
      } else setMessage({ type: "error", text: data.message });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === applications.length) setSelectedIds([]);
    else setSelectedIds(applications.map((app) => app.id));
  };

  const confirmDelete = (ids) => {
    setDeleteIds(ids);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!deleteIds.length) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/application`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: deleteIds }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        setSelectedIds(selectedIds.filter((id) => !deleteIds.includes(id)));
        fetchApplications(currentPage);
        if (selectedApplication && deleteIds.includes(selectedApplication.id)) {
          setShowDetailModal(false);
          setSelectedApplication(null);
        }
      } else setMessage({ type: "error", text: data.message });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
    setDeleting(false);
    setShowDeleteModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Status", "Job Position", "Applied Date", "Skills", "Eligible"];
    const csvData = applications.map(app => [
      app.name,
      app.email,
      app.phone,
      app.status,
      app.job_post_name || "Not specified",
      new Date(app.created_at).toLocaleDateString(),
      app.skills,
      app.eligible
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(","))
      .join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-300";
      case "shortlist": return "bg-green-500/20 text-green-300";
      case "rejected": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  const getStatusBorderColor = (status) => {
    switch (status) {
      case "pending": return "border-yellow-500";
      case "shortlist": return "border-green-500";
      case "rejected": return "border-red-500";
      default: return "border-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending": return <Clock className="w-4 h-4" />;
      case "shortlist": return <CheckCircle className="w-4 h-4" />;
      case "rejected": return <X className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const openDetailModal = (application) => {
    setSelectedApplication(application);
    setShowDetailModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-3xl font-bold text-white">
              Applications
            </h1>
            <p className="text-gray-400 mt-2">Manage and review job applications</p>
          </div>
          
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              message.type === "success" 
                ? "bg-green-500/20 border-green-500 text-green-300" 
                : "bg-red-500/20 border-red-500 text-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 mb-6 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={handleStatusFilter}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="shortlist">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
            >
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => confirmDelete(selectedIds)}
                disabled={!selectedIds.length}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  selectedIds.length
                    ? "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25"
                    : "bg-gray-700 cursor-not-allowed opacity-50"
                }`}
              >
                <Trash2 className="w-4 h-4" />
                Delete ({selectedIds.length})
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === applications.length && applications.length > 0}
                          onChange={handleSelectAll}
                          className="rounded bg-gray-600 border-gray-500 text-emerald-500 focus:ring-emerald-500"
                        />
                      </th>
                      <th 
                        className="p-4 text-left cursor-pointer hover:bg-gray-700/50 transition-colors"
                        onClick={() => handleSort("name")}
                      >
                        Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                      </th>
                      <th 
                        className="p-4 text-left cursor-pointer hover:bg-gray-700/50 transition-colors"
                        onClick={() => handleSort("email")}
                      >
                        Email {sortBy === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                      </th>
                      <th className="p-4 text-left">Phone</th>
                      <th className="p-4 text-left">Job Position</th>
                      <th 
                        className="p-4 text-left cursor-pointer hover:bg-gray-700/50 transition-colors"
                        onClick={() => handleSort("status")}
                      >
                        Status {sortBy === "status" && (sortOrder === "asc" ? "↑" : "↓")}
                      </th>
                      <th 
                        className="p-4 text-left cursor-pointer hover:bg-gray-700/50 transition-colors"
                        onClick={() => handleSort("created_at")}
                      >
                        Applied {sortBy === "created_at" && (sortOrder === "asc" ? "↑" : "↓")}
                      </th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(app.id)}
                            onChange={() => handleSelect(app.id)}
                            className="rounded bg-gray-600 border-gray-500 text-emerald-500 focus:ring-emerald-500"
                          />
                        </td>
                        <td className="p-4 font-medium">{app.name}</td>
                        <td className="p-4 text-gray-300">{app.email}</td>
                        <td className="p-4">{app.phone}</td>
                        <td className="p-4 text-sm text-gray-300 max-w-xs truncate">
                          {app.job_post_name || "Not specified"}
                        </td>
                        <td className="p-4">
                          <div className="relative">
                            <select
                              value={app.status}
                              onChange={(e) => handleStatusChange(app.id, e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border-2 ${getStatusBorderColor(app.status)} ${getStatusColor(app.status)} appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-8`}
                            >
                              <option value="pending" className="bg-gray-800 text-white">Pending</option>
                              <option value="shortlist" className="bg-gray-800 text-white">Shortlist</option>
                              <option value="rejected" className="bg-gray-800 text-white">Rejected</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-gray-400 text-sm">
                          {new Date(app.created_at).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <button
                              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                              onClick={() => openDetailModal(app)}
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                              onClick={() => confirmDelete([app.id])}
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4 p-4">
                {applications.map((app) => (
                  <div key={app.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <div className="flex justify-between items-start mb-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(app.id)}
                        onChange={() => handleSelect(app.id)}
                        className="rounded bg-gray-600 border-gray-500 text-emerald-500 focus:ring-emerald-500 mt-1"
                      />
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                          onClick={() => openDetailModal(app)}
                          title="View Details"
                        >
                          <Eye className="w-3 h-3" />
                        </button>
                        <button
                          className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                          onClick={() => confirmDelete([app.id])}
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-lg">{app.name}</div>
                        <div className="text-gray-300 text-sm">{app.email}</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-gray-400">Phone</div>
                          <div>{app.phone}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Applied</div>
                          <div>{new Date(app.created_at).toLocaleDateString()}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-gray-400 text-sm mb-1">Job Position</div>
                        <div className="text-sm">{app.job_post_name || "Not specified"}</div>
                      </div>
                      
                      <div className="relative">
                        <select
                          value={app.status}
                          onChange={(e) => handleStatusChange(app.id, e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border-2 ${getStatusBorderColor(app.status)} ${getStatusColor(app.status)} appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-8 text-sm`}
                        >
                          <option value="pending" className="bg-gray-800 text-white">Pending</option>
                          <option value="shortlist" className="bg-gray-800 text-white">Shortlist</option>
                          <option value="rejected" className="bg-gray-800 text-white">Rejected</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {applications.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-700/50 gap-4">
              <div className="text-gray-400 text-sm">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalCount)} of {totalCount} entries
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => currentPage > 1 && fetchApplications(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    Math.abs(page - currentPage) <= 1
                  )
                  .map((page, index, array) => {
                    if (index > 0 && page - array[index - 1] > 1) {
                      return (
                        <span key={`ellipsis-${page}`} className="px-3 py-1 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    
                    return (
                      <button
                        key={page}
                        onClick={() => fetchApplications(page)}
                        className={`px-3 py-1 rounded-lg transition-colors ${
                          currentPage === page
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                
                <button
                  onClick={() => currentPage < totalPages && fetchApplications(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {applications.length === 0 && !loading && (
            <div className="text-center py-12 text-gray-400">
              No applications found
            </div>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gray-800 p-6 rounded-xl max-w-sm w-full border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6 text-gray-300">
              Are you sure you want to delete {deleteIds.length} application(s)? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                onClick={() => setShowDeleteModal(false)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Detail Modal */}
      {showDetailModal && selectedApplication && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[10005] p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-start p-6 border-b border-gray-700 sticky top-0 bg-gray-800 rounded-t-xl">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedApplication.name}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {selectedApplication.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {selectedApplication.phone}
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${getStatusColor(selectedApplication.status)} border ${getStatusBorderColor(selectedApplication.status)}`}>
                    {getStatusIcon(selectedApplication.status)}
                    {selectedApplication.status}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors ml-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Job Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                      Job Information
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <div className="text-gray-400 text-sm">Position Applied</div>
                        <div className="font-medium">{selectedApplication.job_post_name || "Not specified"}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Applied Date</div>
                        <div className="flex items-center gap-1 mt-1 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(selectedApplication.created_at).toLocaleDateString()} at {new Date(selectedApplication.created_at).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-400" />
                      Personal Information
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <div className="text-gray-400 text-sm">Skills Level</div>
                        <div className="font-medium capitalize">{selectedApplication.skills || "Not specified"}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Eligible to Work</div>
                        <div className="font-medium capitalize">{selectedApplication.eligible || "Not specified"}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Referral Source</div>
                        <div className="font-medium capitalize">{selectedApplication.referral || "Not specified"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-purple-400" />
                      Online Profiles
                    </h3>
                    <div className="space-y-2">
                      {selectedApplication.linkedin && (
                        <div>
                          <div className="text-gray-400 text-sm">LinkedIn</div>
                          <a 
                            href={selectedApplication.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                          >
                            View Profile <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                      {selectedApplication.portfolio && (
                        <div>
                          <div className="text-gray-400 text-sm">Portfolio</div>
                          <a 
                            href={selectedApplication.portfolio} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                          >
                            View Portfolio <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                      {selectedApplication.cover_letter && (
                        <div>
                          <div className="text-gray-400 text-sm">Cover Letter</div>
                          <a 
                            href={selectedApplication.cover_letter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                          >
                            View Cover Letter <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-400" />
                      Resume
                    </h3>
                    {selectedApplication.resume ? (
                      <a 
                        href={selectedApplication.resume} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Resume
                      </a>
                    ) : (
                      <div className="text-gray-400">No resume uploaded</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Update */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Update Application Status
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["pending", "shortlist", "rejected"].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(selectedApplication.id, status)}
                      className={`px-6 py-3 rounded-lg border-2 transition-all ${
                        selectedApplication.status === status
                          ? `${getStatusBorderColor(status)} ${getStatusColor(status)} font-semibold`
                          : "border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-300"
                      }`}
                    >
                      {getStatusIcon(status)}
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-700 pt-6 flex justify-end gap-4">
                <button
                  onClick={() => confirmDelete([selectedApplication.id])}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}