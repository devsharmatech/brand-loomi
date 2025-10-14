import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";
import { CheckCircle2 } from "lucide-react";
export default function Page() {
  const heading = "Mobile Application Development";
  const subheading = `In a mobile-first world, 
                    your customers expect seamless experiences on the go.
                    We design and develop custom mobile apps for iOS and Android that help you connect,
                    engage, and grow—whether you’re launching a new product or digitizing your services.`;

  const btntext = "Let's Discuss";
  const btnlink = "#";
  const deliverables = [
    "Customer Apps: E-commerce, loyalty, booking, and delivery.",
    "Business Tools: Internal apps for workflow, inventory, or reporting.",
    "Community & Social Apps: Forums, chat, and networking.",
    "Event & Utility Apps: Scheduling, reminders, and notifications.",
  ];

  const techStack = [
    "Languages: Swift (iOS), Kotlin (Android), Dart (Flutter), JavaScript (React Native)",
    "Frameworks: Flutter, React Native, Xamarin",
    "Backend: Firebase, AWS Amplify, Node.js, Django REST",
    "APIs: Payment gateways, Google Maps, Push Notifications",
    "Testing: Appium, XCTest, Espresso",
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
      icon: <CheckCircle2 className="w-6 h-6 text-text-white" />,
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
      <WhyChooseUs2 features={features} />
      <Testimonials />
      <FooterCTASubscription
        footerHeading="Ready to build your competitive edge?"
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
