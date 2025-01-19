import React from "react";
import { Link } from "react-router-dom";
import sofa from "./sofa.jpg";
import skincare from "./skin-care.jpg";
import smartwatch from "./smart-watch.jpg";
import headphone from "./headphone.jpg";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199,
      image: headphone,
      link: "/products/1",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149,
      image: smartwatch,
      link: "/products/2",
    },
    {
      id: 3,
      name: "Modern Sofa",
      price: 499,
      image: sofa,
      link: "/products/3",
    },
    {
      id: 4,
      name: "Skincare Kit",
      price: 89,
      image: skincare,
      link: "/products/4",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <Link to={product.link}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </Link>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">${product.price}</p>

                {/* Add to Cart Button */}
                <Link
                  to={product.link}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  style={{ backgroundColor: "#28A745" }}
                >
                    
                  Add to Cart
                </Link>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
