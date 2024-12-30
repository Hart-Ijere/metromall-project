import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    console.log(`Searching for "${searchQuery}" in category: "${category}"`);
    // Add logic to handle the search here
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
