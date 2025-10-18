"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  GraduationCap,
  Plane,
  HeartPulse,
  ShoppingCart,
  Utensils,
  Landmark,
} from "lucide-react";

const industries = [
  {
    title: "EdTech",
    description:
      "Empowering learning in the digital age. From e-learning platforms and school portals to mobile apps for institutions, we help educators build meaningful online experiences that engage, inform, and inspire.",
    offers: [
      "Learning Management Systems (LMS)",
      "Resource libraries & calendar integrations",
      "Student registration & payment portals",
      "Mobile-friendly design for students & faculty",
    ],
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "TravelTech",
    description:
      "Enabling seamless journeys — online and beyond. We build intuitive booking systems, visually rich travel blogs, and scalable web apps for agencies, hosts, and wanderlust-driven brands.",
    offers: [
      "Custom booking engines",
      "Travel blogs with storytelling tools",
      "Trip planners & itinerary builders",
      "Payment integration & review systems",
    ],
    icon: <Plane className="w-6 h-6 text-white" />,
  },
  {
    title: "HealthTech",
    description:
      "Secure, user-friendly digital care solutions. We design platforms that prioritize trust, accessibility, and compliance — from clinic websites to healthtech dashboards.",
    offers: [
      "Appointment booking systems",
      "Patient portals & practitioner profiles",
      "HIPAA/GDPR-compliant forms",
      "Telemedicine integrations & health tracking",
    ],
    icon: <HeartPulse className="w-6 h-6 text-white" />,
  },
  {
    title: "Ecommerce",
    description:
      "Powering online retail with scalable storefronts and smooth checkout flows. From custom product catalogs to seamless payment gateways, we help businesses thrive online.",
    offers: [
      "Custom online stores",
      "Shopping cart & checkout systems",
      "Inventory & order management",
      "Payment gateways & analytics dashboards",
    ],
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
  },
  {
    title: "FoodTech",
    description:
      "Transforming food businesses with smart ordering and delivery solutions. We design apps and platforms that connect restaurants, kitchens, and customers effortlessly.",
    offers: [
      "Restaurant ordering systems",
      "Delivery tracking & logistics",
      "Menu & inventory management",
      "Customer loyalty programs",
    ],
    icon: <Utensils className="w-6 h-6 text-white" />,
  },
  {
    title: "FinTech",
    description:
      "Building secure, innovative financial platforms. From digital wallets to investment dashboards, we create tools that make finance simple and accessible.",
    offers: [
      "Digital wallets & payment solutions",
      "Personal finance dashboards",
      "Investment & trading platforms",
      "Fraud detection & compliance tools",
    ],
    icon: <Landmark className="w-6 h-6 text-white" />,
  },
];

export default function Industries() {
  return (
    <section className="py-16  bg-transparent max-w-7xl mx-auto text-white">
      {/* Section Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold italic">
          Industries
        </h2>
        <div className="flex-1 ml-4 border-b border-neutral-700"></div>
      </div>

      <div className="space-y-12">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="rounded-2xl bg-gradient-to-r from-[#087b6569] via-transparent to-[#087b6569] p-4 sm:p-8 md:p-12 shadow-[0_0_20px_rgba(0,0,0,0.2)] mb-4"
          >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl flex items-center font-bold text-emerald-400">
              <div className="flex items-center justify-center  w-12 h-12 rounded-full bg-emerald-400 text-white mr-4 shrink-0">
                {industry.icon}
              </div>
              {industry.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-neutral-300 max-w-3xl leading-relaxed">
              {industry.description}
            </p>

            {/* Offers */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">What we offer</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10">
                {industry.offers.map((offer, i) => (
                  <div key={i} className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-neutral-200">{offer}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
