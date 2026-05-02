"use client";

  import { Product } from "@/types/api";
  import ProductCard from "@/components/ProductCard/ProductCard";

  type Props = {
    products: Product[];
    onAddToCart: (_product: Product) => void;
  };

  const ProductList = ({ products, onAddToCart }: Props) => {
    return (
      <div>
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