  "use client";

  import { Product } from "@/types/api";
  import ProductList from "@/components/ProductList/ProductList";
  import { useCart } from "@/context/CartContext";

  type Props = {
    products: Product[];
  };

  const ProductSection = ({ products }: Props) => {
    const { addToCart } = useCart();
    return <ProductList products={products} onAddToCart={addToCart} />;
  };

  export default ProductSection;