import HeroServiceInner from "@/components/HeroServiceInner";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Testimonials from "@/components/Testimonials";

import SubscribeAbout from "@/components/SubscribeAbout";
import Footer from "@/components/Footer";
import DeliverTechStack from "@/components/DeliverTechStack";

export default function Page() {
  const heading = "Digital Media Marketing";

  const subheading = `Your brand’s online presence defines how the world sees you. 
We craft data-driven digital marketing strategies that enhance visibility, 
engage audiences, and drive measurable results. From social media campaigns 
to performance marketing, we help businesses grow in the digital landscape.`;

  const btntext = "Boost My Brand";
  const btnlink = "#";

  const deliverables = [
    "Social Media Marketing: Facebook, Instagram, LinkedIn, and Twitter campaigns.",
    "Search Engine Optimization (SEO): Higher rankings, more traffic, better leads.",
    "Pay-Per-Click Advertising (PPC): Google Ads, Meta Ads, and retargeting campaigns.",
    "Content Marketing: Blogs, videos, and creative assets that convert.",
    "Email Marketing: Automated, personalized campaigns to nurture leads.",
    "Influencer Marketing: Strategic collaborations to expand brand reach.",
  ];

  const techStack = [
    "Social Media Tools: Meta Business Suite, Buffer, Hootsuite",
    "SEO Tools: Ahrefs, SEMrush, Moz, Google Search Console",
    "PPC Platforms: Google Ads, Meta Ads Manager, LinkedIn Ads",
    "Analytics: Google Analytics, Hotjar, Mixpanel",
    "Email Tools: Mailchimp, Klaviyo, SendGrid",
    "Design & Content: Canva, Adobe Creative Suite, Figma",
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
