import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract order details from the location state
  const orderDetails = location.state?.orderDetails;

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-green-500 mb-4">Order Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for shopping with <span className="font-bold">MetroMall</span>. Your order has been placed successfully.
      </p>

      {/* Show order summary if available */}
      {orderDetails && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <p className="text-gray-600 mb-2">
            <strong>Name:</strong> {orderDetails.name}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {orderDetails.email}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Shipping Address:</strong> {orderDetails.address}
          </p>
        </div>
      )}

      <p className="text-lg text-gray-700 mb-6">
        We hope you enjoy your purchase. If you have any questions, feel free to contact us at{" "}
        <span className="text-blue-500">support@metromall.com</span>.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
