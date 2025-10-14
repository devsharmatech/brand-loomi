
import Footer from '@/components/Footer'
import HeroHWW from '@/components/HeroHWW'
import PrivacyAndPolicy from '@/components/PrivacyAndPolicy';

export default function page() {
  const heading = "Privacy & Policy";
  const subheading = "Learn how we collect, use, and protect your personal information.";
  


  return (
    <div className="min-h-screen">
      <HeroHWW heading={heading} subheading={subheading} logo="./logo.png"/>
      <PrivacyAndPolicy />
      <Footer />
    </div>
  )
}