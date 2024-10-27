// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = ({ cartItems, clearCart }) => {
  const [isGuest, setIsGuest] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    creditCard: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setSuccessMessage(
        "Thank you for your order! Your items will be shipped soon."
      );
      clearCart(); // Clear cart after successful checkout
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        address: "",
        creditCard: "",
      });
    }, 2000); // Simulate a 2-second delay for API response
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. Please add items to your cart before proceeding.
        </p>
      ) : (
        <>
          <div className="checkout-options">
            <button onClick={() => setIsGuest(false)}>
              Checkout as Customer
            </button>
            <button onClick={() => setIsGuest(true)}>Checkout as Guest</button>
          </div>

          <form onSubmit={handleSubmit}>
            {isGuest ? (
              <div>
                <h2>Guest Checkout</h2>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="creditCard">Credit Card Number:</label>
                  <input
                    type="text"
                    id="creditCard"
                    name="creditCard"
                    value={formData.creditCard}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <h2>Customer Login</h2>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
              </div>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Proceed to Checkout"}
            </button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
