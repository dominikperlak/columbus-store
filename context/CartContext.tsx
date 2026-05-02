"use client";

  import { createContext, useContext, useState } from "react";
  import { Product } from "@/types/api";

  type CartContextType = {
    cart: Product[];
    addToCart: (_product: Product) => Promise<void>;
    cartCount: number;
  };

  const CartContext = createContext<CartContextType | null>(null);

  export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = async (product: Product) => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCart((prev) => [...prev, product]);
    };

    return (
      <CartContext.Provider value={{ cart, addToCart, cartCount: cart.length }}>
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
  };