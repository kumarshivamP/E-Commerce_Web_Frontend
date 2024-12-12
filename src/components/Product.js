// Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Color: {product.color}</p>
      <p className="text-gray-600">Size: {product.size}</p>
    </div>
  );
};

export default Product;