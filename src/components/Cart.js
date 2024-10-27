import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => (
  <div>
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>
              {item.title} - ${item.price}
            </p>
          </div>
        ))}
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    )}
  </div>
);

export default Cart;
