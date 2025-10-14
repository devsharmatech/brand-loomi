"use client";

import HeroCareers from "@/components/HeroCareers";

import Footer from "@/components/Footer";
import WorkInquiries from "@/components/WorkInquiries";


export default function Page() {
  const heading = "LET’S BUILD SOMETHING GREAT TOGETHER";

  const subheading = ``;

  return (
    <div className="min-h-screen">
      <HeroCareers
        heading={heading}
        subheading={subheading}
      />
      
      <WorkInquiries/>
      <Footer />
    </div>
  );
}
