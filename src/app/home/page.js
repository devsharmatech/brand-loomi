
import HeroHome from '@/components/HeroHome'
import Services from '@/components/Services'
import BrandServicesEnhanced from '@/components/BrandServicesEnhanced'
import ProcessSectionEnhanced  from '@/components/ProcessSectionEnhanced'
import Testimonials  from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import EmpowerEntrepreneurs from '@/components/EmpowerEntrepreneurs'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <EmpowerEntrepreneurs />
      <BrandServicesEnhanced />
      <ProcessSectionEnhanced  />
      <Testimonials  />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  )
}