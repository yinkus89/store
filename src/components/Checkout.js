// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = ({ cartItems, clearCart }) => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>
        <button onClick={() => setIsCustomer(true)}>
          Checkout as Customer
        </button>
        <button onClick={() => setIsCustomer(false)}>Checkout as Guest</button>
      </div>

      <form onSubmit={handleSubmit}>
        {isCustomer ? (
          <>
            <h3>Checkout as Customer</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <>
            <h3>Checkout as Guest</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </>
        )}

        <h3>Payment Details</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          pattern="\d{16}" // Assuming a 16-digit card number
          title="Enter a valid card number (16 digits)"
        />
        <input
          type="text"
          name="cardExpiry"
          placeholder="Expiry Date (MM/YY)"
          value={formData.cardExpiry}
          onChange={handleChange}
          required
          pattern="(0[1-9]|1[0-2])\/\d{2}"
          title="Enter a valid expiry date (MM/YY)"
        />
        <input
          type="text"
          name="cardCVC"
          placeholder="CVC"
          value={formData.cardCVC}
          onChange={handleChange}
          required
          pattern="\d{3}"
          title="Enter a valid CVC (3 digits)"
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
