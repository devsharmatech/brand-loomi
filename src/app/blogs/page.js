
import Footer from '@/components/Footer'
import HeroHWW from '@/components/HeroHWW'
import { head } from 'framer-motion/client'
import BlogSection from '@/components/BlogSection'
import FooterCTASubscription from '@/components/FooterCTASubscription';

export default function page() {
  const heading = "BLOGS";
  const subheading = "News and insights of the things which matters ";
  


  return (
    <div className="min-h-screen">
      <HeroHWW heading={heading} subheading={subheading}/>
      <BlogSection />
      <FooterCTASubscription footerHeading="Curious about how we can help you?" footer_btntext="Get Started"/>
      <Footer />
    </div>
  )
}