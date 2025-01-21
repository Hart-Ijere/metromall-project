import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide the success message after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We’d love to hear from you! Whether you have a question about our
        products, need assistance, or just want to share feedback, we’re here
        to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

          {formSubmitted && (
            <p className="text-green-600 font-bold mb-4">
              Your message has been sent successfully!
            </p>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Reach out to us through any of the channels below:
          </p>

          <div className="mb-4">
            <h3 className="font-semibold">Customer Support</h3>
            <p className="text-gray-600">Email: support@metromall.com</p>
            <p className="text-gray-600">Phone: 08163472931</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Head Office</h3>
            <p className="text-gray-600">123 MetroMall Street</p>
            <p className="text-gray-600">Rivers State, Nigeria</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Follow Us</h3>
            <p className="text-gray-600">Stay connected on our social media platforms:</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
