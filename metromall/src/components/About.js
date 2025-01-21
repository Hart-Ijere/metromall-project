import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Welcome to <span className="font-bold text-blue-500">MetroMall</span>! We are your one-stop destination for all your shopping needs, offering a wide variety of high-quality products at unbeatable prices. From electronics to fashion, home essentials to health and beauty, we strive to provide a seamless and enjoyable shopping experience for our customers.
        </p>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower individuals and families with easy access to quality products while delivering exceptional customer service.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a globally recognized e-commerce platform known for innovation, reliability, and customer satisfaction.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Customer First</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Excellence</li>
          </ul>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          MetroMall began with a simple idea: to create a platform that makes shopping easy, accessible, and enjoyable for everyone. What started as a small initiative has now grown into a trusted name in the e-commerce industry. We take pride in our commitment to quality, innovation, and outstanding service, ensuring that every customer finds exactly what they need at MetroMall.
        </p>
      </section>

      {/* Team Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <p className="text-gray-700 text-center mb-8">
          Behind MetroMall is a dedicated team of passionate individuals working tirelessly to bring you the best shopping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h3 className="font-bold text-xl">Hart Ijere</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h3 className="font-bold text-xl">Juliet King</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h3 className="font-bold text-xl">Godswill Hart</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're here to shop or explore, we're thrilled to have you with us. Together, let's make MetroMall your favorite shopping destination.
        </p>
        <Link to={"/productList"}  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">
           Start Shopping
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
