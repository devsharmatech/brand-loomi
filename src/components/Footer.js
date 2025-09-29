export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brandloomi</h3>
            <p className="text-gray-400">
              Affordable, high-quality digital solutions to help startups and small businesses launch, grow, and thrive
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Web App Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile App Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Social & Digital Media Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Startup Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">brandloomi@email.com</p>
            <p className="text-gray-400">Dublin, Ireland</p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Ready to Launch Your Business Online?</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Brandloomi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}