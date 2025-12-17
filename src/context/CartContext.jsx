/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { user } = useAuth();

  // Per-user cart key
  const cartKey = user ? `cart_${user.email}` : null;

  // Lazy initialization for first render
  const [cart, setCart] = useState(() => {
    if (!cartKey) return [];
    const stored = localStorage.getItem(cartKey);
    return stored ? JSON.parse(stored) : [];
  });

  // 🔹 REQUIRED: switch carts when user changes
  useEffect(() => {
    if (!cartKey) {
      setCart([]);
      return;
    }

    const stored = localStorage.getItem(cartKey);
    setCart(stored ? JSON.parse(stored) : []);
  }, [cartKey]);

  // 🔹 REQUIRED: persist cart changes
  useEffect(() => {
    if (!cartKey) return;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
    if (cartKey) {
      localStorage.removeItem(cartKey);
    }
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    itemCount: cart.length,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
