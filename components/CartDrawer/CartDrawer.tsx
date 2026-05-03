"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import styles from "./CartDrawer.module.css";

const CartDrawer = () => {
  const { cart, isOpen, closeCart, removeFromCart } = useCart();

  const total = cart.reduce((sum, p) => {
    const price = p.promotion
      ? p.price * (1 - p.promotion.percentage / 100)
      : p.price;
    return sum + price;
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeCart} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <span className={styles.title}>CART</span>
          <button className={styles.closeBtn} onClick={closeCart}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cart.map((product, i) => {
                const price = product.promotion
                  ? product.price * (1 - product.promotion.percentage / 100)
                  : product.price;
                return (
                  <div
                    key={`${product.articleNumber}-${i}`}
                    className={styles.item}
                  >
                    <div className={styles.itemImg}>
                      {product.image.url && (
                        <Image
                          src={product.image.url}
                          alt={product.image.altText}
                          fill
                          className={styles.itemImgEl}
                        />
                      )}
                    </div>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemBrand}>
                        {product.brandName}
                      </span>
                      <span className={styles.itemName}>{product.title}</span>
                      <span className={styles.itemPrice}>
                        {price.toFixed(2)} PLN
                      </span>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(i)}
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>TOTAL</span>
                <span>{total.toFixed(2)} PLN</span>
              </div>
              <button className={styles.checkoutBtn}>CHECKOUT</button>
              <button className={styles.continueBtn} onClick={closeCart}>
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
