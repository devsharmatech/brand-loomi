import Footer from "@/components/Footer";
import HeroHWW from "@/components/HeroHWW";
import TermsOfServices from "@/components/TermsOfServices";

export default function page() {
  const heading = "Terms Of Services";
  const subheading =
    "Learn about the rules and guidelines for using our services responsibly.";

  return (
    <div className="min-h-screen">
      <HeroHWW heading={heading} subheading={subheading} logo="./logo.png" />
      <TermsOfServices />
      <Footer />
    </div>
  );
}
