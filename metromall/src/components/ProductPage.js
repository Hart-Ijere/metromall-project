import React, { useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import headphone from "./headphone.jpg";

const ProductPage = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = {
    id: 1,
    name: "Wireless Headphones",
    price: 199,
    description: "High-quality wireless headphones with noise cancellation.",
    specifications: {
      brand: "Sony",
      model: "WH-1000XM4",
      color: "Black",
      batteryLife: "30 hours",
    },
    images: [
      headphone,
      headphone,
      headphone,
    ],
    reviews: [
      { id: 1, reviewer: "Hart Ijere", rating: 5, comment: "Amazing sound quality!" },
      { id: 2, reviewer: "Juliet King", rating: 4, comment: "Great battery life." },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative">
          <Slider {...settings} className="rounded-lg overflow-hidden">
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Specifications */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Brand: {product.specifications.brand}</li>
              <li>Model: {product.specifications.model}</li>
              <li>Color: {product.specifications.color}</li>
              <li>Battery Life: {product.specifications.batteryLife}</li>
            </ul>
          </div>

          {/* Reviews */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Reviews</h3>
            {product.reviews.map((review) => (
              <div key={review.id} className="mb-4 border-b pb-2">
                <h4 className="font-bold">{review.reviewer}</h4>
                <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-md text-white font-semibold ${
              isAddedToCart ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
            } transition-colors duration-300`}
          >
            {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
