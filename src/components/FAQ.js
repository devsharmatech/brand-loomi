export default function FAQ() {
  const faqs = [
    "How can you offer such affordable prices?",
    "Do I need technical knowledge to work with you?",
    "How does your process work after I contact you?",
    "What platforms or technologies do you use for development?"
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq}</h3>
                <button className="text-blue-600 text-xl font-bold hover:text-blue-700">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            All FAQs →
          </button>
        </div>
      </div>
    </section>
  )
}