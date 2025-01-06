import React, { useState } from "react";

const Search = ({ products = [], setFilteredProducts = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesQuery = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden w-full">
      {/* Dropdown for Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-100 text-gray-700 w-full md:w-auto px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-b-lg md:rounded-r-lg md:rounded-bl-none hover:bg-blue-600 focus:outline-none w-full md:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
