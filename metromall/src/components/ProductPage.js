import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for accessing the product ID from the URL
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import sofa from "./sofa.jpg";
import skincare from "./skin-care.jpg";
import smartwatch from "./smart-watch.jpg";
import headphone from "./headphone.jpg";

// Mock product data (shared with ProductListingPage)
const allProducts = [
  {
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
    images: [headphone],
    reviews: [
      { id: 1, reviewer: "Hart Ijere", rating: 5, comment: "Amazing sound quality!" },
      { id: 2, reviewer: "Juliet King", rating: 4, comment: "Great battery life." },
    ],
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 149,
    description: "Stylish smartwatch with multiple health-tracking features.",
    specifications: {
      brand: "Apple",
      model: "Series 7",
      color: "Silver",
      batteryLife: "18 hours",
    },
    images: [smartwatch],
    reviews: [
      { id: 1, reviewer: "Mike Adams", rating: 5, comment: "A great smartwatch for everyday use!" },
      { id: 2, reviewer: "Sarah Lopez", rating: 4, comment: "Works well but battery could last longer." },
    ],
  },
  {
    id: 3,
    name: "Modern Sofa",
    price: 499,
    description: "Elegant and comfortable sofa, perfect for your living room.",
    specifications: {
      brand: "Ikea",
      model: "Luxury Sofa",
      color: "Gray",
      material: "Fabric",
    },
    images: [sofa],
    reviews: [
      { id: 1, reviewer: "Alex Johnson", rating: 5, comment: "Very stylish and comfortable!" },
      { id: 2, reviewer: "Emily Clark", rating: 4, comment: "Looks amazing in my living room!" },
    ],
  },
  {
    id: 4,
    name: "Skincare Kit",
    price: 59,
    description: "Complete skincare kit to keep your skin healthy and glowing.",
    specifications: {
      brand: "Nivea",
      model: "SkinGlow Kit",
      type: "All Skin Types",
    },
    images: [skincare],
    reviews: [
      { id: 1, reviewer: "Linda Hayes", rating: 5, comment: "My skin feels so refreshed!" },
      { id: 2, reviewer: "James Smith", rating: 4, comment: "Good for daily skincare routine." },
    ],
  },
];

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = allProducts.find((item) => item.id === parseInt(id)); // Find the product by ID

  // State for "Add to Cart" feedback
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Handle Add to Cart
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 1500); // Reset after 1.5 seconds
  };

  if (!product) {
    return <div className="text-center py-16">Product not found!</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
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
