import Header from "@/components/Header";

export default function HeroHome() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center min-h-[60vh] px-4 bg-transparent overflow-hidden">
      <Header />

      <div className="absolute hero-top-left top-0 left-0 w-96 h-96  -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute hero-bottom-right bottom-0 right-0 w-96 h-96  translate-x-1/2 translate-y-1/2"></div>
      <div className="banner-section relative w-full flex flex-col py-10 items-center justify-center text-center bg-transparent overflow-hidden">
        {/* Tagline */}
        <h1 className="text-white dancing-font text-3xl md:text-7xl font-semibold leading-snug max-w-5xl">
          Your brand deserves more than a template
        </h1>

        {/* Subheading with highlight */}
        <h2 className="mt-4 text-3xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 bolder-font">
          Build it together
        </h2>

        {/* Small description */}
        <p className="mt-6 text-gray-300 max-w-4xl text-sm md:text-base">
          Affordable high-quality web and app development, branding and
          consulting for startups and small businesses in Ireland and beyond.
        </p>

        {/* CTA Button */}
        <div className="my-8">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-medium shadow-lg hover:shadow-xl transition"
          >
            Get Started
            <span className="inline-block transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
