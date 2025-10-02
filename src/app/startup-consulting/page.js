import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
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

  return (
    <div className="min-h-screen">
      <HeroServiceInner
        heading={heading}
        subheading={subheading}
        btntext={btntext}
        btnlink={btnlink}
      />
      <DeliverTechStack deliverables={deliverables} techStack={techStack} />
      <OurProcess steps={steps}/>
      <WhyChooseUs2 />
      <Testimonials />
       <FooterCTASubscription
              footerHeading="Ready to build your competitive edge?"
              footer_btntext="Get Started"
            />
      <Footer />
    </div>
  );
}
