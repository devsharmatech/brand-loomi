"use client";

export default function PrivacyAndPolicy() {
  return (
    <div className="bg-transparent min-h-screen py-12 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-emerald-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 leading-relaxed">
            Welcome to Brandloomi ("Brandloomi" "we," "us," or "our"). This
            Privacy Policy is designed to inform you about how we collect, use,
            disclose, and safeguard your personal information. By using our
            website, products, and services, you agree to the terms outlined in
            this Privacy Policy.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Information We Collect
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-300">
                We may collect personal information directly from you, including
                but not limited to names, email addresses, phone numbers,
                addresses, and other information you voluntarily provide when
                using our website or services.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-300">
                When you access our website or use our services, we may
                automatically collect certain information, including IP
                addresses, browser type, device details, and usage patterns.
                This information helps us analyze trends, improve our services,
                and enhance your user experience.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            How We Use Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                Service Delivery
              </h3>
              <p className="text-gray-300">
                We use the information we collect to provide, improve, and
                personalize our services. This includes responding to inquiries,
                processing transactions, and customizing user experiences.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                Communication
              </h3>
              <p className="text-gray-300">
                We may use your contact information to send you relevant
                updates, newsletters, and promotional materials. You can opt-out
                of these communications at any time.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                Analytics
              </h3>
              <p className="text-gray-300">
                We use analytics tools to analyze website usage patterns, track
                performance, and gather insights to enhance our services.
              </p>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Information Sharing
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Third-Party Service Providers
              </h3>
              <p className="text-gray-300">
                We may share your information with trusted third-party service
                providers to assist us in delivering our services. These
                providers are contractually obligated to protect your
                information and may only use it for the purposes specified by
                Brandloomi.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-300">
                We may disclose your information if required by law, court
                order, or other legal processes.
              </p>
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">User Rights</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                Access and Correction
              </h3>
              <p className="text-gray-300">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us at
                hello@brandloomi.com.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                Opt-Out
              </h3>
              <p className="text-gray-300">
                You can opt-out of receiving promotional communications by
                following the instructions in our communications or contacting
                us directly.
              </p>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Security Measures
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your
              information. However, no method of transmission over the internet
              or electronic storage is entirely secure. Therefore, we cannot
              guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Children's Privacy
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
            <p className="text-gray-300">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect or solicit personal information from
              children. If you believe we have collected information from a
              child, please contact us immediately.
            </p>
          </div>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Cookies and Tracking Technologies
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to enhance your
              user experience, analyze website usage, and customize content. By
              using our website, you consent to the use of cookies as described
              in our Cookie Policy.
            </p>
          </div>
        </section>

        {/* Changes to this Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Changes to this Policy
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30">
            <p className="text-gray-300">
              We may update this Privacy Policy periodically to reflect changes
              in our practices. The date of the last update will be reflected at
              the beginning of the document.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-emerald-400">Email:</strong>{" "}
              hello@brandloomi.com
            </p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            By using our website or services, you acknowledge that you have read
            and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
