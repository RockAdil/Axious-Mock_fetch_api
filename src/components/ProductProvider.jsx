import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductProvider = () => {
  const [Products, setProducts] = useState([]);
  console.log(Products);

  const FetchApi = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '2rem 0 2.5rem' }}>
        Products Available
      </h1>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: '200px' }}
            />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductProvider;
