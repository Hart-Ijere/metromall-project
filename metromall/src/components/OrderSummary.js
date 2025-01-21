import React from "react";

const OrderSummary = ({ cartItems, total }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>

      {/* Display list of cart items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="mb-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between border-b pb-2 mb-2">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Display Total Cost */}
      <div className="border-t pt-4">
        <p className="text-lg font-semibold flex justify-between">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;