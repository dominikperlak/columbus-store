"use client";

import { useState } from "react";
import { Product } from "@/types/api";
import { useCart } from "@/context/CartContext";
import styles from "./AddToCartButton.module.css";

type Props = {
  product: Product;
};

const AddToCartButton = ({ product }: Props) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddToCart = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await addToCart(product);
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 1500);
  };

  const btnClass = [
    styles.btn,
    isLoading ? styles.loading : "",
    isSuccess ? styles.success : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={btnClass} onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? (
        <span className={styles.spinner} />
      ) : isSuccess ? (
        "ADDED!"
      ) : (
        "ADD TO CART"
      )}
    </button>
  );
};

export default AddToCartButton;
