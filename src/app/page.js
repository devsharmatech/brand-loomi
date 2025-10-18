import HeroHome from "@/components/HeroHome";
import BrandServicesEnhanced from "@/components/BrandServicesEnhanced";
import ProcessSectionEnhanced from "@/components/ProcessSectionEnhanced";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import EmpowerEntrepreneurs from "@/components/EmpowerEntrepreneurs";

export default function page() {
  const footerHeading = `Ready to <span class="text-cyan-400"> Launch </span> Your Business Online?`;
  const footer_btntext = "Get Started";
  const faqs = [
    {
      q: "How can you offer such affordable prices?",
      a: "We optimize processes, leverage automation, and cut unnecessary costs to deliver high-quality work at lower rates without compromising on quality or service.",
    },
    {
      q: "Do I need technical knowledge to work with you?",
      a: "No technical knowledge required! We handle all the technical details and keep communication simple and clear for you throughout the entire process.",
    },
    {
      q: "How does your process work after I contact you?",
      a: "We start with a free consultation to understand your needs, create a customized plan, and then move step by step while keeping you updated at every milestone.",
    },
    {
      q: "What platforms or technologies do you use for development?",
      a: "We work with modern, scalable technologies including Next.js, React, Tailwind CSS, Node.js, and various cloud solutions to ensure optimal performance.",
    },
    {
      q: "Can you customize solutions for my specific needs?",
      a: "Absolutely! Every project is uniquely tailored to your goals, budget, timeline, and specific business requirements.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Timelines vary based on complexity, but we typically deliver small projects in 2-4 weeks and larger solutions within 2-3 months.",
    },
    {
      q: "What if I need support after the project is done?",
      a: "We provide comprehensive ongoing support and maintenance packages to ensure everything runs smoothly long-term.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes! We collaborate with clients worldwide through remote tools and maintain clear communication across all time zones.",
    },
  ];
  return (
    <div className="min-h-screen">
      <HeroHome />
      <EmpowerEntrepreneurs />
      <BrandServicesEnhanced />
      <ProcessSectionEnhanced />
      <Testimonials />
      <FAQ faqs={faqs} />
      <FooterCTASubscription
        footerHeading={footerHeading}
        footer_btntext={footer_btntext}
      />
      <Footer />
    </div>
  );
}
