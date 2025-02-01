import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <img src={product.image} alt={product.title} />
        </div>
        <div style={{ flex: 2, paddingLeft: '20px' }}>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
