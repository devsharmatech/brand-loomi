
import Footer from '@/components/Footer'
import HeroCareers2 from '@/components/HeroCareers2'
import RefundPolicy from '@/components/RefundPolicy';

export default function page() {

  return (
    <div className="min-h-screen">
      <HeroCareers2 logo="./logo.png"/>
      <RefundPolicy />
      <Footer />
    </div>
  )
}