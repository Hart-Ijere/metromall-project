import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Search from "./Search";
import sofa from "./sofa.jpg";
import skincare from "./skin-care.jpg";
import smartwatch from "./smart-watch.jpg";
import headphone from "./headphone.jpg";

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199,
    rating: 4.5,
    brand: "Sony",
    size: "Medium",
    color: "Black",
    category: "Electronics",
    image: headphone, // Replace this with the actual image URL or local path
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 149,
    rating: 4.0,
    brand: "Apple",
    size: "Small",
    color: "Silver",
    category: "Electronics",
    image: smartwatch, // Replace this with the actual image URL or local path
  },
  {
    id: 3,
    name: "Modern Sofa",
    price: 499,
    rating: 4.8,
    brand: "Ikea",
    size: "Large",
    color: "Gray",
    category: "Home Essentials",
    image: sofa, // Replace this with the actual image URL or local path
  },
  {
    id: 4,
    name: "Men's Jacket",
    price: 89,
    rating: 4.3,
    brand: "Adidas",
    size: "Medium",
    color: "Blue",
    category: "Fashion",
    image: skincare, // Replace this with the actual image URL or local path
  },
  {
    id: 5,
    name: "Skincare Kit",
    price: 59,
    rating: 4.2,
    brand: "Nivea",
    size: "Small",
    color: "White",
    category: "Health & Beauty",
    image: skincare, // Replace this with the actual image URL or local path
  },
];

const ProductListingPage = () => {
  const [products, setProducts] = useState(allProducts);
  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    setDisplayedProducts(allProducts.slice(0, productsPerPage));
  }, []);

  // Handle search logic
  const handleSearch = (searchQuery, category) => {
    let filtered = allProducts;

    // Filter by category if not "All"
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by search query (case-insensitive)
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProducts(filtered);
    setDisplayedProducts(filtered.slice(0, productsPerPage)); // Show only the first page of results
    setCurrentPage(1); // Reset pagination
  };

  // Load more products (pagination)
  const loadMore = () => {
    const nextPage = currentPage + 1;
    const newProducts = products.slice(0, nextPage * productsPerPage);
    setDisplayedProducts(newProducts);
    setCurrentPage(nextPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

      {/* Search Component */}
      <Search onSearch={handleSearch} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Display the product image */}
              <img
                src={product.image || "https://via.placeholder.com/150"} // Default placeholder if no image is provided
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              {/* Product details */}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-600 text-sm">Rating: {product.rating}</p>

              {/* View Product Button */}
              <Link
                to={`/products/${product.id}`} // Navigate to the product page using its ID
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 block text-center"
              >
                View Product
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>

      {/* Load More Button */}
      {displayedProducts.length < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;
