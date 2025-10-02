
import HeroHome from '@/components/HeroHome'
import BrandServicesEnhanced from '@/components/BrandServicesEnhanced'
import ProcessSectionEnhanced  from '@/components/ProcessSectionEnhanced'
import Testimonials  from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FooterCTASubscription from '@/components/FooterCTASubscription'
import Footer from '@/components/Footer'
import EmpowerEntrepreneurs from '@/components/EmpowerEntrepreneurs'

export default function Home() {
  const footerHeading = `Ready to <span class="text-cyan-400"> Launch </span> Your Business Online?`;
  const footer_btntext = "Get Started";
  return (
    <div className="min-h-screen">
      <HeroHome />
      <EmpowerEntrepreneurs />
      <BrandServicesEnhanced heading="HOW TO ESTABLISH YOUR BRAND"/>
      <ProcessSectionEnhanced  />
      <Testimonials  />
      <FAQ />
      <FooterCTASubscription footerHeading={footerHeading} footer_btntext={footer_btntext} />
      <Footer />
    </div>
  )
}