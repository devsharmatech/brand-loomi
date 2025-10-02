
import Footer from '@/components/Footer'
import HeroHWW from '@/components/HeroHWW'
import { head } from 'framer-motion/client'
import FooterCTASubscription from '@/components/FooterCTASubscription';
import BlogDetailsPage from '@/components/BlogDetailsPage';

export default function page() {
  const heading = "BLOGS";
  const subheading = "News and insights of the things which matters ";
  


  return (
    <div className="min-h-screen">
      <HeroHWW heading={heading} subheading={subheading} logo="../logo.png"/>
      <BlogDetailsPage />
      <Footer />
    </div>
  )
}