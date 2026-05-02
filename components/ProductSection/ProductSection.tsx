  "use client";

  import { Product } from "@/types/api";
  import ProductList from "@/components/ProductList/ProductList";

  type Props = {
    products: Product[];
  };

  const ProductSection = ({ products }: Props) => {
    return <ProductList products={products} onAddToCart={() => {}} />;
  };

  export default ProductSection;