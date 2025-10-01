import HeroCareers from "@/components/HeroCareers";
import JobListings from "@/components/JobListings";

import Footer from "@/components/Footer";

export default function Page() {
  const heading = "JOIN OUR TEAM: SHAPE THE FUTURE OF DIGITAL";

  const subheading = `We’re always looking for passionate, creative, and driven individuals to join our growing team.`;

  const btntext = "Join Us";
  const btnlink = "#";


  return (
    <div className="min-h-screen">
      <HeroCareers
        heading={heading}
        subheading={subheading}
      />
      <JobListings />
      <Footer />
    </div>
  );
}
