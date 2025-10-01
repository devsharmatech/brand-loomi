import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import SubscribeAbout from "@/components/SubscribeAbout";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";

export default function Page() {
  const heading = "Startup Consulting";

  const subheading = `Launching a startup is exciting but comes with challenges. 
We guide entrepreneurs through every stage—from ideation and validation 
to scaling and securing funding. Our consulting services empower startups 
to make smarter decisions, reduce risks, and accelerate growth.`;

  const btntext = "Get Expert Advice";
  const btnlink = "#";

  const deliverables = [
    "Business Strategy: Roadmaps, market entry plans, and competitive analysis.",
    "Pitch Decks & Fundraising: Investor-ready presentations and financial models.",
    "MVP Development Guidance: From idea to functional prototype.",
    "Go-to-Market (GTM) Strategy: Positioning, pricing, and launch plans.",
    "Growth Hacking: Scalable tactics for traction and customer acquisition.",
  ];

  const techStack = [
    "Project Management: Notion, Trello, Asana",
    "Collaboration: Slack, Microsoft Teams, Zoom",
    "Analytics: Google Analytics, Mixpanel, Tableau",
    "Prototyping: Figma, InVision, Balsamiq",
    "Financial Tools: QuickBooks, Xero, Excel Models",
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
