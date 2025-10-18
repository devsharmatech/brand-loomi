import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";
import FAQ from "@/components/FAQ";
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
  const faqs = [
    {
      q: "What types of mobile apps do you develop?",
      a: "We develop a wide range of mobile applications including eCommerce apps, on-demand services, social platforms, business tools, and custom enterprise solutions for both Android and iOS.",
    },
    {
      q: "Can you help me validate my app idea?",
      a: "Yes, definitely! We offer idea validation sessions where we discuss your concept, target audience, and business goals — helping you refine your idea before development begins.",
    },
    {
      q: "How long does it take to develop a mobile app?",
      a: "App development timelines vary depending on complexity and features. Simple apps can take around 4–6 weeks, while more advanced or feature-rich apps may take 2–3 months or more.",
    },
    {
      q: "What technologies do you use for app development?",
      a: "We use modern frameworks like React Native and Flutter for cross-platform apps, as well as native technologies like Swift (iOS) and Kotlin (Android) to ensure top performance and scalability.",
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
        footerHeading="Tap into the market with an app they can’t put down."
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
