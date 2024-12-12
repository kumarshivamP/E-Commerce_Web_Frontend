// SearchBar.js
import React, { useState } from 'react';
import { searchByKeyword } from '../api/ApiCalls';

const SearchBar = ({ setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    searchByKeyword(searchQuery).then((data) => {
      if (data?.message == 'success') {
        setFilteredProducts(data?.products);
      }
    })
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="bg-white border border-gray-400 p-2 rounded mr-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;