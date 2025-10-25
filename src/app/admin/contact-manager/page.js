"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Trash2,
  Loader2,
  Download,
} from "lucide-react";

export default function ContactPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [exporting, setExporting] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact/list");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch messages");

        const formatted = data.data.map((item) => ({
          id: item.id,
          name: item.full_name,
          email: item.email,
          phone: item.phone,
          subject: item.subject,
          message: item.message,
          company_name: item.company_name,
          service: item.service,
          referral_id: item.referral_id,
          source: item.source || "website", // Added source field
          status: item.status || "new",
          priority: item.priority || "medium",
          file_url: item.file_url,
          createdAt: item.created_at,
        }));

        setMessages(formatted);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // CSV Export Function
  const handleExportCSV = async () => {
    setExporting(true);
    try {
      // Use filtered messages for export, or all messages if no search
      const messagesToExport = searchTerm ? filteredMessages : messages;
      
      if (messagesToExport.length === 0) {
        alert("No messages to export");
        return;
      }

      // Create CSV headers
      const headers = [
        'ID',
        'Name',
        'Email',
        'Phone',
        'Subject',
        'Message',
        'Company',
        'Service',
        'Referral ID',
        'Source',
        'Status',
        'Priority',
        'Created Date'
      ];

      // Create CSV rows
      const csvRows = messagesToExport.map(message => [
        message.id,
        `"${message.name?.replace(/"/g, '""') || ''}"`,
        `"${message.email?.replace(/"/g, '""') || ''}"`,
        `"${message.phone?.replace(/"/g, '""') || ''}"`,
        `"${message.subject?.replace(/"/g, '""') || ''}"`,
        `"${message.message?.replace(/"/g, '""') || ''}"`,
        `"${message.company_name?.replace(/"/g, '""') || ''}"`,
        `"${message.service?.replace(/"/g, '""') || ''}"`,
        `"${message.referral_id?.replace(/"/g, '""') || ''}"`,
        `"${message.source?.replace(/"/g, '""') || ''}"`,
        `"${message.status?.replace(/"/g, '""') || ''}"`,
        `"${message.priority?.replace(/"/g, '""') || ''}"`,
        `"${new Date(message.createdAt).toLocaleDateString()}"`
      ]);

      // Combine headers and rows
      const csvContent = [
        headers.join(','),
        ...csvRows.map(row => row.join(','))
      ].join('\n');

      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', `contact-messages-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log("CSV exported successfully");
    } catch (error) {
      console.error("Error exporting CSV:", error);
      alert("Failed to export CSV. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  // Filtering based on search only
  const filteredMessages = messages.filter((message) => {
    const term = searchTerm.toLowerCase();
    return (
      message.name?.toLowerCase().includes(term) ||
      message.email?.toLowerCase().includes(term) ||
      message.subject?.toLowerCase().includes(term) ||
      message.company_name?.toLowerCase().includes(term) ||
      message.message?.toLowerCase().includes(term) ||
      message.referral_id?.toLowerCase().includes(term) ||
      message.source?.toLowerCase().includes(term) // Include source in search
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMessages = filteredMessages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleDeleteMessage = async (messageId) => {
    setDeleting(true);
    
    try {
      const res = await fetch(`/api/contact/${messageId}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to delete message");
      }

      // Remove from local state
      setMessages(messages.filter((msg) => msg.id !== messageId));
      setDeleteConfirm(null);

      // Reset to first page if current page becomes empty
      if (paginatedMessages.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      console.log("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error);
      alert(error.message || "Failed to delete message");
    } finally {
      setDeleting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "replied":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Check if subject is Landing Page
  const isLandingPageSubject = (subject) => {
    return subject?.toLowerCase().includes("landing page");
  };

  // Check if message is from landing page based on source or subject
  const isFromLandingPage = (message) => {
    return message.source?.toLowerCase() === 'landing page' || 
           isLandingPageSubject(message.subject);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Loading messages...
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
              Contact Messages
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage customer inquiries and messages
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <MessageSquare size={16} />
              <span>{messages.length} total messages</span>
            </div>
            
            {/* Export CSV Button */}
            <button
              onClick={handleExportCSV}
              disabled={exporting || messages.length === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg transition-colors disabled:cursor-not-allowed text-sm font-medium"
            >
              {exporting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              <span>
                {exporting ? 'Exporting...' : 'Export CSV'}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name, email, subject, company, message, referral ID, or source..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Found {filteredMessages.length} messages matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subject & Message
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                    Company
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Source
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedMessages.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <MessageSquare
                        className="mx-auto text-gray-400 mb-3"
                        size={32}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        {searchTerm ? "No messages found matching your search" : "No messages found"}
                      </p>
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="mt-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Clear search
                        </button>
                      )}
                    </td>
                  </tr>
                ) : (
                  paginatedMessages.map((message) => (
                    <tr
                      key={message.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                            {message.name?.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[120px]">
                              {message.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[120px]">
                              {message.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="max-w-[200px] sm:max-w-xs">
                          <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {message.subject}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {isFromLandingPage(message) ? (
                              message.referral_id ? (
                                <span className="text-purple-600 dark:text-purple-400">
                                  Referral ID: {message.referral_id}
                                </span>
                              ) : (
                                "Landing Page Submission"
                              )
                            ) : (
                              `${message.message?.substring(0, 50)}...`
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white hidden sm:table-cell">
                        {message.company_name || "-"}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          message.source === 'landing page' 
                            ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}>
                          {message.source || 'website'}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                            message.status
                          )}`}
                        >
                          {message.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(message.createdAt)}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-1 sm:space-x-2">
                          <button
                            onClick={() => handleViewMessage(message)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 p-1 sm:p-2 rounded transition-colors"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(message.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 p-1 sm:p-2 rounded transition-colors"
                            title="Delete Message"
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
                  {Math.min(startIndex + itemsPerPage, filteredMessages.length)}
                </span>{" "}
                of <span className="font-medium">{filteredMessages.length}</span>{" "}
                results
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

        {/* View Message Modal */}
        <AnimatePresence>
          {isModalOpen && selectedMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[10005] flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Message Details
                  </h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                  {/* Header Info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {selectedMessage.subject}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            selectedMessage.status
                          )}`}
                        >
                          {selectedMessage.status}
                        </span>
                        {selectedMessage.priority && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              selectedMessage.priority
                            )}`}
                          >
                            {selectedMessage.priority} priority
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sender Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {selectedMessage.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                        {selectedMessage.email}
                      </p>
                    </div>
                    <div className="space-y-1 text-sm">
                      {selectedMessage.phone && (
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Phone:</strong> {selectedMessage.phone}
                        </p>
                      )}
                      {selectedMessage.company_name && (
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Company:</strong>{" "}
                          {selectedMessage.company_name}
                        </p>
                      )}
                      {/* Show source when not from landing page */}
                      {!isFromLandingPage(selectedMessage) && selectedMessage.source && (
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Source:</strong>{" "}
                          <span className="capitalize">{selectedMessage.source}</span>
                        </p>
                      )}
                      {/* Conditionally show service only if not Landing Page */}
                      {selectedMessage.service && !isFromLandingPage(selectedMessage) && (
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Service:</strong> {selectedMessage.service}
                        </p>
                      )}
                      {/* Show referral_id for Landing Page submissions */}
                      {isFromLandingPage(selectedMessage) && selectedMessage.referral_id && (
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Referral ID:</strong>{" "}
                          <span className="text-purple-600 dark:text-purple-400 font-mono">
                            {selectedMessage.referral_id}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Content - Conditionally show */}
                  {!isFromLandingPage(selectedMessage) && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Message
                      </h4>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Show special message for Landing Page submissions */}
                  {isFromLandingPage(selectedMessage) && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Landing Page Submission
                      </h4>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-blue-700 dark:text-blue-300">
                          This is a landing page submission. No detailed message content is available.
                          {selectedMessage.referral_id && (
                            <span className="block mt-2">
                              Referral ID: <strong className="font-mono">{selectedMessage.referral_id}</strong>
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Attachment */}
                  {selectedMessage.file_url && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Attachment
                      </h4>
                      <a
                        href={selectedMessage.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        📎 Download File
                      </a>
                    </div>
                  )}

                  {/* Date */}
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Received:{" "}
                    {new Date(selectedMessage.createdAt).toLocaleString()}
                  </div>
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
                className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-4 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delete Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Are you sure you want to delete this message? This action
                  cannot be undone.
                </p>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    disabled={deleting}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(deleteConfirm)}
                    disabled={deleting}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 min-w-[80px] justify-center"
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
                
                {deleting && (
                  <div className="mt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Processing deletion...</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}