import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";
import FooterCTASubscription from "@/components/FooterCTASubscription";
import FAQ from "@/components/FAQ";
import { CheckCircle2 } from "lucide-react";

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
    "Marketing Collateral: Business cards, presentations, social templates.",
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

  const features = [
    {
      title: "Experienced Designers",
      description: "Award-winning creative team.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Strategic Approach",
      description: "Design that supports your business goals.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Full-Service",
      description: "From concept to launch, we’ve got you covered.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
  ];
  const faqs = [
    {
      q: "What branding services do you provide?",
      a: "We offer comprehensive branding services including strategy, logo design, brand identity, tone of voice, and visual assets to help establish a consistent and memorable presence for your business.",
    },
    {
      q: "Can you refresh or redesign my existing brand?",
      a: "Yes! We specialize in brand refreshes and redesigns — updating your visuals, messaging, and positioning to align with your current goals while maintaining your core brand essence.",
    },
    {
      q: "What is included in a typical branding package?",
      a: "Our branding packages typically include logo design, color palette, typography, brand guidelines, and visual identity assets — tailored to your business and target audience.",
    },
    {
      q: "How long does a branding project take?",
      a: "A branding project usually takes around 2–4 weeks depending on the scope, feedback rounds, and deliverables involved.",
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
        footerHeading="We don’t just design logos — we shape legacies."
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
