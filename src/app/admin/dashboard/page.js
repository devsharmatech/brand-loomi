"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Briefcase,
  MessageCircle,
  DollarSign,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function AdminDashboard() {
  const user = useUser();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        if (!data.success) throw new Error(data.message || "Failed to load dashboard");
        setDashboard(data.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="animate-spin text-gray-500" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 font-medium">
        Failed to load dashboard: {error}
      </div>
    );
  }

  const stats = [
    {
      label: "Total Blogs",
      value: dashboard?.stats?.total_blogs || 0,
      icon: <FileText size={24} />,
      color: "bg-blue-500",
    },
    {
      label: "Total Jobs",
      value: dashboard?.stats?.total_jobs || 0,
      icon: <Briefcase size={24} />,
      color: "bg-green-500",
    },
    {
      label: "Messages",
      value: dashboard?.stats?.total_inquiries || 0,
      icon: <MessageCircle size={24} />,
      color: "bg-purple-500",
    },
    {
      label: "Applications",
      value: dashboard?.stats?.total_applications || 0,
      icon: <DollarSign size={24} />,
      color: "bg-orange-500",
    },
  ];

  const quickLinks = [
    { label: "Blog Master", href: "/admin/blogs-manager", color: "bg-blue-600" },
    { label: "Job Master", href: "/admin/career-manager", color: "bg-green-600" },
    { label: "View Applications", href: "/admin/applications", color: "bg-yellow-600" },
    { label: "View Inquiries", href: "/admin/contact-manager", color: "bg-purple-600" },
    { label: "View Pay What You Can", href: "/admin/pay-what-you-can-applications", color: "bg-orange-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name || "Admin"}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here's a quick overview of your platform today.
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pay What You Can Applications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Pay What You Can Applications
          </h3>
          <div className="space-y-3">
            {dashboard?.recent?.latest_pay_what_you_can?.length > 0 ? (
              dashboard.recent.latest_pay_what_you_can.map((item, i) => (
                <div
                  key={item.id || i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <p className="text-sm text-gray-800 dark:text-gray-200 truncate max-w-[70%]">
                    {item.business_name || "Unnamed Business"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(item.submitted_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">No recent applications.</p>
            )}
          </div>
        </div>

        {/* Recent Blogs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Blogs</h3>
          <div className="space-y-3">
            {dashboard?.recent?.latest_blogs?.length > 0 ? (
              dashboard.recent.latest_blogs.map((blog, i) => (
                <div
                  key={blog.id || i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <p className="text-sm text-gray-800 dark:text-gray-200 truncate max-w-[70%]">
                    {blog.title || "Untitled Blog"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(blog.posted_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">No recent blogs.</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${link.color} text-white px-5 py-4 rounded-lg flex items-center justify-between font-medium transition-transform duration-200 hover:scale-105`}
            >
              {link.label}
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
