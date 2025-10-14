import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";
import { CheckCircle2 } from "lucide-react";
import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";

export default function Page() {
  const heading = "Social and Digital Media Marketing";

  const subheading = `Your online presence is your most valuable asset.
                      Our digital marketing team crafts data-driven campaigns that boost visibility,
                      generate leads, and turn followers into loyal customers.
                      From strategy to execution, we help you stand out in a crowded digital world.`;

  const btntext = "Let's Discuss";
  const btnlink = "#";

  const deliverables = [
    "Social Media Management: Content calendars, posting, and community engagement.",
    "Paid Advertising: Google Ads, Facebook/Instagram Ads, LinkedIn Campaigns.",
    "SEO & Content Marketing: Blog writing, keyword research, on-page optimization.",
    "Email Marketing: Campaign design, automation, and list management.",
    "Influencer & Affiliate Marketing: Partnerships that expand your reach.",
  ];

  const techStack = [
    "SEO: SEMrush, Ahrefs, Moz, Google Search Console",
    "Social Media: Hootsuite, Buffer, Sprout Social",
    "Email: Mailchimp, SendGrid, HubSpot",
    "Analytics: Google Analytics, Facebook Insights, Data Studio",
    "Ads: Google Ads, Meta Ads Manager, LinkedIn Campaign Manager",
  ];
  const steps = [
    "Audit & Strategy",
    "Content Planning",
    "Campaign Launch",
    "Optimization",
  ];

   const features = [
    {
      title: "Transparent Reporting",
      description: "Know exactly where your budget goes.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Multi-Channel Expertise",
      description: "Reach your audience wherever they are.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      title: "Growth Focused",
      description: "Every campaign designed to deliver ROI.",
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
