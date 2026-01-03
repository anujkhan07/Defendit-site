const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-neutral-400">
            Effective Date: January 2025
          </p>
        </div>

        {/* INTRO */}
        <p className="text-neutral-300 leading-relaxed">
          Defendit (“we”, “our”, or “us”) respects your privacy and is committed
          to protecting the personal information of users who access or use our
          platform. This Privacy Policy explains how we collect, use, store, and
          protect your data.
        </p>

        {/* SECTION 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Personal details such as name, phone number, email address</li>
            <li>Location data for service availability and security logistics</li>
            <li>Booking and transaction information</li>
            <li>Device and usage data for platform security</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>To enable booking of security professionals</li>
            <li>To verify identities and prevent fraud</li>
            <li>To improve platform performance and user experience</li>
            <li>To communicate service updates and support responses</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            3. Data Sharing & Disclosure
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Defendit does not sell your personal data. Information may be shared
            only with verified security professionals, payment partners, or
            legal authorities when required by law.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4. Data Security
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            We implement industry-standard security measures to protect your
            information against unauthorized access, misuse, or disclosure.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            5. User Rights
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            You may request access, correction, or deletion of your personal
            data by contacting us at support@defendit.in, subject to applicable
            legal obligations.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            6. Policy Updates
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            This Privacy Policy may be updated periodically. Continued use of
            Defendit after changes indicates acceptance of the revised policy.
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            7. Contact Information
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            For privacy-related concerns, contact:
            <br />
            <span className="text-white font-medium">
              support@defendit.in
            </span>
          </p>
        </section>

        {/* FOOTER */}
        <p className="text-neutral-400 text-sm pt-8 border-t border-neutral-800">
          © 202 SCOUTRL Pvt. Ltd. | Defendit. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
