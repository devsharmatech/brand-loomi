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
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from "lucide-react";

// Enhanced mock data for blog posts
const blogPosts = {
  "latest-blog-1": {
    id: 1,
    title: "The Future of Artificial Intelligence in Modern Web Development",
    excerpt: "Discover how AI is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user experiences.",
    content: `
      <h2>Introduction to AI-Powered Development</h2>
      <p>The landscape of web development is undergoing a massive transformation with the integration of Artificial Intelligence. What once seemed like science fiction is now becoming an integral part of our development workflows.</p>
      
      <blockquote>
        <p>"AI is not going to replace developers, but developers who use AI will replace those who don't."</p>
      </blockquote>
      
      <h3>Key AI Technologies Shaping Web Development</h3>
      <ul>
        <li><strong>Intelligent Code Completion:</strong> Tools like GitHub Copilot are changing how we write code</li>
        <li><strong>Automated Testing:</strong> AI-powered testing frameworks that can learn and adapt</li>
        <li><strong>Personalized User Experiences:</strong> Dynamic content based on user behavior</li>
        <li><strong>Voice Interface Integration:</strong> Building accessible voice-controlled applications</li>
        <li><strong>Automated Performance Optimization:</strong> AI-driven bundle optimization and caching strategies</li>
      </ul>
      
      <h3>Real-World Applications</h3>
      <p>Companies like Netflix and Spotify have been using AI for years to personalize user experiences. Now, these technologies are becoming accessible to developers of all levels.</p>
      
      <h3>Getting Started with AI in Your Projects</h3>
      <p>Begin by integrating simple AI APIs for features like sentiment analysis, image recognition, or chatbots. The barrier to entry has never been lower.</p>
    `,
    date: "June 22nd 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI & Development",
    author: "Sarah Chen",
    views: "2.4K",
    tags: ["Artificial Intelligence", "Web Development", "Future Tech", "Innovation"]
  },
  "all-blog-1": {
    id: 11,
    title: "UX vs UI Design: Mastering the Art of Digital Product Design",
    excerpt: "A comprehensive guide understanding the crucial differences between UX and UI design and how they work together to create exceptional digital experiences.",
    content: `
      <h2>The Fundamental Distinction</h2>
      <p>While UX (User Experience) and UI (User Interface) design are often used interchangeably, they represent two distinct but complementary disciplines in the digital product design process.</p>
      
      <div class="comparison-table">
        <h3>UX vs UI: Key Differences</h3>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>UX Design</th>
              <th>UI Design</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Focus</strong></td>
              <td>User journey and functionality</td>
              <td>Visual elements and aesthetics</td>
            </tr>
            <tr>
              <td><strong>Goal</strong></td>
              <td>Solve user problems</td>
              <td>Create beautiful interfaces</td>
            </tr>
            <tr>
              <td><strong>Process</strong></td>
              <td>Research, wireframes, testing</td>
              <td>Color, typography, layout</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>What is UX Design?</h3>
      <p>User Experience design focuses on the overall feel of the experience. It's about understanding user behaviors, needs, and motivations through observation and feedback.</p>
      
      <h3>What is UI Design?</h3>
      <p>User Interface design concentrates on the visual aspects and interactive elements that users engage with. It's the bridge between users and the digital product.</p>
      
      <h3>The Perfect Partnership</h3>
      <p>The most successful digital products emerge when UX and UI designers work collaboratively. Great UX without beautiful UI feels incomplete, while stunning UI without solid UX is frustrating to use.</p>
    `,
    date: "June 20th 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Design",
    author: "Marcus Johnson",
    views: "1.8K",
    tags: ["UX Design", "UI Design", "Product Design", "User Research"]
  },
  "react-best-practices-2025": {
    id: 2,
    title: "React Best Practices 2025: Building Scalable Applications",
    excerpt: "Explore the latest React patterns, hooks optimization, and architectural decisions that will make your applications more maintainable and performant.",
    content: `
      <h2>Modern React Development</h2>
      <p>As React continues to evolve, so do the best practices for building scalable and maintainable applications. Here's what you need to know in 2025.</p>
      
      <h3>Hook Optimization Strategies</h3>
      <ul>
        <li>Use useCallback and useMemo wisely to prevent unnecessary re-renders</li>
        <li>Implement custom hooks for reusable logic</li>
        <li>Leverage useTransition for better performance during state updates</li>
      </ul>
      
      <h3>Component Architecture</h3>
      <p>Move towards a more composable architecture where components are focused, testable, and reusable across your application.</p>
      
      <h3>State Management Evolution</h3>
      <p>With React's built-in state management capabilities improving, consider whether you really need external state management libraries.</p>
    `,
    date: "June 18th 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "React",
    author: "Alex Thompson",
    views: "3.2K",
    tags: ["React", "JavaScript", "Frontend", "Best Practices"]
  }
};

