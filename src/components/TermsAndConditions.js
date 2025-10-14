export default function TermsAndConditions() {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-emerald-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Brandloomi. These Terms and Conditions govern your use of our website 
            and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Brandloomi ("we," "our," or "us") provides web development, software solutions, 
            digital marketing, and branding services. Please read these terms carefully before 
            using our services.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Acceptance of Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-300">
              By accessing and using Brandloomi's services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions. If you do not agree 
              with any part of these terms, you must not use our services.
            </p>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Services Description</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Web Development</h3>
              <p className="text-gray-300 text-sm">
                Custom website design, development, and maintenance services tailored to your 
                business needs and requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Software Solutions</h3>
              <p className="text-gray-300 text-sm">
                Custom software development, application design, and technical consulting services 
                for businesses of all sizes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Digital Marketing</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive digital marketing strategies including SEO, social media marketing, 
                and online advertising campaigns.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Branding Services</h3>
              <p className="text-gray-300 text-sm">
                Brand identity development, logo design, and strategic branding solutions to 
                enhance your market presence.
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">User Responsibilities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Account Security</h3>
              <p className="text-gray-300 mt-2">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Legal Compliance</h3>
              <p className="text-gray-300 mt-2">
                You agree to use our services in compliance with all applicable laws, regulations, 
                and these Terms and Conditions.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Prohibited Activities</h3>
              <p className="text-gray-300 mt-2">
                You may not use our services for any illegal or unauthorized purpose, including 
                but not limited to copyright infringement, fraud, or distribution of malicious software.
              </p>
            </div>
          </div>
        </section>

        {/* Payments and Billing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Payments and Billing</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Payment Terms</h3>
                <p className="text-gray-300">
                  All services are subject to payment as agreed upon in your service contract. 
                  Payments are due according to the terms specified in your invoice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Late Payments</h3>
                <p className="text-gray-300">
                  Late payments may be subject to interest charges and may result in suspension 
                  or termination of services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Refund Policy</h3>
                <p className="text-gray-300">
                  Refund eligibility is determined on a case-by-case basis and is subject to 
                  the terms outlined in your service agreement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Intellectual Property</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Our Intellectual Property</h3>
              <p className="text-gray-300 text-sm">
                All content, trademarks, logos, and software provided through our services are 
                the property of Brandloomi and are protected by intellectual property laws.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Client Content</h3>
              <p className="text-gray-300 text-sm">
                You retain ownership of all content you provide to us. By submitting content, 
                you grant us the license necessary to provide our services.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Limitation of Liability</h2>
          <div className="bg-gray-800 border border-red-500/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, Brandloomi shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to loss of profits, data, or business opportunities.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Service interruptions or downtime</li>
              <li>Data loss or corruption</li>
              <li>Third-party actions or content</li>
              <li>Force majeure events</li>
              <li>Unauthorized access to your data</li>
            </ul>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Termination</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-emerald-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">By User</h3>
              <p className="text-gray-300 mt-2">
                You may terminate your account and stop using our services at any time by 
                providing written notice to us.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">By Brandloomi</h3>
              <p className="text-gray-300 mt-2">
                We reserve the right to suspend or terminate your access to our services 
                for violation of these terms or for any other reason at our discretion.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Disclaimer of Warranties</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-yellow-500/30">
            <p className="text-gray-300">
              Our services are provided "as is" and "as available" without warranties of any kind, 
              either express or implied. We do not warrant that our services will be uninterrupted, 
              error-free, or completely secure. Your use of our services is at your sole risk.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Governing Law</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              These Terms and Conditions shall be governed by and construed in accordance with the 
              laws of [Your State/Country], without regard to its conflict of law provisions. 
              Any legal action or proceeding arising under these terms shall be brought exclusively 
              in the courts located in [Your City, State/Country].
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Changes to Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              We reserve the right to modify these Terms and Conditions at any time. We will 
              notify you of significant changes by posting the updated terms on our website 
              and updating the "Last updated" date. Your continued use of our services after 
              such changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </section>

        {/* Severability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Severability</h2>
          <p className="text-gray-300">
            If any provision of these Terms and Conditions is found to be invalid or unenforceable 
            by a court of competent jurisdiction, the remaining provisions shall remain in full 
            force and effect, and the invalid provision shall be modified to the minimum extent 
            necessary to make it valid and enforceable.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Email:</strong> legal@brandloomi.com</p>
            <p><strong className="text-emerald-400">Phone:</strong> +1 (555) 123-4567</p>
            <p><strong className="text-emerald-400">Address:</strong> 123 Business Avenue, Suite 100, City, State 12345</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            Thank you for choosing Brandloomi. We look forward to helping you achieve your 
            business goals through our professional services.
          </p>
        </div>
      </div>
    </div>
  );
}