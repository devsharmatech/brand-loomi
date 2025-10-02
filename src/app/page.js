
import HeroHome from '@/components/HeroHome'
import BrandServicesEnhanced from '@/components/BrandServicesEnhanced'
import ProcessSectionEnhanced  from '@/components/ProcessSectionEnhanced'
import Testimonials  from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FooterCTASubscription from '@/components/FooterCTASubscription'
import Footer from '@/components/Footer'
import EmpowerEntrepreneurs from '@/components/EmpowerEntrepreneurs'

export default function page() {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <EmpowerEntrepreneurs />
      <BrandServicesEnhanced />
      <ProcessSectionEnhanced  />
      <Testimonials  />
      <FAQ />
      <FooterCTASubscription footerHeading="Ready to Launch Your Business Online?" footer_btntext="Get Started" />
      <Footer />
    </div>
  )
}