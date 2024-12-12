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
    <div className="flex content-between justify-center items-center">
      <input
        type="text"
        className="bg-white border border-gray-400 p-2 rounded mr-2 w-64 h-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products"
      />
      <button
        className="bg-green-400 hover:bg-green-500 text-white text-center font-bold p-auto rounded h-9 w-24"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;