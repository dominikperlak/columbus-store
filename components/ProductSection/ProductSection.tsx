"use client";

import { Product } from "@/types/api";
import ProductList from "@/components/ProductList/ProductList";
import { useCart } from "@/context/CartContext";
import styles from "./ProductSection.module.css";

type Props = {
  products: Product[];
};

const ProductSection = ({ products }: Props) => {
  const { addToCart } = useCart();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            EVERYTHING
            <br />
            <span className={styles.heroAccent}>YOU NEED.</span>
          </h1>
        </div>
        <div className={styles.heroWatermark} aria-hidden="true">
          EVERYTHING YOU NEED
        </div>
      </section>

      <div className={styles.gridWrap}>
        <div className={styles.gridHeader}>
          <span className={styles.gridLabel}>ALL PRODUCTS</span>
          <span className={styles.gridCount}>{products.length} items</span>
        </div>
        <ProductList products={products} onAddToCart={addToCart} />
      </div>
    </main>
  );
};

export default ProductSection;