// Fallback content for any slug
const fallbackContent = {
  title: "Exploring the Digital Frontier",
  excerpt: "Join us as we dive into the latest trends and technologies shaping our digital world.",
  content: `
    <h2>Welcome to Our Digital Journey</h2>
    <p>This is a sample blog post showcasing our content structure and design. Every day brings new innovations and opportunities in the tech space.</p>
    
    <h3>What You'll Discover</h3>
    <ul>
      <li>Cutting-edge technologies</li>
      <li>Industry best practices</li>
      <li>Expert insights and analysis</li>
      <li>Practical tutorials and guides</li>
    </ul>
    
    <p>Stay tuned for regular updates and deep dives into the technologies that matter most.</p>
  `,
  date: "June 22nd 2025",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  category: "Technology",
  author: "Editorial Team",
  views: "1.2K",
  tags: ["Technology", "Innovation", "Digital Transformation"]
};

export default function BlogDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fullSlug = params.slug;
    
    if (fullSlug) {
      const slugString = Array.isArray(fullSlug) ? fullSlug[0] : fullSlug;
      const halfLength = Math.ceil(slugString.length / 2);
      const halfSlug = slugString.substring(0, halfLength);
      
      // Simulate API call delay
      setTimeout(() => {
        const blogData = blogPosts[slugString] || {
          ...fallbackContent,
          title: `Exploring ${slugString}`,
          content: `
            <h2>Deep Dive: ${slugString}</h2>
            <p>This is dynamically generated content exploring the topic of ${slugString}. The half slug for redirect would be: ${halfSlug}</p>
            <h3>Key Insights</h3>
            <ul>
              <li>Understanding core concepts</li>
              <li>Practical applications</li>
              <li>Future trends and predictions</li>
            </ul>
          `
        };
        
        setBlog(blogData);
        setLoading(false);
      }, 800);
    } else {
      setLoading(false);
    }
  }, [params.slug]);

  const handleShare = () => {
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
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-transparent-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/blogs"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:gap-3 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blogs</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
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

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {blog ? (
          <>
            {/* Article Header */}
            <header className="mb-12 text-center">
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

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-emerald-400" />
                  <span className="font-medium text-white">{blog.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-emerald-400" />
                  <span>{blog.date}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-emerald-400" />
                  <span>{blog.readTime}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-emerald-400" />
                  <span>{blog.views} views</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-emerald-400/50 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden mb-12 group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                Featured Image
              </div>
            </div>

            {/* Article Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                {/* Social Share */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="font-semibold text-white mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 p-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">
                      <Facebook size={18} />
                    </button>
                    <button className="flex-1 p-3 bg-sky-500 hover:bg-sky-600 rounded-xl transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button className="flex-1 p-3 bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{blog.author}</h3>
                    <p className="text-slate-400 text-sm">Senior Writer</p>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-invert max-w-none
                            prose-headings:text-white 
                            prose-p:text-slate-300 
                            prose-strong:text-white
                            prose-ul:text-slate-300
                            prose-ol:text-slate-300
                            prose-li:text-slate-300
                            prose-li:marker:text-emerald-400
                            prose-a:text-emerald-400 hover:prose-a:text-emerald-300
                            prose-blockquote:border-emerald-400
                            prose-blockquote:bg-emerald-500/10
                            prose-blockquote:rounded-2xl
                            prose-blockquote:p-6
                            prose-table:bg-slate-800/50
                            prose-table:rounded-xl
                            prose-th:bg-slate-700
                            prose-td:border-slate-600
                            prose-img:rounded-xl
                            prose-img:shadow-2xl"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex gap-3">
                      <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2">
                        <MessageCircle size={18} />
                        Leave a Comment
                      </button>
                    </div>
                    
                    <div className="flex gap-2 text-slate-400">
                      <span>Share:</span>
                      <button className="hover:text-white transition-colors">Twitter</button>
                      <span>•</span>
                      <button className="hover:text-white transition-colors">LinkedIn</button>
                      <span>•</span>
                      <button className="hover:text-white transition-colors">Copy Link</button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-slate-800/50 rounded-3xl p-12 border border-slate-700 max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
              <p className="text-slate-400 text-lg mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
              >
                <ArrowLeft size={20} />
                Back to All Blogs
              </Link>
            </div>
          </div>
        )}
      </article>

      {/* Related Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Continue Reading
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover more insightful articles on related topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(blogPosts).slice(0, 3).map(([slug, post]) => (
            <Link key={slug} href={`/blogs/${slug}`}>
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>{post.date}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}