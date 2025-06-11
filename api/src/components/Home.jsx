import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    setProducts(data.recipes);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='bg-light py-5'>
      <div className='container'>
        <div className='row'>
          {products.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.recipe_id}>
              <div className="card h-100 shadow">
                <img src={product.image_url} alt={product.title} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <Link className="btn btn-outline-info" to={`/product/${product.recipe_id}`}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
