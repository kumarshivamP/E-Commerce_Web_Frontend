// ShopPage.js
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import { fetchProducts } from '../api/ApiCalls';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data?.message == 'success') {
        setProducts(data?.products);
      }
    })
  }, [])

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])


  return (
    <div className="flex flex-col">
      <div className='flex justify-between bg-violet-700 items-center px-8'>
        <h1 className="text-3xl font-bold py-2 text-white">Shop Page</h1>
        <SearchBar setFilteredProducts={setFilteredProducts} />
      </div>
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <div className="grid grid-cols-3 gap-4 px-8">
        {filteredProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
