"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, X, Image as ImageIcon } from "lucide-react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "",
    author: "",
    status: "draft",
    content: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const editorRef = useRef(null);
  const EditorJS = useRef(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!showModal) return;

    let isCancelled = false; // To avoid setting editor after unmount

    const initializeEditor = async () => {
      const { default: EditorJSClass } = await import("@editorjs/editorjs");
      const { default: Header } = await import("@editorjs/header");
      const { default: List } = await import("@editorjs/list");
      const { default: Paragraph } = await import("@editorjs/paragraph");

      if (isCancelled) return;

      // Destroy existing instance if any
      if (EditorJS.current) {
        await EditorJS.current.destroy();
        EditorJS.current = null;
      }

      EditorJS.current = new EditorJSClass({
        holder: "editorjs",
        tools: { header: Header, list: List, paragraph: Paragraph },
        data: editBlog?.content
          ? typeof editBlog.content === "string"
            ? JSON.parse(editBlog.content)
            : editBlog.content
          : { blocks: [] },
        placeholder: "Write your blog content here...",
        onReady: () => console.log("Editor.js is ready"),
      });
    };

    initializeEditor();

    return () => {
      isCancelled = true;
      if (EditorJS.current) {
        EditorJS.current.destroy();
        EditorJS.current = null;
      }
    };
  }, [showModal, editBlog]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const result = await res.json();
      if (Array.isArray(result)) setBlogs(result);
      else if (Array.isArray(result.data)) setBlogs(result.data);
      else setBlogs([]);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let editorData = { blocks: [] };
      if (EditorJS.current) {
        editorData = await EditorJS.current.save();
      }
      if (!editorData.blocks || editorData.blocks.length === 0) {
        setMessage({
          type: "error",
          text: "Please add some content before submitting.",
        });
        return;
      }
      const formData = new FormData();
      formData.append("content", JSON.stringify(editorData)); 
      Object.entries(form).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });
      const method = editBlog ? "PUT" : "POST";
      const url = editBlog ? `/api/blogs/${editBlog.id}` : "/api/blogs";
      const res = await fetch(url, {
        method,
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        fetchBlogs();
        closeModal();
      } else {
        setMessage({ type: "error", text: data.error || "Error saving blog" });
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      setMessage({ type: "error", text: "Error saving blog" });
    }
  };

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete) return;

    try {
      const res = await fetch(`/api/blogs/${blogToDelete.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage({ type: "success", text: "Blog deleted successfully" });
        fetchBlogs();
      } else {
        setMessage({ type: "error", text: "Error deleting blog" });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      setMessage({ type: "error", text: "Error deleting blog" });
    } finally {
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditBlog(null);
    setImagePreview(null);
    setForm({
      title: "",
      excerpt: "",
      category: "",
      author: "",
      status: "draft",
      content: "",
      image: null,
    });
    if (EditorJS.current) {
      EditorJS.current.destroy();
      EditorJS.current = null;
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setForm({
      title: blog.title || "",
      excerpt: blog.excerpt || "",
      category: blog.category || "",
      author: blog.author || "",
      status: blog.status || "draft",
      content: blog.content || "",
      image: null,
    });

    // Set image preview if image_url exists
    if (blog.image_url) {
      setImagePreview(blog.image_url);
    }

    setShowModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      // Create preview for new image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Loading blogs...
          </p>
        </div>
      </div>
    );

  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen">
      {message && (
        <div
          className={`p-3 rounded-lg ${
            message.type === "success"
              ? "bg-green-900 text-green-300 border border-green-700"
              : "bg-red-900 text-red-300 border border-red-700"
          }`}
        >
          {message.text}
          <button
            onClick={() => setMessage(null)}
            className="float-right text-sm hover:opacity-70"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Blog Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors border border-gray-600"
        >
          <Plus size={18} /> New Blog
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-lg font-medium">
                No blogs found
              </p>
              <p className="text-gray-500 mt-2">
                Create your first blog to get started
              </p>
            </div>
          </div>
        ) : (
          blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Featured Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                {blog.image_url ? (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center ${
                    blog.image_url ? "hidden" : "flex"
                  }`}
                >
                  <svg
                    className="w-12 h-12 text-white opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      blog.status === "published"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {blog.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex-1">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-2 text-green-400 hover:bg-green-400/10 rounded-lg transition-all duration-200 border border-green-400/30 hover:border-green-400/50 hover:scale-105"
                      title="Edit blog"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(blog)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200 border border-red-400/30 hover:border-red-400/50 hover:scale-105"
                      title="Delete blog"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Optional: Date or read time */}
                  <span className="text-xs text-gray-500">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[10002] p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-700">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">
                {editBlog ? "Edit Blog" : "Create Blog"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors border border-gray-600"
              >
                <X size={20} className="text-gray-300" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter blog title"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Excerpt
                  </label>
                  <input
                    type="text"
                    placeholder="Enter brief excerpt"
                    value={form.excerpt}
                    onChange={(e) =>
                      setForm({ ...form, excerpt: e.target.value })
                    }
                    className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      placeholder="Category"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      placeholder="Author name"
                      value={form.author}
                      onChange={(e) =>
                        setForm({ ...form, author: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Status
                    </label>
                    <select
                      value={form.status}
                      onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                      <option value="draft" className="bg-gray-800">
                        Draft
                      </option>
                      <option value="published" className="bg-gray-800">
                        Published
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Featured Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent file:bg-gray-600 file:border-0 file:text-white file:rounded file:px-3 file:py-1 file:mr-3"
                    />

                    {/* Image Preview */}
                    {(imagePreview || editBlog?.image_url) && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-300 mb-2">
                          Image Preview:
                        </p>
                        <div className="relative w-32 h-32 border border-gray-600 rounded-lg overflow-hidden">
                          <img
                            src={imagePreview || editBlog.image_url}
                            alt="Featured preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Editor.js container */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Content
                  </label>
                  <div className="border border-gray-600 rounded-lg overflow-hidden">
                    <div
                      id="editorjs"
                      className="min-h-[300px] p-4 bg-gray-700 text-white"
                    ></div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors border border-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors border border-gray-500"
                  >
                    {editBlog ? "Update" : "Create"} Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && blogToDelete && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[10003] p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md border border-gray-700">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Confirm Deletion
              </h3>
              <p className="text-gray-300">
                Are you sure you want to delete the blog post :
                {blogToDelete.title}? This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={handleDeleteCancel}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors border border-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors border border-red-500 flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
