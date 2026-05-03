"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/api";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  onAddToCart: (_product: Product) => Promise<void>;
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  const {
    image,
    brandName,
    title,
    description,
    price,
    promotion,
    articleNumber,
  } = product;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const discountedPrice = promotion
    ? price * (1 - promotion.percentage / 100)
    : null;

  const handleAddToCart = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await onAddToCart(product);
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 1500);
  };

  const btnClass = [
    styles.atcBtn,
    isLoading ? styles.loading : "",
    isSuccess ? styles.success : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={styles.card}>
      <Link href={`/products/${articleNumber}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          {promotion && <span className={styles.badge}>{promotion.name}</span>}
          {image.url ? (
            <Image
              src={image.url}
              alt={image.altText}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder} />
          )}
        </div>
        <div className={styles.body}>
          <span className={styles.brand}>{brandName}</span>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.priceRow}>
            {discountedPrice ? (
              <>
                <span className={`${styles.price} ${styles.sale}`}>
                  {discountedPrice.toFixed(2)} PLN
                </span>
                <span className={styles.priceOrig}>{price} PLN</span>
                <span className={styles.discountPill}>
                  -{promotion!.percentage}%
                </span>
              </>
            ) : (
              <span className={styles.price}>{price} PLN</span>
            )}
          </div>
        </div>
      </Link>
      <button
        className={btnClass}
        onClick={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className={styles.spinner} />
        ) : isSuccess ? (
          "ADDED!"
        ) : (
          "ADD TO CART"
        )}
      </button>
    </article>
  );
};

export default ProductCard;
