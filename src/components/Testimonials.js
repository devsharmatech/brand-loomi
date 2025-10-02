"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "We got our website live in under four weeks and for less than half the price quoted elsewhere. The team's support was phenomenal!",
      name: "Anna M",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Amazing experience! The process was smooth, and the outcome exceeded our expectations. Will definitely work with them again.",
      name: "James P",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "A highly skilled and supportive team. They delivered everything on time and with outstanding quality. Highly recommended!",
      name: "Sophia L",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Outstanding service and incredible attention to detail. Our project was completed ahead of schedule with exceptional quality.",
      name: "Michael T",
      role: "Tech Director",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The team transformed our vision into reality with precision and creativity. The entire process was seamless and professional.",
      name: "Emma R",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-transparent to-slate-950 text-white px-6 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16"
        >
          <div className="mb-8 lg:mb-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Testimonials</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white italic">
              LOVED BY OUR USERS
            </h2>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center">
              <motion.h3
                className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                50+
              </motion.h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <motion.h3
                className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                4.9
              </motion.h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Slider Section */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="flex justify-end gap-4 mb-8">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(6, 182, 212, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-prev-custom w-12 h-12 rounded-full border border-cyan-500/30 bg-white/5 flex items-center justify-center hover:border-cyan-400 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(6, 182, 212, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-next-custom w-12 h-12 rounded-full border border-cyan-500/30 bg-white/5 flex items-center justify-center hover:border-cyan-400 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white" />
            </motion.button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, EffectCards]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="cards"
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial-swiper max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-slate-800/100 to-slate-900/100 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <blockquote className="text-xl leading-relaxed text-gray-200 mb-8 pl-4">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Profile */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover border-2 border-cyan-500/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-cyan-300">{testimonial.role}</p>
                    </div>
                  </motion.div>

                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-bl-3xl"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center items-center gap-2 mt-8"
          >
            <span className="text-cyan-400 font-semibold">01</span>
            <div className="w-20 h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>
            <span className="text-gray-400">05</span>
          </motion.div>
        </div>

        {/* Bottom Cards Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mini-cards-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/50 backdrop-blur-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-cyan-300 truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-gray-800 mt-16"
        ></motion.div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          padding: 20px 0;
        }

        .testimonial-swiper .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .testimonial-swiper .swiper-slide-active {
          opacity: 1;
        }

        .mini-cards-swiper {
          padding: 10px 0;
        }

        .mini-cards-swiper .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .mini-cards-swiper .swiper-slide:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
