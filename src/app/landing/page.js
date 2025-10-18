import HeroHome from "@/components/HeroHome";
import ProcessSectionEnhanced from "@/components/ProcessSectionEnhanced";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WorkInquiriesSection from "@/components/WorkInquiriesSection";
import Footer from "@/components/Footer";
import WhoWeAreLanding from "@/components/WhoWeAreLanding";
import BrandServicesEnhanced from "@/components/BrandServicesEnhanced";

export default function page() {
  const faqs = [
    {
      q: "How much does a website/app cost?",
      a: "The cost depends on your project’s complexity, features, and design requirements. We provide a transparent quote after understanding your goals and desired outcomes.",
    },
    {
      q: "What's your refund policy?",
      a: "We offer partial refunds based on the project stage. If work has not yet started, you’re eligible for a full refund. Once design or development begins, we’ll discuss fair compensation for completed work.",
    },
    {
      q: "How do I apply for Pay What You Can?",
      a: "You can apply through our official form on the website. Just share your project idea, budget range, and timeline — we’ll review your submission and get back to you with available options.",
    },
    {
      q: "What's included in the monthly retainer?",
      a: "Our monthly retainer typically covers website maintenance, performance monitoring, minor updates, content changes, and technical support — ensuring your platform runs smoothly at all times.",
    },
    {
      q: "How long does it take to launch?",
      a: "Launch timelines vary depending on the project’s scope. Most websites take 2–4 weeks, while apps or complex platforms may take 2–3 months. We always provide a clear timeline before starting.",
    },
    {
      q: "How does your process work after I contact you?",
      a: "After you contact us, we schedule a discovery call to understand your vision, goals, and budget. Then we create a proposal, start the design phase, and move step by step — keeping you updated throughout.",
    },
    {
      q: "What tech stack do you use?",
      a: "We use modern, scalable technologies like Next.js, React, Tailwind CSS, Node.js, Laravel, and various APIs or cloud platforms to build fast and reliable products.",
    },
    {
      q: "What platforms or technologies do you use for development?",
      a: "Our team works across web, mobile, and backend platforms using technologies like React Native, Next.js, Node.js, and Firebase — ensuring flexibility, performance, and security.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroHome />
      <WhoWeAreLanding />
      <BrandServicesEnhanced heading="SERVICES" />
      <ProcessSectionEnhanced />
      <Testimonials />
      <FAQ faqs={faqs} />
      <WorkInquiriesSection />

      <Footer />
    </div>
  );
}
