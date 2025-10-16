
import Footer from '@/components/Footer'
import HeroCareers2 from '@/components/HeroCareers2'
import CookiePolicy from '@/components/CookiePolicy';

export default function page() {

  return (
    <div className="min-h-screen">
      <HeroCareers2 logo="./logo.png"/>
      <CookiePolicy />
      <Footer />
    </div>
  )
}