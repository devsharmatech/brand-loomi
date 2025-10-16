"use client";

export default function CookiePolicy() {
  return (
    <div className="bg-transparent min-h-screen py-12 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Cookie Policy</h1>
          <p className="text-lg text-emerald-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Brandloomi ("Brandloomi," "we," "us," or "our"). This Cookie Policy explains 
            how we use cookies and similar technologies on our website. By using our website, you 
            consent to the use of cookies as described in this policy.
          </p>
        </div>

        {/* What are Cookies? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">What are Cookies?</h2>
          
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">Definition</h3>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your device when you visit a website. 
              They are commonly used to make websites work more efficiently and provide information 
              to the website owners.
            </p>
          </div>
        </section>

        {/* Types of Cookies We Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Types of Cookies We Use</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Essential Cookies</h3>
              <p className="text-gray-300">
                These cookies are necessary for the proper functioning of our website. They enable 
                you to navigate our site and use its features.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Analytical/Performance Cookies</h3>
              <p className="text-gray-300">
                These cookies help us understand how visitors interact with our website by collecting 
                information on pages visited, time spent on the site, and other metrics.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Functional Cookies</h3>
              <p className="text-gray-300">
                Functional cookies allow our website to remember choices you make, such as language 
                preferences, and provide enhanced features.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Targeting/Advertising Cookies</h3>
              <p className="text-gray-300">
                These cookies are used to deliver content that is more relevant to you and your interests. 
                They may be used to deliver targeted advertising.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">How We Use Cookies</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Consent</h3>
              <p className="text-gray-300">
                By using our website, you consent to the use of cookies in accordance with this Cookie Policy. 
                You may withdraw your consent at any time by adjusting your browser settings.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Managing Cookies</h3>
              <p className="text-gray-300">
                Most browsers allow you to control cookies through their settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Third-Party Cookies</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Google Analytics</h3>
              <p className="text-gray-300">
                We use Google Analytics, a web analytics service provided by Google Inc. Google Analytics 
                uses cookies to analyze how users use our website. For more information, refer to 
                Google's privacy policy.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Social Media Plugins</h3>
              <p className="text-gray-300">
                Our website may include social media features or plugins, such as the Facebook Like button. 
                These features may collect your IP address and other information. Your interactions with 
                these features are governed by the privacy policy of the respective social media platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Updates to this Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Updates to this Policy</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              We may update this Cookie Policy periodically to reflect changes in our practices. 
              The date of the last update will be reflected at the beginning of the document.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about this Cookie Policy, please contact us at:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Email:</strong> hello@brandloomi.com</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            By using our website, you acknowledge that you have read and understood this Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  );
}