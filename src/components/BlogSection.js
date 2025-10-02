"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function BlogSection() {
  const swiperRef = useRef(null);

  // Generate 10 latest blogs
  const latestBlogs = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    slug: `latest-blog-${i + 1}`,
    title: `Latest Blog Post ${i + 1}`,
    date: "June 22nd 2025",
    readTime: "5 min read",
    image: `https://picsum.photos/400/300?random=${i + 1}`,
  }));

  // Generate 10 all blogs
  const allBlogs = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    slug: `all-blog-${i + 1}`,
    title: `All Blog Post ${i + 1}`,
    description:
      "Explore the differences between UX and UI design. Gain clarity on their roles to craft intuitive digital experiences.",
    date: "June 22nd 2025",
    readTime: "5 min read",
    image: `https://picsum.photos/400/300?random=${i + 20}`,
  }));

  return (
    <section>
      <div className="bg-white w-full py-5">
        <div className=" max-w-7xl mx-auto mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blogs</h2>
            <div className="flex gap-3">
              <button
                className="latest-prev-btn p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-md"
                aria-label="Previous blogs"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="latest-next-btn p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-md"
                aria-label="Next blogs"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={24}
            navigation={{
              prevEl: ".latest-prev-btn",
              nextEl: ".latest-next-btn",
            }}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 2.1 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="mb-8"
          >
            {latestBlogs.map((blog) => (
              <SwiperSlide key={blog.id} className="py-8">
                <Link href="#">
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-emerald-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        New
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span className="font-medium">{blog.date}</span>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mb-16 max-w-7xl py-8 mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">All Blogs</h2>
        <div className="space-y-6">
          {allBlogs.map((blog) => (
            <Link key={blog.id} href="#">
              <div className="group mb-5 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:from-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-500/30">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative overflow-hidden rounded-xl md:w-48 md:flex-shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full  md:h-32 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-emerald-400 font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {blog.date}
                      </span>
                      <span className="text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
