"use client";

export default function ProcessSectionModern() {
  return (
    <section className="relative w-screen bg-transparent text-white overflow-hidden py-20 md:py-28">
      <div className="max-w-[2100px] mx-auto  relative">
        {/* Title */}
        <div className="text-start w-full max-w-7xl mx-auto mb-20 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold italic tracking-tight mb-3">
            FROM IDEAS TO SOLUTIONS
          </h2>
          <p className="text-gray-300 text-center italic text-lg relative inline-block after:content-['*'] after:ml-2 after:text-cyan-400">
            Our Process
          </p>
        </div>

        {/* Process layout */}
        <div className="relative flex flex-col w-full items-center justify-center">
          <div className="absolute left-0 top-[35%] lg:top-[50%] -translate-y-1/2 -rotate-90 font-bold text-white/80 tracking-wide text-sm md:text-base">
            Challenge
          </div>

          {/* Diamonds & flow lines */}
          <div className="relative w-full max-w-6xl md:max-w-4xl mx-auto z-10">
            <div className="flex  flex-col md:flex-row items-center max-w-6xl md:max-w-4xl md:w-full lg:w-full justify-between gap-16 md:gap-32 relative z-10">
              {/* Left diamond */}
              <div className="diamond border-1 border-cyan-500 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-gradient-to-br from-[#042b2b] via-[#001e1e] to-[#000] shadow-[0_0_60px_10px_rgba(0,255,255,0.08)]">
                <div className="diamond-inner text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#00bcd4] leading-snug">
                    <span className="block text-white/80 font-medium">
                      Designing the
                    </span>
                    right things
                  </h3>
                </div>
              </div>

              {/* Right diamond */}
              <div className="diamond border-1 border-cyan-500 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-gradient-to-br from-[#042b2b] via-[#001e1e] to-[#000] shadow-[0_0_60px_10px_rgba(0,255,255,0.08)]">
                <div className="diamond-inner text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#00bcd4] leading-snug">
                    <span className="block text-white/80 font-medium">
                      Delivering the
                    </span>
                    things right
                  </h3>
                </div>
              </div>
            </div>
            <img
              src="/flow-line.png"
              alt="Flow lines"
              className="absolute hidden sm:block right-[-25%] md:right-[-30%] top-1/2 -translate-y-1/2 w-[100px] md:w-[150px] lg:w-[250px] object-contain opacity-90 pointer-events-none"
            />
          </div>

          {/* Process arrows */}
          <div className="flex flex-wrap justify-around max-w-6xl w-full mx-auto gap-4 md:gap-6 mt-28 relative z-20">
            {["Discover", "Define", "Develop", "Deliver", "Evolve"].map(
              (step, i) => (
                <div
                  key={i}
                  className="process-arrow px-12 py-3 text-white border border-cyan-500 font-semibold tracking-wide text-sm md:text-base 
  transition-all bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90"
                >
                  {step}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
