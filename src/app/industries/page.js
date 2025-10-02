import HeroIndustries from "@/components/HeroIndustries";
import IndustriesAll from "@/components/IndustriesAll";

import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import WhyChooseUs3 from "@/components/WhyChooseUs3";

export default function Page() {
  const heading = "Digital Solutions for Every Sector";
  const subheading = "We specialise in transforming businesses across a range of industries, tailoring our approach to your unique needs.";   


  return (
    <div className="min-h-screen">
      <HeroIndustries heading={heading} subheading={subheading} />
      <IndustriesAll/>
     
      <WhyChooseUs3/>
      <FooterCTASubscription footerHeading="Looking for industry-specific expertise?" footer_btntext="Get Started" />
      <Footer />
    </div>
  );
}
