import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import the CartContext
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  // Access context values
  const { cartItems, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} each</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <p className="text-gray-600 mb-4">
              Total Items: <span className="font-semibold">{cartItems.length}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Total Price: <span className="font-semibold">${calculateTotal()}</span>
            </p>
            <button
              onClick={clearCart}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
            <Link to="/checkoutForm">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-4">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
