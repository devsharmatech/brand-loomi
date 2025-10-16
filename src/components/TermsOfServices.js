export default function TermsOfServices() {
  return (
    <div className="bg-transparent min-h-screen py-12 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Terms of Service</h1>
          <p className="text-lg text-emerald-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 leading-relaxed">
            Welcome to Brandloomi ("Brandloomi" "we," "us," or "our"). These Terms of Service ("Terms") 
            govern your use of our website, products, and services. By accessing or using our website 
            or services, you agree to comply with and be bound by these Terms.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Acceptance of Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-300">
              By using our website or services, you agree to these Terms. If you do not agree to these Terms, 
              please do not use our website or services.
            </p>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">User Responsibilities</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Compliance</h3>
              <p className="text-gray-300">
                You agree to comply with all applicable laws and regulations when using our website or services.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Account Responsibility</h3>
              <p className="text-gray-300">
                If you create an account on our platform, you are responsible for maintaining the confidentiality 
                of your account information and for all activities that occur under your account.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Intellectual Property</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Ownership</h3>
              <p className="text-gray-300">
                All content and materials on our website, including but not limited to text, graphics, logos, 
                and software, are the property of Brandloomi or its licensors and are protected by intellectual 
                property laws.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">License</h3>
              <p className="text-gray-300">
                You are granted a limited, non-exclusive, non-transferable license to access and use our 
                website and services for personal or internal business purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Limitations of Liability</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Disclaimer</h3>
              <p className="text-gray-300">
                Our website and services are provided "as is" without any warranties, express or implied. 
                Brandloomi disclaims all liability for any damages arising out of the use or inability to 
                use our website or services.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Limitation of Liability</h3>
              <p className="text-gray-300">
                Brandloomi and its affiliates, directors, officers, employees, and agents shall not be 
                liable for any indirect, incidental, special, consequential, or punitive damages, or any 
                loss of profits or revenues.
              </p>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Dispute Resolution</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Arbitration</h3>
              <p className="text-gray-300">
                Any disputes arising out of or relating to these Terms will be resolved through binding 
                arbitration, conducted by a neutral arbitrator in accordance with the Irish Laws. The 
                costs of arbitration will be shared equally between the parties.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Governing Law</h3>
              <p className="text-gray-300">
                These Terms are governed by the laws of Republic of Ireland, without regard to its 
                conflict of law principles.
              </p>
            </div>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Changes to Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              Brandloomi reserves the right to update or modify these Terms at any time without prior 
              notice. Changes will be effective immediately upon posting on our website.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Termination</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
            <p className="text-gray-300">
              Brandloomi reserves the right to terminate or suspend your access to our website or 
              services at any time for any reason, without notice.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Email:</strong> hello@brandloomi.com</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            By using our website or services, you acknowledge that you have read and understood these Terms.
          </p>
        </div>
      </div>
    </div>
  );
}