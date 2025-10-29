import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  const existing = cartItems.find((item) => item.id === product.id);
  if (existing) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};



  // const removeFromCart = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };
  const removeFromCart = (id, amount = 1) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, qty: item.qty - amount }
          : item
      )
      .filter(item => item.qty > 0) // remove item if qty <= 0
  );
};

  const buyCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, buyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
