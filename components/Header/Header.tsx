"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Image as ApiImage } from "@/types/api";
import styles from "./Header.module.css";

type Props = {
  logo: ApiImage;
  title: string;
};

const Header = ({ logo, title }: Props) => {
  const { cartCount, openCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          {logo.url ? (
            <Image
              src={logo.url}
              alt={logo.altText}
              width={120}
              height={40}
              className={styles.logoImg}
            />
          ) : (
            <span className={styles.logoText}>{title}</span>
          )}
        </Link>
        <button
          className={styles.cartBtn}
          onClick={openCart}
          aria-label="Open cart"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cartCount > 0 && (
            <span key={cartCount} className={styles.badge}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
