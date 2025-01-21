import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import CartContext
import OrderSummary from "./OrderSummary";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { cartItems, clearCart } = useContext(CartContext); // Access cart items and clearCart from context

  // Form validation function
  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.cardNumber) errors.cardNumber = "Card number is required.";
    if (!formData.expiry) errors.expiry = "Expiry date is required.";
    if (!formData.cvv) errors.cvv = "CVV is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Navigate to the success page with order details
      navigate("/success", {
        state: {
          orderDetails: {
            ...formData,
            items: cartItems, // Include cart items in the order details
            total: calculateTotal(), // Calculate total cost
          },
        },
      });

      // Clear the cart after placing the order
      clearCart();
    }
  };

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="md:col-span-2 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping & Payment Information</h2>

          <div className="mb-4">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block font-semibold">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
            </div>

            <div className="w-1/2">
              <label className="block font-semibold">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary Section */}
        <OrderSummary cartItems={cartItems} total={calculateTotal()} />
      </div>
    </div>
  );
};

export default CheckoutForm;
