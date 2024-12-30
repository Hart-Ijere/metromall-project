import React, { useState } from "react";

const Search = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    // Filter logic
    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesQuery = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });

    // Update the filtered products
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
      {/* Dropdown for Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home Essentials">Home Essentials</option>
        <option value="Health & Beauty">Health & Beauty</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search MetroMall..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
