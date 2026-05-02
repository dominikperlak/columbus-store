"use client";

  import Image from "next/image";
  import { Product } from "@/types/api";

  type Props = {
    product: Product;
    onAddToCart: (_product: Product) => void;
  };

  const ProductCard = ({ product, onAddToCart }: Props) => {
    const { image, brandName, title, description, price, promotion } = product;

    const discountedPrice = promotion
      ? price * (1 - promotion.percentage / 100)
      : null;

    return (
      <div>
        {image.link && (
          <Image src={image.link} alt={image.altText} width={300} height={300} />
        )}
        <p>{brandName}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {discountedPrice ? (
          <div>
            <span style={{ textDecoration: "line-through" }}>{price} PLN</span>
            <span>{discountedPrice.toFixed(2)} PLN</span>
            <span>{promotion!.name} -{promotion!.percentage}%</span>
          </div>
        ) : (
          <span>{price} PLN</span>
        )}
        <button onClick={() => onAddToCart(product)}>Add to cart</button>
      </div>
    );
  };

  export default ProductCard;