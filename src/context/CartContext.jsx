import { createContext, useContext, useState, useEffect } from "react"; // ✅ add useEffect

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ ADD THIS to sync with localStorage on every update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.title === newItem.title &&
          item.club === newItem.club &&
          item.day === newItem.day &&
          item.label === newItem.label
      );
  
      if (existingIndex !== -1) {
        // If already in cart, increase quantity
        const updated = [...prev];
        const existing = updated[existingIndex];
        updated[existingIndex] = {
          ...existing,
          quantity: (existing.quantity || 1) + 1,
        };
        return updated;
      } else {
        // New item
        return [...prev, { ...newItem, quantity: 1 }];
      }
    });
  };
  


  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const value = { cartItems, setCartItems, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
