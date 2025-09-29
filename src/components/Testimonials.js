export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg border border-blue-100">
        <p className="text-lg italic mb-4 text-gray-700">
          "We got our website live in under four weeks and for less than half the price quoted elsewhere. The team's support was phenomenal!"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
            <span className="text-gray-600 text-sm">AM</span>
          </div>
          <div>
            <p className="font-semibold">Anna M</p>
            <p className="text-sm text-gray-600">Startup Founder</p>
          </div>
        </div>
      </div>
    </section>
  )
}