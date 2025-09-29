
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BrandServicesEnhanced from '@/components/BrandServicesEnhanced'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import EmpowerEntrepreneurs from '@/components/EmpowerEntrepreneurs'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmpowerEntrepreneurs />
      <BrandServicesEnhanced />
      <Testimonials />
      <FAQ />
      <Clients />
      <Footer />
    </div>
  )
}