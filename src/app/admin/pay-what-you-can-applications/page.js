"use client";

import { useEffect, useState } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight, Download, Eye, X, CheckCircle, AlertCircle } from "lucide-react";

export default function AdminPayWhatYouCanApplications() {
  const [applications, setApplications] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [deleteIds, setDeleteIds] = useState([]);
  const [deleting, setDeleting] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  // Show message with auto-hide
  const showMessage = (type, text, duration = 5000) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), duration);
  };

  const fetchApplications = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/paywhatyoucan`);
      const data = await res.json();
      if (res.ok) {
        setApplications(data.data || []);
        setTotalCount(data.data.length);
        setTotalPages(Math.ceil(data.data.length / itemsPerPage));
        showMessage("success", `Loaded ${data.data.length} applications successfully!`);
      } else {
        showMessage("error", data.message || "Failed to fetch applications");
      }
    } catch (err) {
      showMessage("error", "Network error: " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications(1);
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`/api/paywhatyoucan`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: [id], status }),
      });
      const data = await res.json();
      if (res.ok) {
        showMessage("success", `Status updated to ${status}!`);
        fetchApplications(currentPage);
      } else {
        showMessage("error", data.message || "Failed to update status");
      }
    } catch (err) {
      showMessage("error", "Network error: " + err.message);
    }
  };

  const confirmDelete = (ids) => {
    setDeleteIds(ids);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!deleteIds.length) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/paywhatyoucan`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: deleteIds }),
      });
      const data = await res.json();
      if (res.ok) {
        showMessage("success", `Successfully deleted ${deleteIds.length} application(s)!`);
        setSelectedIds(selectedIds.filter((id) => !deleteIds.includes(id)));
        fetchApplications(currentPage);
      } else {
        showMessage("error", data.message || "Failed to delete applications");
      }
    } catch (err) {
      showMessage("error", "Network error: " + err.message);
    }
    setDeleting(false);
    setShowDeleteModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "read":
        return "bg-blue-500/20 text-blue-300 border-blue-500";
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500";
      case "deal":
        return "bg-green-500/20 text-green-300 border-green-500";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500";
    }
  };

  const exportToCSV = () => {
    try {
      const headers = Object.keys(applications[0] || {});
      const csv = [
        headers.join(","),
        ...applications.map((a) => 
          headers.map((h) => {
            const value = a[h];
            // Handle values that might contain commas or quotes
            if (value === null || value === undefined) return '""';
            const stringValue = String(value);
            return stringValue.includes(',') || stringValue.includes('"') 
              ? `"${stringValue.replace(/"/g, '""')}"`
              : stringValue;
          }).join(",")
        )
      ].join("\n");
      
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `applications-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showMessage("success", "CSV exported successfully!");
    } catch (err) {
      showMessage("error", "Failed to export CSV: " + err.message);
    }
  };

  // Filter applications based on search and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchTerm === "" || 
      Object.values(app).some(value => 
        value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Paginate filtered applications
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold  text-white">
              Pay What You Can
            </h1>
            <p className="text-gray-400 mt-1">Manage and review all submissions</p>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        {/* Success/Error Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg border ${
            message.type === "success" 
              ? "bg-green-500/10 border-green-500/50 text-green-300" 
              : "bg-red-500/10 border-red-500/50 text-red-300"
          } flex items-center gap-3 animate-fade-in`}>
            {message.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* Filters */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            >
              <option value="all">All Status</option>
              <option value="read">Read</option>
              <option value="pending">Pending</option>
              <option value="deal">Deal</option>
            </select>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
          {loading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-300">Name</th>
                      <th className="p-4 text-left font-semibold text-gray-300">Email</th>
                      <th className="p-4 text-left font-semibold text-gray-300">Phone</th>
                      <th className="p-4 text-left font-semibold text-gray-300">Status</th>
                      <th className="p-4 text-left font-semibold text-gray-300">Applied</th>
                      <th className="p-4 text-left font-semibold text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedApplications.map((app) => (
                      <tr
                        key={app.id}
                        className="border-t border-gray-700/50 hover:bg-gray-700/30 transition-all duration-200 group"
                      >
                        <td className="p-4 font-medium">{app.contact_name || "—"}</td>
                        <td className="p-4 text-gray-300">{app.email || "—"}</td>
                        <td className="p-4 text-gray-300">{app.phone || "—"}</td>
                        <td className="p-4">
                          <select
                            value={app.status || "pending"}
                            onChange={(e) => handleStatusChange(app.id, e.target.value)}
                            className={`px-3 py-1 rounded-lg border bg-gray-900/50 backdrop-blur-sm ${getStatusColor(app.status)} focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition cursor-pointer`}
                          >
                            <option value="read" className="bg-gray-800 text-white">Read</option>
                            <option value="pending" className="bg-gray-800 text-white">Pending</option>
                            <option value="deal" className="bg-gray-800 text-white">Deal</option>
                          </select>
                        </td>
                        <td className="p-4 text-gray-400">
                          {app.submitted_at ? new Date(app.submitted_at).toLocaleDateString() : "—"}
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setSelectedApp(app);
                                setShowDetailModal(true);
                              }}
                              className="p-2 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/50 rounded-lg transition-all hover:scale-105"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4 text-emerald-400" />
                            </button>
                            <button
                              onClick={() => confirmDelete([app.id])}
                              className="p-2 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg transition-all hover:scale-105"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {!paginatedApplications.length && !loading && (
                      <tr>
                        <td colSpan="6" className="text-center p-8 text-gray-400">
                          No applications found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t border-gray-700/50 bg-gray-800/20">
                  <div className="text-gray-400 text-sm">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredApplications.length)} of {filteredApplications.length} results
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-2 text-sm text-gray-300">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ✅ Enhanced Details Modal */}
      {showDetailModal && selectedApp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[10002] p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 max-w-4xl w-full rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-700/50 bg-gray-800/50">
              <h2 className="text-2xl font-bold text-white">
                Application Details
              </h2>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto flex-1 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(selectedApp).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/50 hover:border-gray-500/50 transition"
                  >
                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wide block mb-2">
                      {key.replace(/_/g, " ")}
                    </label>
                    <div className="text-white break-words">
                      {value === null || value === "" || value === undefined 
                        ? <span className="text-gray-500">—</span> 
                        : value.toString()}
                    </div>
                  </div>
                ))}
              </div>

              {selectedApp.video_url && (
                <div className="mt-8 bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
                  <h3 className="text-lg font-semibold mb-4 text-gray-300">Application Video</h3>
                  <video
                    src={selectedApp.video_url}
                    controls
                    className="w-full rounded-lg border border-gray-600/50 bg-black"
                    poster="/video-poster.jpg"
                  />
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-700/50 bg-gray-800/50">
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl max-w-md w-full border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-2">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-xl font-bold mb-2">Confirm Deletion</h2>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete {deleteIds.length} application(s)? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 rounded-lg transition flex-1 disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}