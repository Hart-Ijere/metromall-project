import React from "react";

const OrderSummary = () => {
  const subtotal = 847;
  const tax = subtotal * 0.1; // 10% tax
  const discount = 50;
  const total = subtotal + tax - discount;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <p className="mb-2">Subtotal: ${subtotal.toFixed(2)}</p>
      <p className="mb-2">Tax: ${tax.toFixed(2)}</p>
      <p className="mb-2">Discount: -${discount.toFixed(2)}</p>
      <hr className="my-4" />
      <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
