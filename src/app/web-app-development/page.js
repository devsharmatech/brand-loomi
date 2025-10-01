import HeroServiceInner from '@/components/HeroServiceInner'
import OurProcess from '@/components/OurProcess'
import WhyChooseUs2  from '@/components/WhyChooseUs2'
import Testimonials  from '@/components/Testimonials'

import SubscribeAbout from '@/components/SubscribeAbout'
import Footer from '@/components/Footer'
import DeliverTechStack from '@/components/DeliverTechStack'



export default function Page() {
  const heading="Web Application Development";
  const subheading=`Your website is your business’s digital headquarters.
                   We specialize in building high-performance web applications that engage users, 
                   drive conversions, and scale with your ambitions. From MVPs for startups to robust platforms
                  for growing businesses, we deliver web solutions that work.`;

  const btntext="Let's Discuss";
  const btnlink="#";
 const deliverables = [
    "Business Websites: Corporate, portfolio, and landing pages.",
    "E-commerce Stores: Secure, scalable, and conversion-focused.", 
    "SaaS Platforms: Subscription, membership, and community apps.",
    "Booking & Event Apps: Real-time scheduling, payments, and notifications."
  ];

  const techStack = [
    "Frontend: React.js, Vue.js, Angular, HTML5, CSS3, SASS",
    "Backend: Node.js, Express, Django, Laravel, Ruby on Rails",
    "CMS: WordPress, Strapi, Contentful",
    "E-commerce: Shopify, WooCommerce, Magento",
    "APIs: REST, GraphQL, Stripe, PayPal, Google Maps"
  ];
  return (
    <div className="min-h-screen">
      <HeroServiceInner heading={heading} subheading={subheading} btntext={btntext} btnlink={btnlink}/>
      <DeliverTechStack deliverables={deliverables} techStack={techStack}/>
      <OurProcess />
      <WhyChooseUs2/>
      <Testimonials  />
      <SubscribeAbout heading="Ready to build your competitive edge?" btntext="Get Started" />
      <Footer />
    </div>
  )
}