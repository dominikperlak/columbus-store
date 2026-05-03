"use client";

import { Product } from "@/types/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductList.module.css";

type Props = {
  products: Product[];
  onAddToCart: (_product: Product) => Promise<void>;
};

const ProductList = ({ products, onAddToCart }: Props) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.articleNumber}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
