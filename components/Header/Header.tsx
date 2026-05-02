"use client";

  import Image from "next/image";
  import { useCart } from "@/context/CartContext";
  import { Image as ApiImage } from "@/types/api";

  type Props = {
    logo: ApiImage;
    title: string;
  };

  const Header = ({ logo, title }: Props) => {
    const { cartCount } = useCart();

    return (
      <header>
        {logo.link && (
          <Image src={logo.link} alt={logo.altText} width={120} height={40} />
        )}
        <span>{title}</span>
        <div>
          <span>Cart</span>
          {cartCount > 0 && <span>{cartCount}</span>}
        </div>
      </header>
    );
  };

  export default Header;