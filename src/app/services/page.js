import HeroAbout from "@/components/HeroAbout";
import WhyChooseUs from "@/components/WhyChooseUs";
import SubscribeAbout from "@/components/SubscribeAbout";
import Footer from "@/components/Footer";
import BrandServicesEnhanced from "@/components/BrandServicesEnhanced";
import FooterCTASubscription from "@/components/FooterCTASubscription";

export default function Page() {
  const heading = `OUR <br/> SERVICES:<br/> LAUNCHPAD TO <br/> SUCCESS`;
  const subheading = `Empowering businesses with innovative solutions and expert guidance, we transform ideas into impactful results and help you reach new heights.`;
  const btntext = "Let's Discuss";
  const btnlink = "#";
  return (
    <div className="min-h-screen">
      <HeroAbout heading={heading} subheading={subheading} btntext={btntext} btnlink={btnlink}/>
      <BrandServicesEnhanced heading="SERVICES" />
      <WhyChooseUs />
      <FooterCTASubscription footerHeading="Found What You Need? Let’s Make It Happen." footer_btntext="Get Started" />
      <Footer />
    </div>
  );
}
