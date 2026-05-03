"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "@/types/api";

type CartContextType = {
  cart: Product[];
  addToCart: (_product: Product) => Promise<void>;
  removeFromCart: (_index: number) => void;
  cartCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = async (product: Product) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount: cart.length,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
