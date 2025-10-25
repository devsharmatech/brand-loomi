import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs2({features}) {
  

  return (
    <section className="bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading - Same as your structure */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic mb-12 md:mb-20 flex items-center">
          WHY CHOOSE US?
          <span className="ml-4 flex-1 border-t border-gray-600 relative">
            <span className="absolute -right-2 -top-3 text-xl">*</span>
          </span>
        </h2>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0E1715] rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[1px] rounded-xl bg-[#0E1715]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className={`mb-4 p-3 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-cyan-300 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 mt-4 transition-all duration-500 rounded-full"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}