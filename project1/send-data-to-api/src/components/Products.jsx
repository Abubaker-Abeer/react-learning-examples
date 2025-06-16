import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
  <section className="products py-5">
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 mb-4" key={product.id}>
          <Product
            title={product.title}
            thumbnail={product.thumbnail}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}
    </div>
  </section>
);


}
