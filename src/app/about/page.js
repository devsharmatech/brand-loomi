import HeroAbout from '@/components/HeroAbout'
import Services from '@/components/Services'
import OurStory from '@/components/OurStory'
import TeamSection  from '@/components/TeamSection'
import Timeline  from '@/components/Timeline'
import FAQ from '@/components/FAQ'
import SubscribeAbout from '@/components/SubscribeAbout'
import Footer from '@/components/Footer'
import WhoWeAre from '@/components/WhoWeAre'

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <WhoWeAre />
      <OurStory />
      <TeamSection/>
      <Timeline  />
      <SubscribeAbout/>
      <Footer />
    </div>
  )
}