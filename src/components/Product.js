// Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="bg-stone-100 rounded shadow-lg p-4">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className='flex gap-2 mt-3 flex-wrap'>
      <p className="text-gray-500">Category: {product.category},</p>
      <p className="text-gray-500">Color: {product.color},</p>
      <p className="text-gray-500">Size: {product.size}</p>
      </p>
    </div>
  );
};

export default Product;