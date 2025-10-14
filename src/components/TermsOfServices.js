export default function TermsOfServices() {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Terms of Service</h1>
          <p className="text-lg text-emerald-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Brandloomi. These Terms of Service ("Terms") govern your access to and use of 
            Brandloomi's website, services, and applications. Please read these Terms carefully before 
            using our services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. 
            If you disagree with any part of the terms, you may not access our services.
          </p>
        </div>

        {/* Service Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Service Agreement</h2>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-300 mb-4">
              Brandloomi agrees to provide services as described in your service proposal or contract. 
              The specific scope, timeline, and deliverables will be outlined in your individual service agreement.
            </p>
            <p className="text-gray-300">
              You agree to provide necessary information, materials, and feedback in a timely manner to 
              enable us to deliver the services effectively.
            </p>
          </div>
        </section>

        {/* Account Registration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Account Registration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Account Creation</h3>
              <p className="text-gray-300 text-sm">
                You may be required to register for an account to access certain services. You must 
                provide accurate and complete information during registration.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Account Security</h3>
              <p className="text-gray-300 text-sm">
                You are responsible for safeguarding your account credentials and for all activities 
                that occur under your account. Notify us immediately of any unauthorized use.
              </p>
            </div>
          </div>
        </section>

        {/* Service Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Service Usage Guidelines</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Permitted Use</h3>
              <p className="text-gray-300 mt-2">
                You may use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to use our services in any way that violates applicable laws or regulations.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Prohibited Activities</h3>
              <p className="text-gray-300 mt-2">
                You may not: attempt to gain unauthorized access to our systems, interfere with service 
                functionality, use services for illegal activities, or infringe upon intellectual property rights.
              </p>
            </div>
          </div>
        </section>

        {/* Service Modifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Service Modifications</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500">
            <p className="text-gray-300">
              Brandloomi reserves the right to modify, suspend, or discontinue any aspect of our services 
              at any time, including the availability of any feature, database, or content. We will provide 
              reasonable notice for any significant changes that may affect your use of our services.
            </p>
          </div>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Client Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Timely Feedback</h3>
              <p className="text-gray-300 text-sm">
                Provide timely feedback and approvals to ensure project milestones are met according to schedule.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Content Provision</h3>
              <p className="text-gray-300 text-sm">
                Supply all necessary content, materials, and information required for service delivery.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Legal Compliance</h3>
              <p className="text-gray-300 text-sm">
                Ensure all provided materials comply with applicable laws and do not infringe third-party rights.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Payment Obligations</h3>
              <p className="text-gray-300 text-sm">
                Fulfill all payment obligations as outlined in your service agreement and invoices.
              </p>
            </div>
          </div>
        </section>

        {/* Service Level Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Service Level Agreement</h2>
          <div className="bg-gray-800 border border-emerald-500 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Availability</h3>
                <p className="text-gray-300">
                  We strive to maintain 99.9% uptime for our digital services. Scheduled maintenance 
                  will be communicated in advance whenever possible.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Support Response</h3>
                <p className="text-gray-300">
                  We aim to respond to support requests within 24 business hours for standard inquiries 
                  and 4 business hours for critical issues.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Project Timelines</h3>
                <p className="text-gray-300">
                  Project delivery timelines are estimates and may be adjusted based on project complexity, 
                  client responsiveness, and unforeseen circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data and Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Data and Privacy</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Data Handling</h3>
              <p className="text-gray-300 mt-2">
                We handle your data in accordance with our Privacy Policy. We implement reasonable security 
                measures to protect your information but cannot guarantee absolute security.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-400">Third-Party Services</h3>
              <p className="text-gray-300 mt-2">
                Our services may integrate with third-party platforms. Your use of these services is 
                subject to their respective terms and privacy policies.
              </p>
            </div>
          </div>
        </section>

        {/* Fees and Payment Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Fees and Payment Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Service Fees</h3>
                <p className="text-gray-300">
                  All fees are as specified in your service agreement. Additional services may incur 
                  extra charges, which will be communicated and approved in advance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Payment Schedule</h3>
                <p className="text-gray-300">
                  Payments are due according to the schedule outlined in your agreement. Late payments 
                  may result in service suspension and late fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Taxes</h3>
                <p className="text-gray-300">
                  All fees are exclusive of taxes. You are responsible for paying all applicable taxes 
                  associated with your use of our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation and Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Cancellation and Termination</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Client Cancellation</h3>
              <p className="text-gray-300 text-sm">
                You may cancel services according to the terms outlined in your service agreement. 
                Cancellation may be subject to fees for work completed.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Company Termination</h3>
              <p className="text-gray-300 text-sm">
                We may terminate services for violation of these Terms, non-payment, or other material 
                breach of agreement with 30 days written notice.
              </p>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Dispute Resolution</h2>
          <div className="bg-gray-800 border border-yellow-500/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              In the event of any dispute, claim, or controversy relating to these Terms or our services, 
              the parties agree to first attempt to resolve the dispute through informal negotiation.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Informal negotiation for 30 days</li>
              <li>Mediation if negotiation fails</li>
              <li>Binding arbitration as a final recourse</li>
              <li>Each party bears own legal fees unless otherwise determined</li>
            </ul>
          </div>
        </section>

        {/* Updates to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Updates to Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              We may update these Terms of Service from time to time. We will notify you of significant 
              changes by email or through our services. Continued use of our services after changes 
              constitutes acceptance of the updated Terms.
            </p>
          </div>
        </section>

        {/* Contact and Support */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact and Support</h2>
          <p className="text-gray-300 mb-4">
            For questions about these Terms of Service or to request support, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Support Email:</strong> support@brandloomi.com</p>
            <p><strong className="text-emerald-400">Legal Inquiries:</strong> legal@brandloomi.com</p>
            <p><strong className="text-emerald-400">Phone:</strong> +1 (555) 123-4567</p>
            <p><strong className="text-emerald-400">Business Hours:</strong> Mon-Fri, 9AM-6PM EST</p>
            <p><strong className="text-emerald-400">Address:</strong> 123 Business Avenue, Suite 100, City, State 12345</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            Thank you for choosing Brandloomi. We're committed to providing exceptional service 
            and helping your business thrive in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}