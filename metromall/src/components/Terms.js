import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-bold text-blue-500">MetroMall</span>. By accessing or using our platform, you agree to comply with the following terms and conditions. Please read them carefully.
      </p>

      <div className="space-y-8">
        {/* Section: Introduction */}
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            MetroMall is an e-commerce platform designed to provide a seamless shopping experience. These terms govern your use of our website and services.
          </p>
        </section>

        {/* Section: User Accounts */}
        <section>
          <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
          <p className="text-gray-700">
            To access certain features, you may need to create an account. By creating an account, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Provide accurate and up-to-date information.</li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Be responsible for all activities under your account.</li>
          </ul>
        </section>

        {/* Section: Purchases */}
        <section>
          <h2 className="text-2xl font-bold mb-4">3. Purchases</h2>
          <p className="text-gray-700">
            By placing an order on MetroMall, you agree to the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>All purchases are subject to product availability.</li>
            <li>Prices are subject to change without prior notice.</li>
            <li>We reserve the right to cancel or refuse any order at our discretion.</li>
          </ul>
        </section>

        {/* Section: Returns and Refunds */}
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Returns and Refunds</h2>
          <p className="text-gray-700">
            For detailed information on returns and refunds, please refer to our{" "}
            <a href="/returns" className="text-blue-500 hover:underline">
              Returns Policy
            </a>.
          </p>
        </section>

        {/* Section: Prohibited Activities */}
        <section>
          <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
          <p className="text-gray-700">
            You agree not to use MetroMall for any unlawful activities or to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Transmit harmful, offensive, or illegal content.</li>
            <li>Attempt to disrupt the website’s functionality.</li>
            <li>Engage in fraudulent or deceptive activities.</li>
          </ul>
        </section>

        {/* Section: Intellectual Property */}
        <section>
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on MetroMall, including text, images, logos, and software, is the intellectual property of MetroMall or its licensors. Unauthorized use is strictly prohibited.
          </p>
        </section>

        {/* Section: Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700">
            MetroMall is not responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Indirect, incidental, or consequential damages arising from your use of the platform.</li>
            <li>Delays or failures beyond our control, such as shipping disruptions or technical issues.</li>
          </ul>
        </section>

        {/* Section: Changes to Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700">
            MetroMall reserves the right to modify these terms at any time. Updates will be posted on this page, and continued use of the platform constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* Section: Governing Law */}
        <section>
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by and construed in accordance with the laws of the state of New York, United States.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section>
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these terms, please contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Email: support@metromall.com</li>
            <li>Phone: 08163472931</li>
            <li>Address: 123 MetroMall Street, Rivers State, Nigeria</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
