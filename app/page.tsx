  import { fetchProducts } from "@/lib/api";
  import ProductSection from "@/components/ProductSection/ProductSection";

  const Home = async () => {
    const { products } = await fetchProducts();

    return (
      <main>
        <ProductSection products={products} />
      </main>
    );
  };

  export default Home;