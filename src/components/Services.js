export default function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software that solves your business problems and scales with your growth"
    },
    {
      title: "Web App Development",
      description: "Responsive, high-performance web applications for any device."
    },
    {
      title: "Mobile App Development",
      description: "iOS, Android, and cross-platform experiences that engage users."
    },
    {
      title: "Digital Media Marketing",
      description: "Grow your brand and reach your target audience with proven strategies."
    },
    {
      title: "Branding & Design",
      description: "Stand out with a memorable brand, crafted by our creative experts."
    },
    {
      title: "Startup Consulting",
      description: "From business plans to funding, we guide you every step of the way."
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">HOW TO ESTABLISH YOUR BRAND</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}