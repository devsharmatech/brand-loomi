import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import SubscribeAbout from "@/components/SubscribeAbout";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";

export default function Page() {
  const heading = "Branding & Design";

const subheading = `Your brand is more than just a logo—it’s the story, 
emotion, and personality that connect you with your audience. 
We create powerful brand identities and stunning designs that 
make lasting impressions and position your business ahead of the competition.`;

const btntext = "Build My Brand";
const btnlink = "#";

const deliverables = [
  "Brand Identity: Logo design, typography, and brand color palettes.",
  "Visual Assets: Social media graphics, marketing materials, and print designs.",
  "UI/UX Design: User-centered web and mobile app interfaces.",
  "Packaging Design: Creative, functional, and brand-aligned packaging solutions.",
  "Brand Guidelines: Consistent standards for digital and print usage."
];

const techStack = [
  "Design Tools: Adobe Photoshop, Illustrator, InDesign, XD",
  "UI/UX Tools: Figma, Sketch, InVision, Framer",
  "Prototyping: Marvel, Axure, Principle",
  "Collaboration: Miro, Notion, Slack integrations",
  "File Formats: SVG, PNG, PDF, EPS for versatile usage"
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
      <OurProcess />
      <WhyChooseUs2 />
      <Testimonials />
      <SubscribeAbout
        heading="Ready to build your competitive edge?"
        btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
