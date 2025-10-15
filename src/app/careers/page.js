import HeroCareers2 from "@/components/HeroCareers2";
import JobListings from "@/components/JobListings";

import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import ApplicationForm from "@/components/ApplicationForm";

export default function Page() {
  const heading = "";

  const subheading = ``;

  return (
    <div className="min-h-screen">
      <HeroCareers2
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
