import HeroAbout from '@/components/HeroAbout'
import Services from '@/components/Services'
import OurStory from '@/components/OurStory'
import TeamSection  from '@/components/TeamSection'
import Timeline  from '@/components/Timeline'

import SubscribeAbout from '@/components/SubscribeAbout'
import Footer from '@/components/Footer'
import WhoWeAre from '@/components/WhoWeAre'



export default function Page() {
  const heading="YOUR <br/> DIGITAL <br/> COMPANION";
  const subheading=`We are your strategic partner in digital transformation, combining
            cutting-edge technology with creative solutions to bring your vision
            to life`;
  const btntext="Let's Discuss";
  const btnlink="#";
  return (
    <div className="min-h-screen">
      <HeroAbout heading={heading} subheading={subheading} btntext={btntext} btnlink={btnlink}/>
      <WhoWeAre />
      <OurStory />
      <TeamSection/>
      <Timeline  />
      <SubscribeAbout heading="Ready to Launch Your Business Online?" btntext="Get Started" />
      <Footer />
    </div>
  )
}