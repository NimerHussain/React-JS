import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div>
        {products.map(product => (
          <div key={product.id} className="card">
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.description.substring(0, 100)}...</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
