import React, { useState } from "react";
import Search from "./Search";
import products from "./data/products";

const ProductList = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics" },
    { id: 2, name: "Smartwatch", category: "Electronics" },
    { id: 3, name: "Modern Sofa", category: "Home Essentials" },
    { id: 4, name: "Skincare Kit", category: "Health & Beauty" },
    { id: 5, name: "Men's Jacket", category: "Fashion" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="container mx-auto px-4">
      {/* Search Component */}
      <Search products={products} setFilteredProducts={setFilteredProducts} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
