export default function EmpowerEntrepreneurs() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-8xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left side (Heading) */}
        <div className="text-center px-4 md:px-12 lg:text-left col-span-1 flex items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left w-full leading-tight">
            EMPOWERING  <br /> <span className="text-gray-700">THE NEXT </span> <br /><span className="text-gray-600"> GENERATION OF </span>  <br /> <span className="text-gray-500">ENTREPRENEURS</span>
          </h1>
        </div>

        {/* Right side (Other content) */}
        <div className="text-center lg:text-left col-span-1 max-w-[700px]">
          <h2 className="text-xl md:text-3xl text-gray-700 mb-2 font-medium">
            Making Digital Success Accessible for Every Entrepreneur
          </h2>

          <div className="bg-transparent mb-4 mt-5">
            <p className="text-lg md:text-xl text-gray-700 fw-bold leading-relaxed">
              At Brandloomi, we believe that digital success should be accessible to every entrepreneur and small business, not just those with big budgets. Founded in Dublin, our agency was born from the desire to break down barriers and empower startups with affordable, high-quality digital branding and marketing solutions.
            </p>
          </div>
           <a className="block font-semibold text-gray-600 text-lg hover:text-[#00a8c5] transition-all duration-200 flex items-center justify-center md:justify-start space-x-3 group lg:mx-0 mb-8">
            <span>Let"s Connect</span>
            <div className="w-8 h-8 bg-[#00BBDC] bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:text-gray-100 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
