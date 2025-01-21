import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        At <span className="font-bold text-blue-500">MetroMall</span>, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to protect your data.
      </p>

      <div className="space-y-8">
        {/* Section: Information We Collect */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700">
            We may collect the following types of information from you when you use our platform:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <span className="font-semibold">Personal Information:</span> Name, email address, shipping address, phone number, and payment details.
            </li>
            <li>
              <span className="font-semibold">Account Information:</span> Login credentials, preferences, and purchase history.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Information about how you interact with our website, including pages visited, time spent on pages, and links clicked.
            </li>
          </ul>
        </section>

        {/* Section: How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Process your orders and provide customer support.</li>
            <li>Personalize your shopping experience and recommend products you might like.</li>
            <li>Communicate with you about promotions, updates, and special offers.</li>
            <li>Improve our website’s functionality and ensure a seamless user experience.</li>
            <li>Ensure security and prevent fraudulent activities.</li>
          </ul>
        </section>

        {/* Section: How We Protect Your Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How We Protect Your Information</h2>
          <p className="text-gray-700">
            We implement the following measures to safeguard your data:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Secure servers and encryption technologies to protect sensitive data.</li>
            <li>Access controls to ensure only authorized personnel can access your information.</li>
            <li>Regular monitoring and updates to our security practices to prevent vulnerabilities.</li>
          </ul>
        </section>

        {/* Section: Sharing Your Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. However, we may share your data with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Service providers who assist in payment processing, shipping, and customer support.</li>
            <li>Government authorities if required by law or for legal compliance.</li>
          </ul>
        </section>

        {/* Section: Your Rights */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of promotional communications by unsubscribing from our emails.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>
        </section>

        {/* Section: Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            Our website uses cookies and similar technologies to enhance your experience. Cookies help us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Remember your preferences and login information.</li>
            <li>Analyze site traffic and performance.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can manage your cookie preferences in your browser settings.
          </p>
        </section>

        {/* Section: Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Email: privacy@metromall.com</li>
            <li>Phone: 08163472931</li>
            <li>Address: 123 MetroMall Street, Rivers State, Nigeria</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
