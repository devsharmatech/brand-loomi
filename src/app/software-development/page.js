import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";
import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";
import { CheckCircle2 } from "lucide-react";
export default function Page() {
  const heading = "Software Development";
  const subheading = `At 
            <span className="text-white font-medium">[Your Agency Name]</span>,
            we believe every business challenge deserves a unique solution. Our
            custom software development service is designed for startups and
            SMEs who want to streamline operations, automate workflows, and
            unlock new growth opportunities. We don’t just write code—we
            architect the systems that power your future.`;

  const btntext = "Let's Discuss";
  const btnlink = "#";
  const deliverables = [
    "Bespoke Platforms",
    "Process Automation",
    "API Integrations",
    "Legacy System Modernization",
  ];

  const techStack = [
    "Languages: Python, JavaScript (Node.js), Java, C#, PHP",
    "Frameworks: Django, .NET, Express.js, Laravel, Spring Boot",
    "Frontend: React, Next.js, Vue.js, Angular, TypeScript",
    "Cloud & DevOps: AWS, Azure, Google Cloud, Docker, Kubernetes, GitHub Actions",
  ];
  const steps = [
    "Discovery & Requirements",
    "Solution Architecture",
    "Agile Development",
    "Testing & QA",
    "Deployment & Support",
  ];

   const features = [
    {
      title: "Affordable",
      description: "Startup-friendly pricing, no compromise on quality.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Speed to Market",
      description: "MVPs delivered in as little as 4 weeks.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Ongoing Partnership",
      description: "Updates, analytics, and feature enhancements.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
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
      <WhyChooseUs2 features={features}/>
      <Testimonials />
      <FooterCTASubscription
        footerHeading="Ready to build your competitive edge?"
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
