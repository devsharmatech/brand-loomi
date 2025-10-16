
import Footer from '@/components/Footer'
import HeroCareers2 from '@/components/HeroCareers2'
import PWYCTermsConditions from '@/components/PWYCTermsConditions';

export default function page() {

  return (
    <div className="min-h-screen">
      <HeroCareers2 logo="./logo.png"/>
      <PWYCTermsConditions />
      <Footer />
    </div>
  )
}