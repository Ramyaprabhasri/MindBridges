import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Products = () => {
  const { username, cart, addToCart } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-container">
      <div className="cart-icon-container" onClick={() => navigate("/cart")}>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        <span className="cart-count">{cart.length}</span>
      </div>

      <h2>Welcome, {username || "Guest"}!</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-img" />
            <h3 className="product-title">{product.title.substring(0, 20)}...</h3>
            <p className="product-price">${product.price}</p>
            <p className={`product-stock ${product.rating.count > 0 ? "in-stock" : "out-of-stock"}`}>
              {product.rating.count > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div className="card-button">
              <button type="button" className="view-button"  onClick={() => navigate(`/details/${product.id}`)} >
                View Details
              </button>
              <button type="button" className="cart-button" onClick={() => addToCart(product)} disabled={cart.some(item => item.id === product.id)}>
                {cart.some(item => item.id === product.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
