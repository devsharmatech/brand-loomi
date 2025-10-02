"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";

export default function TestimonialSliderYouWhat() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Anna M",
      role: "Startup Founder",
      text: "Thanks to the Pay What You Can program we launched our bakery’s website for just €250. Our online orders tripled in the first month!",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "John D",
      role: "App Founder",
      text: "We could never have afforded a professional launch without this program. It gave us the boost we needed to scale.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-transparent">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // save swiper instance
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gradient-to-r from-cyan-950/40 to-cyan-900/40 rounded-3xl p-8 flex items-center justify-between gap-6">
              {/* Left - User Info */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    unoptimized
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.role}</p>
                  <p className="text-gray-200 max-w-lg">{item.text}</p>
                </div>
              </div>

              {/* Right - Custom Next Button */}
              <div
                onClick={() => swiperRef.current.slideNext()} // 👈 move to next slide
                className="flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center cursor-pointer hover:bg-cyan-500/30 transition">
                  <ChevronRight className="text-cyan-400" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
