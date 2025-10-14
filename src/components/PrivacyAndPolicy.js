export default function PrivacyAndPolicy() {
  return (
    <div className="bg-transparent min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Privacy Policy</h1>
          <p className="text-lg text-emerald-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 mb-6 leading-relaxed">
            At Brandloomi, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Brandloomi ("we," "our," or "us") provides web development, software solutions, 
            digital marketing, and branding services. By using our services, you agree to the 
            collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Information We Collect</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information and job title</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Service-Related Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Project requirements and specifications</li>
                <li>Business goals and objectives</li>
                <li>Marketing campaign data</li>
                <li>Customer support interactions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">How We Use Your Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Service Delivery</h3>
              <p className="text-gray-300">
                To provide and maintain our web development, software, and marketing services, 
                process payments, and communicate with you about your projects.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Business Operations</h3>
              <p className="text-gray-300">
                To improve our services, develop new features, and conduct research and analysis 
                to enhance customer experience.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Marketing & Communication</h3>
              <p className="text-gray-300">
                To send updates, promotional materials, and important notices about our services. 
                You can opt-out of marketing communications at any time.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Legal Compliance</h3>
              <p className="text-gray-300">
                To comply with legal obligations, enforce our terms and conditions, and protect 
                the rights and safety of our company and users.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Data Sharing and Disclosure</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Service Providers</h3>
              <p className="text-gray-300 mt-2">
                We may share information with trusted third-party service providers who assist us 
                in delivering our services (hosting providers, payment processors, analytics tools).
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Business Transfers</h3>
              <p className="text-gray-300 mt-2">
                In the event of a merger, acquisition, or sale of assets, your information may be 
                transferred as part of the business transaction.
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Legal Requirements</h3>
              <p className="text-gray-300 mt-2">
                We may disclose your information when required by law, court order, or governmental 
                authority to protect our rights and comply with legal processes.
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Data Security</h2>
          
          <div className="bg-gray-800 border border-cyan-500 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Brandloomi implements appropriate technical and organizational security measures 
              to protect your personal information against unauthorized access, alteration, 
              disclosure, or destruction.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Encryption of sensitive data</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Your Rights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500 transition-colors">
              <h3 className="font-semibold text-emerald-400 mb-2">Access & Correction</h3>
              <p className="text-gray-300 text-sm">
                You have the right to access and update your personal information.
              </p>
            </div>

            <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <h3 className="font-semibold text-emerald-400 mb-2">Data Portability</h3>
              <p className="text-gray-300 text-sm">
                You can request a copy of your data in a structured, machine-readable format.
              </p>
            </div>

            <div className="bg-gray-800 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500 transition-colors">
              <h3 className="font-semibold text-emerald-400 mb-2">Deletion</h3>
              <p className="text-gray-300 text-sm">
                You may request deletion of your personal information under certain circumstances.
              </p>
            </div>

            <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <h3 className="font-semibold text-emerald-400 mb-2">Objection</h3>
              <p className="text-gray-300 text-sm">
                You can object to the processing of your personal data for specific purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Cookies and Tracking Technologies</h2>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to enhance your experience, 
              analyze website traffic, and understand user behavior. You can control cookie 
              preferences through your browser settings.
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg border border-emerald-500/30">
              <h3 className="font-semibold text-emerald-400 mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for personalized advertising</li>
              </ul>
            </div>
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">International Data Transfers</h2>
          <p className="text-gray-300">
            Your information may be transferred to and processed in countries other than your 
            country of residence. We ensure appropriate safeguards are in place to protect 
            your data in accordance with this Privacy Policy and applicable laws.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Children's Privacy</h2>
          <p className="text-gray-300">
            Our services are not directed to individuals under the age of 16. We do not 
            knowingly collect personal information from children. If you become aware that 
            a child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the "Last updated" date. 
            We encourage you to review this policy periodically.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy 
            or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Email:</strong> privacy@brandloomi.com</p>
            <p><strong className="text-emerald-400">Phone:</strong> +1 (555) 123-4567</p>
            <p><strong className="text-emerald-400">Address:</strong> 123 Business Avenue, Suite 100, City, State 12345</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            Thank you for trusting Brandloomi with your business. We are committed to 
            protecting your privacy and providing exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
}