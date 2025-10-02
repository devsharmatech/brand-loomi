
import HeroHome from '@/components/HeroHome'
import ProcessSectionEnhanced  from '@/components/ProcessSectionEnhanced'
import Testimonials  from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import WorkInquiriesSection from '@/components/WorkInquiriesSection'
import Footer from '@/components/Footer'
import WhoWeAreLanding from '@/components/WhoWeAreLanding'

export default function page() {
  
  return (
    <div className="min-h-screen">
      <HeroHome />
      <WhoWeAreLanding />
      <ProcessSectionEnhanced  />
      <Testimonials  />
      <FAQ />
      <WorkInquiriesSection />
      
      <Footer />
    </div>
  )
}