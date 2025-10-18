import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";
import { CheckCircle2 } from "lucide-react";
import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import DeliverTechStack from "@/components/DeliverTechStack";

export default function Page() {
  const heading = "Startup Consulting";

  const subheading = `Starting a business is hard. We make it easier. Our startup consulting service guides you from idea to launch and beyond, helping you avoid common pitfalls, secure funding, and build a foundation for sustainable growth.`;

  const btntext = "Let's Discuss";
  const btnlink = "#";

  const deliverables = [
    "Business Model Validation: Test your idea, refine your value proposition.",
    "Go-to-Market Strategy: Positioning, pricing, and launch planning.",
    "Grant & Funding Support: Application guidance and pitch deck creation.",
    "Mentorship: Ongoing advice from experienced founders and operators.",
    "Resource Library: Templates, checklists, and best practices.",
  ];

  const techStack = [
    "Workshops: Interactive sessions to clarify vision and strategy.",
    "Market Research: Data-driven insights into your industry and competitors.",
    "Financial Planning: Budgeting, forecasting, and investor readiness.",
    "Network Access: Connect with investors, partners, and talent.",
  ];
  const steps = [
    "Workshops",
    "Market Research",
    "Financial Planning",
    "Network Access",
  ];
  const features = [
    {
      title: "Startup Specialists",
      description: "We’ve launched and scaled businesses ourselves.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Practical, Actionable Advice",
      description: "No fluff—just what works.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Long-Term Partnership",
      description: "We’re invested in your journey.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
  ];
  const faqs = [
    {
      q: "What does your startup consulting cover?",
      a: "Our startup consulting covers everything from business strategy, product-market fit, and brand positioning to marketing, funding preparation, and growth planning.",
    },
    {
      q: "Who delivers the consulting sessions?",
      a: "All sessions are led by experienced startup consultants and industry experts who have hands-on experience in building and scaling businesses.",
    },
    {
      q: "How are consulting sessions structured?",
      a: "Sessions are typically 60–90 minutes long and can be conducted virtually or in person. Each session is customized to your startup’s specific goals and challenges.",
    },
    {
      q: "Can you help me prepare for investor meetings?",
      a: "Yes! We assist with pitch deck creation, investor communication strategies, and financial projections to help you confidently present your startup to potential investors.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroServiceInner
        heading={heading}
        subheading={subheading}
        btntext={btntext}
        btnlink={btnlink}
      />
      <DeliverTechStack deliverables={deliverables} techStack={techStack} />
      <OurProcess steps={steps} />
      <WhyChooseUs2 features={features} />
      <Testimonials />
      <FAQ faqs={faqs} />
      <FooterCTASubscription
        footerHeading="Ideas are fragile — we help yours survive the chaos."
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
