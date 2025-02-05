import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(state || null);
  const [stock, setStock] = useState(Math.floor(Math.random() * 20) + 1);

  useEffect(() => {
    if (!state) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id, state]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} className="details-img" />
      <div className="details-content">
        <h2 className="details-title">{product.title}</h2>
        
        <div className="details-rating">
          ⭐ {Math.floor(Math.random() * 2) + 3}.{Math.floor(Math.random() * 10)} / 5 
        </div>

        <p className="details-price">Price: ${product.price}</p>

        <p className="details-description">{product.description}</p>

        <div className="details-button">
          <button className="cart-button" disabled={stock === 0}>
            {stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
          <button className="buynow-button" disabled={stock === 0}>
            {stock > 0 ? "Buy Now" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
