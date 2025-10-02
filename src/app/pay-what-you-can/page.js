import HeroPayWhat from '@/components/HeroPayWhat'
import DeliverTechStackPayWhat from '@/components/DeliverTechStackPayWhat'
import TestimonialSliderYouWhat  from '@/components/TestimonialSliderYouWhat'
import PayWhatYouCanForm  from '@/components/PayWhatYouCanForm'
import Footer from '@/components/Footer'
import FooterCTASubscription from '@/components/FooterCTASubscription'



export default function Page() {
  
  return (
    <div className="min-h-screen">
      <HeroPayWhat/>
      <DeliverTechStackPayWhat />
      <TestimonialSliderYouWhat  />
      <PayWhatYouCanForm  />
      <FooterCTASubscription footerHeading="Your Budget, Our Passion - Let's Talk!" footer_btntext="Get Started" />
      <Footer />
    </div>
  )
}