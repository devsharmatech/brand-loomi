import HeroCareers from "@/components/HeroCareers";
import JobListings from "@/components/JobListings";

import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import ApplicationForm from "@/components/ApplicationForm";

export default function Page() {
  const heading = "JOIN OUR TEAM: SHAPE THE FUTURE OF DIGITAL";

  const subheading = `We’re always looking for passionate, creative, and driven individuals to join our growing team.`;

  return (
    <div className="min-h-screen">
      <HeroCareers
        heading={heading}
        subheading={subheading}
      />
      <JobListings />
      <ApplicationForm />
      <FooterCTA />
      <Footer />
    </div>
  );
}
