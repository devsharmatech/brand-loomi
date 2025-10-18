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
  const heading = "Web Application Development";
  const subheading = `Your website is your business’s digital headquarters.
                   We specialize in building high-performance web applications that engage users, 
                   drive conversions, and scale with your ambitions. From MVPs for startups to robust platforms
                  for growing businesses, we deliver web solutions that work.`;

  const btntext = "Let's Discuss";
  const btnlink = "#";
  const deliverables = [
    "Business Websites: Corporate, portfolio, and landing pages.",
    "E-commerce Stores: Secure, scalable, and conversion-focused.",
    "SaaS Platforms: Subscription, membership, and community apps.",
    "Booking & Event Apps: Real-time scheduling, payments, and notifications.",
  ];

  const techStack = [
    "Frontend: React.js, Vue.js, Angular, HTML5, CSS3, SASS",
    "Backend: Node.js, Express, Django, Laravel, Ruby on Rails",
    "CMS: WordPress, Strapi, Contentful",
    "E-commerce: Shopify, WooCommerce, Magento",
    "APIs: REST, GraphQL, Stripe, PayPal, Google Maps",
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
      title: "Lightning Fast",
      description: "Average delivery in 2–4 weeks.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Conversion-Focused",
      description: "Every pixel designed to drive results.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Transparent",
      description: "No hidden fees, clear timelines, and ongoing support.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
  ];
  const faqs = [
    {
      q: "What types of websites do you build?",
      a: "We design and develop all kinds of websites — from business and portfolio sites to eCommerce platforms, landing pages, and custom web applications — each tailored to your brand and goals.",
    },
    {
      q: "Are your websites mobile-friendly and responsive?",
      a: "Yes, every website we build is fully responsive and optimized for all devices. We ensure your site looks and functions beautifully on mobile, tablet, and desktop screens.",
    },
    {
      q: "How long does it take to launch a website?",
      a: "Launch time depends on the project’s size and complexity. A basic website can be ready in 2–3 weeks, while more complex or custom builds typically take 4–8 weeks.",
    },
    {
      q: "Can you redesign or update my existing website?",
      a: "Absolutely! We can refresh your current design, improve performance, enhance UX/UI, or rebuild your site entirely to meet modern standards and your evolving business needs.",
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
        footerHeading="Your browser is about to meet its favorite build."
        footer_btntext="Get Started"
      />
      <Footer />
    </div>
  );
}
