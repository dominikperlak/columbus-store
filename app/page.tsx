import { fetchProducts } from "@/lib/api";
import Hero from "@/components/Hero/Hero";

const Home = async () => {
  const { products } = await fetchProducts();
  return <Hero products={products} />;
};

export default Home;
