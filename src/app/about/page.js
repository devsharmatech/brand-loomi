import HeroAbout from '@/components/HeroAbout'
import OurStory from '@/components/OurStory'
import TeamSection  from '@/components/TeamSection'
import Timeline  from '@/components/Timeline'
import Footer from '@/components/Footer'
import WhoWeAre from '@/components/WhoWeAre'
import FooterCTASubscription from '@/components/FooterCTASubscription'



export default function Page() {
  const heading="YOUR <br/> DIGITAL <br/> COMPANION";
  const subheading=`We are your strategic partner in digital transformation, combining
            cutting-edge technology with creative solutions to bring your vision
            to life`;
  const btntext="Let's Discuss";
  const btnlink="#";

  const cards_who_we_are = [
  {
    "id": 1,
    "title": "OUR MISSION",
    "description": "We empower startups and small businesses with affordable, innovative digital branding solutions that drive growth and amplify impact.",
    "icon": "Target",
    "gradient": "from-cyan-500 to-emerald-500",
    "hoverBorder": "hover:border-cyan-500/30",
    "hoverBg": "bg-cyan-500/10",
    "hoverBgHover": "group-hover:bg-cyan-500/20"
  },
  {
    "id": 2,
    "title": "OUR VISION",
    "description": "We aim to be the trusted launchpad for digital innovation, where every small business in Ireland and beyond has the tools and support to succeed.",
    "icon": "Eye",
    "gradient": "from-emerald-500 to-cyan-500",
    "hoverBorder": "hover:border-emerald-500/30",
    "hoverBg": "bg-emerald-500/10",
    "hoverBgHover": "group-hover:bg-emerald-500/20"
  },
  {
    "id": 3,
    "title": "OUR VALUES",
    "description": "We stand for affordability, innovation, partnership, community support, and transparent communication in everything we do.",
    "icon": "Heart",
    "gradient": "from-purple-500 to-cyan-500",
    "hoverBorder": "hover:border-purple-500/30",
    "hoverBg": "bg-purple-500/10",
    "hoverBgHover": "group-hover:bg-purple-500/20"
  }
];

  return (
    <div className="min-h-screen">
      <HeroAbout heading={heading} subheading={subheading} btntext={btntext} btnlink={btnlink}/>
      <WhoWeAre cards_who_we_are={cards_who_we_are} />
      <OurStory />
      <Timeline  />
      <FooterCTASubscription footerHeading="Know Us? Now Let Us Know You!" footer_btntext="Get Started" />
      <Footer />
    </div>
  )
}