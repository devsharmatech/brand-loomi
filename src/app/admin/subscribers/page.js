"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Trash2,
  Loader2,
  Mail,
  Phone,
  User,
  Edit3,
  CheckCircle,
  XCircle,
  Download,
} from "lucide-react";

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [editingSubscriber, setEditingSubscriber] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [bulkDelete, setBulkDelete] = useState([]);
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const [exporting, setExporting] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Form states for editing
  const [editForm, setEditForm] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  // Fetch subscribers
  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/subscribers");
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "Failed to fetch subscribers");

      setSubscribers(data.data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      alert("Failed to load subscribers: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Filter subscribers based on search
  const filteredSubscribers = subscribers.filter((subscriber) => {
    const term = searchTerm.toLowerCase();
    return (
      subscriber.full_name?.toLowerCase().includes(term) ||
      subscriber.email?.toLowerCase().includes(term) ||
      subscriber.phone?.toLowerCase().includes(term)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSubscribers = filteredSubscribers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  // Export to CSV function
  const handleExportCSV = async () => {
    try {
      setExporting(true);

      // Determine which data to export (filtered or all)
      const dataToExport = searchTerm ? filteredSubscribers : subscribers;

      if (dataToExport.length === 0) {
        alert("No data to export");
        return;
      }

      // Create CSV headers
      const headers = ["Name", "Email", "Phone", "Subscribed Date"];

      // Create CSV content
      const csvContent = [
        headers.join(","),
        ...dataToExport.map((subscriber) =>
          [
            `"${(subscriber.full_name || "").replace(/"/g, '""')}"`,
            `"${subscriber.email.replace(/"/g, '""')}"`,
            `"${(subscriber.phone || "").replace(/"/g, '""')}"`,
            `"${formatDate(subscriber.created_at)}"`,
          ].join(",")
        ),
      ].join("\n");

      // Create blob and download
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Create filename with timestamp
      const timestamp = new Date().toISOString().split("T")[0];
      const searchSuffix = searchTerm
        ? `-search-${searchTerm.replace(/[^a-zA-Z0-9]/g, "-")}`
        : "";
      link.download = `subscribers-${timestamp}${searchSuffix}.csv`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log("CSV exported successfully");
    } catch (error) {
      console.error("Error exporting CSV:", error);
      alert("Failed to export CSV: " + error.message);
    } finally {
      setExporting(false);
    }
  };

  const handleViewSubscriber = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setIsModalOpen(true);
  };

  const handleEditSubscriber = (subscriber) => {
    setEditingSubscriber(subscriber);
    setEditForm({
      full_name: subscriber.full_name || "",
      email: subscriber.email || "",
      phone: subscriber.phone || "",
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!editingSubscriber) return;

    try {
      setSaving(true);
      const res = await fetch("/api/subscribers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingSubscriber.id,
          ...editForm,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to update subscriber");
      }

      // Update local state
      setSubscribers(
        subscribers.map((sub) =>
          sub.id === editingSubscriber.id ? { ...sub, ...editForm } : sub
        )
      );

      setIsEditModalOpen(false);
      setEditingSubscriber(null);
      console.log("Subscriber updated successfully");
    } catch (error) {
      console.error("Error updating subscriber:", error);
      alert(error.message || "Failed to update subscriber");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSubscriber = async (subscriberId) => {
    setDeleting(true);

    try {
      const res = await fetch("/api/subscribers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: [subscriberId],
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete subscriber");
      }

      // Remove from local state
      setSubscribers(subscribers.filter((sub) => sub.id !== subscriberId));
      setDeleteConfirm(null);

      // Reset to first page if current page becomes empty
      if (paginatedSubscribers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      console.log("Subscriber deleted successfully");
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      alert(error.message || "Failed to delete subscriber");
    } finally {
      setDeleting(false);
    }
  };

  const handleBulkDelete = async () => {
    if (bulkDelete.length === 0) return;

    setDeleting(true);

    try {
      const res = await fetch("/api/subscribers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: bulkDelete,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete subscribers");
      }

      // Remove from local state
      setSubscribers(subscribers.filter((sub) => !bulkDelete.includes(sub.id)));
      setBulkDelete([]);
      setShowBulkDelete(false);

      // Reset to first page if current page becomes empty
      if (paginatedSubscribers.length <= bulkDelete.length && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      console.log("Subscribers deleted successfully");
    } catch (error) {
      console.error("Error deleting subscribers:", error);
      alert(error.message || "Failed to delete subscribers");
    } finally {
      setDeleting(false);
    }
  };

  const toggleBulkSelect = (subscriberId) => {
    setBulkDelete((prev) =>
      prev.includes(subscriberId)
        ? prev.filter((id) => id !== subscriberId)
        : [...prev, subscriberId]
    );
  };

  const selectAllOnPage = () => {
    const pageIds = paginatedSubscribers.map((sub) => sub.id);
    if (bulkDelete.length === pageIds.length) {
      setBulkDelete([]);
    } else {
      setBulkDelete(pageIds);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubscriber(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingSubscriber(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "?";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Loading subscribers...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Newsletter Subscribers
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage your newsletter subscribers and their information
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
            <Users size={16} />
            <span>{subscribers.length} total subscribers</span>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-md w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-3">
            {/* Export CSV Button */}
            <button
              onClick={handleExportCSV}
              disabled={exporting || subscribers.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium flex items-center space-x-2"
            >
              {exporting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              <span>
                {exporting ? "Exporting..." : "Export CSV"}
                {searchTerm && ` (${filteredSubscribers.length})`}
              </span>
            </button>

            {/* Bulk Delete Button */}
            {bulkDelete.length > 0 && (
              <>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {bulkDelete.length} selected
                </span>
                <button
                  onClick={() => setShowBulkDelete(true)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <Trash2 size={16} />
                  <span>Delete Selected</span>
                </button>
              </>
            )}
          </div>
        </div>

        {searchTerm && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Found {filteredSubscribers.length} subscribers matching "
            {searchTerm}"
          </p>
        )}

        {/* Table Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-12">
                    <input
                      type="checkbox"
                      checked={
                        paginatedSubscribers.length > 0 &&
                        bulkDelete.length === paginatedSubscribers.length
                      }
                      onChange={selectAllOnPage}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subscriber
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Contact
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                    Subscribed
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedSubscribers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <Users className="mx-auto text-gray-400 mb-3" size={32} />
                      <p className="text-gray-500 dark:text-gray-400">
                        {searchTerm
                          ? "No subscribers found matching your search"
                          : "No subscribers found"}
                      </p>
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="mt-2 text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                        >
                          Clear search
                        </button>
                      )}
                    </td>
                  </tr>
                ) : (
                  paginatedSubscribers.map((subscriber) => (
                    <tr
                      key={subscriber.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-4">
                        <input
                          type="checkbox"
                          checked={bulkDelete.includes(subscriber.id)}
                          onChange={() => toggleBulkSelect(subscriber.id)}
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                            {getInitials(subscriber.full_name)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[150px]">
                              {subscriber.full_name || "Unknown"}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {subscriber.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white hidden md:table-cell">
                        {subscriber.phone ? (
                          <div className="flex items-center space-x-1">
                            <Phone size={14} />
                            <span>{subscriber.phone}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400">No phone</span>
                        )}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                        {formatDate(subscriber.created_at)}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-1 sm:space-x-2">
                          <button
                            onClick={() => handleViewSubscriber(subscriber)}
                            className="text-emerald-600 hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300 p-1 sm:p-2 rounded transition-colors"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleEditSubscriber(subscriber)}
                            className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 p-1 sm:p-2 rounded transition-colors"
                            title="Edit Subscriber"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(subscriber.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 p-1 sm:p-2 rounded transition-colors"
                            title="Delete Subscriber"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(
                    startIndex + itemsPerPage,
                    filteredSubscribers.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-medium">
                  {filteredSubscribers.length}
                </span>{" "}
                subscribers
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300 px-3">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* View Subscriber Modal */}
        <AnimatePresence>
          {isModalOpen && selectedSubscriber && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Subscriber Details
                  </h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Avatar and Name */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {getInitials(selectedSubscriber.full_name)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {selectedSubscriber.full_name || "Unknown"}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Newsletter Subscriber
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <p className="text-gray-900 dark:text-white break-all">
                          {selectedSubscriber.email}
                        </p>
                      </div>
                    </div>

                    {selectedSubscriber.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="text-gray-400" size={20} />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Phone
                          </p>
                          <p className="text-gray-900 dark:text-white">
                            {selectedSubscriber.phone}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-3">
                      <User className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Subscribed Since
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          {formatDate(selectedSubscriber.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Subscriber Modal */}
        <AnimatePresence>
          {isEditModalOpen && editingSubscriber && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={closeEditModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Edit Subscriber
                  </h2>
                  <button
                    onClick={closeEditModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    disabled={saving}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={editForm.full_name}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          full_name: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={closeEditModal}
                    disabled={saving}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    disabled={saving || !editForm.email}
                    className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {saving ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle size={16} />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delete Subscriber
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Are you sure you want to delete this subscriber? This action
                  cannot be undone.
                </p>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    disabled={deleting}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteSubscriber(deleteConfirm)}
                    disabled={deleting}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center space-x-2 min-w-[80px] justify-center"
                  >
                    {deleting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Deleting...</span>
                      </>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bulk Delete Confirmation Modal */}
        <AnimatePresence>
          {showBulkDelete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delete {bulkDelete.length} Subscribers
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Are you sure you want to delete {bulkDelete.length} selected
                  subscribers? This action cannot be undone.
                </p>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowBulkDelete(false)}
                    disabled={deleting}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBulkDelete}
                    disabled={deleting}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center space-x-2 min-w-[100px] justify-center"
                  >
                    {deleting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Deleting...</span>
                      </>
                    ) : (
                      <>
                        <Trash2 size={16} />
                        <span>Delete All</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
