export default function Clients() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Happy Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
              <span className="text-gray-500 font-medium">Client Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}