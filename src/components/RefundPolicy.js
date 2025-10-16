export default function RefundPolicy() {
  return (
    <div className="bg-transparent min-h-screen py-12 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Refund Policy</h1>
          <p className="text-lg text-emerald-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 leading-relaxed">
            Welcome to Brandloomi ("Brandloomi" "we," "us," or "our"). This Refund Policy outlines 
            the terms and conditions for refunds related to our products and services. By using our 
            website, products, and services, you agree to the terms outlined in this Refund Policy.
          </p>
        </div>

        {/* Eligibility for Refunds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Eligibility for Refunds</h2>
          
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">Digital Products and Services</h3>
            <p className="text-gray-300">
              Refunds for digital products or services are provided solely at the discretion of Brandloomi. 
              Eligibility for a refund may be determined based on factors such as technical issues, service 
              disruptions, or dissatisfaction with the product or service.
            </p>
          </div>
        </section>

        {/* Refund Procedure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Refund Procedure</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Requesting a Refund</h3>
              <p className="text-gray-300">
                To request a refund, please contact our customer support team at hello@brandloomi.com 
                within 7 business days of the purchase or delivery date. Clearly state the reason for 
                your refund request and provide any necessary details or documentation.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Refund Evaluation</h3>
              <p className="text-gray-300">
                Upon receiving your refund request, we will evaluate it based on the eligibility criteria 
                outlined in Section 1. We may contact you for additional information if needed.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Refund Approval</h3>
              <p className="text-gray-300">
                If your refund request is approved, we will process the refund using the original payment 
                method. Refunds may take 10 business days to appear in your account.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Denied Refunds</h3>
              <p className="text-gray-300">
                If your refund request is denied, we will provide a detailed explanation for the decision. 
                You may contact our customer support team for further clarification.
              </p>
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Processing Time</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
            <p className="text-gray-300">
              Refunds are typically processed within 10 business days from the date of approval. 
              The processing time may vary depending on the payment method and financial institution.
            </p>
          </div>
        </section>

        {/* Exceptions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Exceptions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Services Already Rendered</h3>
              <p className="text-gray-300">
                Refunds may not be issued for services that have already been rendered, except in cases 
                of dissatisfaction or failure to meet agreed-upon service standards.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Late or Missing Refunds</h3>
              <p className="text-gray-300">
                If you haven't received a refund within the specified processing time, please check your 
                bank account and contact your financial institution. If the issue persists, contact our 
                customer support team at hello@brandloomi.com.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-800 rounded-lg p-8 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about this Refund Policy, please contact us at:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-emerald-400">Email:</strong> hello@brandloomi.com</p>
          </div>
        </section>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-emerald-400 italic">
            By using our website or services, you acknowledge that you have read and understood this Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
}