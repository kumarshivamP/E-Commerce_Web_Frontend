// Filter.js
import React, { useEffect, useState } from 'react';
import { fetchFilterOptions } from '../api/ApiCalls';

const Filter = ({ products, setFilteredProducts }) => {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [filterOptions, setFilterOptions] = useState({})

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      return (
        (category === '' || product.category === category) &&
        (color === '' || product.color === color) &&
        (size === '' || product.size === size)
      );
    });
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    fetchFilterOptions().then((data) => {
      if (data?.message == 'success') {
        setFilterOptions(data?.data)
      }
    })
  }, [])


  return (
    <div className="flex flex-wrap justify-center mb-4">
      <select
        className="bg-white border border-gray-400 p-2 rounded mr-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {
          filterOptions?.categories?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))
        }
      </select>
      <select
        className="bg-white border border-gray-400 p-2 rounded mr-2"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Select Color</option>
        {
          filterOptions?.colors?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))
        }
      </select>
      <select
        className="bg-white border border-gray-400 p-2 rounded mr-2"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">Select Size</option>
        {
          filterOptions?.sizes?.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))
        }
      </select>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;