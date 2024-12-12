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
    setFilteredProducts(products)
  }, [products])


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop Page</h1>
      <SearchBar setFilteredProducts={setFilteredProducts} />
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;