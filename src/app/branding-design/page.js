import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";
import FooterCTASubscription from "@/components/FooterCTASubscription";

export default function Page() {
  const heading = "Branding & Design";

const subheading = `Your brand is your story. We help you tell it with clarity, creativity, and consistency—through stunning visuals, compelling messaging, and cohesive design assets. Whether you’re launching or rebranding, we’ll make sure you leave a lasting mark.`;

const btntext = "Build My Brand";
const btnlink = "#";

const deliverables = [
  "Brand Strategy: Mission, vision, values, and positioning.",
  "Logo Design: Unique, versatile, and memorable.",
  "Visual Identity: Color palettes, typography, iconography, imagery.",
  "Brand Guidelines: Rules for consistent application everywhere.",
  "Marketing Collateral: Business cards, presentations, social templates."
];

const techStack = [
  "Design: Adobe Creative Suite (Photoshop, Illustrator, XD), Figma, Canva",
  "Prototyping: Figma, InVision",
  "Collaboration: Miro, Slack, Notion",
];
 const steps = [
    "Brand Audit",
    "Strategy Development", 
    "Creative Exploration",
    "Finalization",
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
