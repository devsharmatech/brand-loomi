"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Eye,
  User,
  Tag,
} from "lucide-react";


export default function BlogDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // Helper function to render Editor.js blocks
  const renderEditorJsBlocks = (blocks) => {
    return blocks.map((block) => {
      const { type, data, id } = block;

      switch (type) {
        case "header":
          const Tag = `h${data.level || 2}`;
          return (
            <Tag key={id} className="my-4 font-bold text-white">
              {data.text}
            </Tag>
          );

        case "paragraph":
          return (
            <p key={id} className="my-2 text-slate-300">
              {data.text}
            </p>
          );

        case "list":
          let ListTag = "ul";
          if (data.style === "ordered") ListTag = "ol";
          return (
            <ListTag key={id} className={`my-2 ml-6 list-${data.style}`}>
              {data.items.map((item, index) => (
                <li key={index} className="text-slate-300">
                  {item.content}
                  {item.items && item.items.length > 0 && (
                    <div className="ml-4">
                      {renderEditorJsBlocks(item.items)}
                    </div>
                  )}
                </li>
              ))}
            </ListTag>
          );

        default:
          return null;
      }
    });
  };

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    // Fetch blog from API
    fetch(`/api/ui-blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blog); // Make sure you use "data.data" from API response
        setRelatedPosts(data.related || []);
        setLoading(false);

        // Check if bookmarked in localStorage
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setIsBookmarked(bookmarks.includes(slug));
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((b) => b !== slug);
    } else {
      updatedBookmarks = [...bookmarks, slug];
    }
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (!blog) return;
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-slate-800/50 rounded-3xl p-12 border border-slate-700 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-slate-400 text-lg mb-8">
            The blog post you are looking for does not exist or may have been removed.
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Blogs
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isBookmarked
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                <Bookmark size={18} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-5 text-center">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium mb-6 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <Tag size={14} />
            <span>{blog.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-emerald-400" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-400" />
              {new Date(blog.created_at).toLocaleDateString()}
            </div>
           
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 group">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>

        {/* Editor.js Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {renderEditorJsBlocks(blog.content.blocks)}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`}>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer hover:scale-105">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-400">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
