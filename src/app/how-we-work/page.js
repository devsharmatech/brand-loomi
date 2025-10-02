import HeroHWW from "@/components/HeroHWW";
import ProcessSteps from "@/components/ProcessSteps";

import FooterCTASubscription from "@/components/FooterCTASubscription";
import Footer from "@/components/Footer";
import WhyChooseUs3 from "@/components/WhyChooseUs3";
import ProcessSectionEnhanced from "@/components/ProcessSectionEnhanced";

export default function Page() {
  const heading = "How We Work, Our Process:";
  const subheading = "Transparent, Collaborative, Proven";   


  return (
    <div className="min-h-screen">
      <HeroHWW heading={subheading} subheading={heading} />
      <ProcessSectionEnhanced/>
      <ProcessSteps/>
     
      <WhyChooseUs3/>
      <FooterCTASubscription footerHeading="Curious about how we can help you?" footer_btntext="Get Started" />
      
      <Footer />
    </div>
  );
}
