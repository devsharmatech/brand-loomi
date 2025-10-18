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
const faqs = [
  {
    q: "What types of software do you develop?",
    a: "We build a wide range of digital solutions including web applications, mobile apps, eCommerce platforms, SaaS products, and custom business software — all tailored to your specific needs.",
  },
  {
    q: "Can you integrate with my existing systems or APIs?",
    a: "Absolutely! We specialize in seamless integration with third-party APIs, CRMs, payment gateways, and other existing systems to ensure smooth data flow and enhanced functionality.",
  },
  {
    q: "What programming languages and frameworks do you use?",
    a: "We work with modern and scalable technologies such as JavaScript, TypeScript, Next.js, React, Node.js, Laravel, and Python — ensuring high performance and flexibility for every project.",
  },
  {
    q: "How do you ensure software quality and reliability?",
    a: "We follow rigorous QA processes, automated and manual testing, continuous integration, and code reviews to ensure every product is secure, stable, and reliable before launch.",
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
      <FAQ faqs={faqs} />
      <FooterCTASubscription
        footerHeading="From scratch to scale — we engineer what you imagine."
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
