import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedImage === product.selectedImage
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedImage === product.selectedImage
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };
  //Remove from Cart (decrease qty)
  const removeFromCart = (id, selectedImage) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.selectedImage === selectedImage
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };
  //Clear entire cart
  const clearCart = () => setCartItems([]);
  //Checkout (buy all items)
  const checkoutCart = () => {
    if (cartItems.length === 0) {
      return { success: false, message: "Your cart is empty." };
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // In a real app, you’d send this data to your backend
    const orderData = {
      orderDate: new Date().toLocaleString(),
      totalAmount: total.toFixed(2),
      items: cartItems,
    };

    // Clear cart after successful checkout
    setCartItems([]);
    return {
      success: true,
      message: "Checkout successful!",
      orderData,
    };
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, checkoutCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
