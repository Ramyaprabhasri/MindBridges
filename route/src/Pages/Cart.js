import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(UserContext);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
