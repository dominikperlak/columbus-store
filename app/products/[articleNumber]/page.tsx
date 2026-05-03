import { fetchProducts } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ articleNumber: string }>;
};

const ProductPage = async ({ params }: Props) => {
  const { articleNumber } = await params;
  const { products } = await fetchProducts();
  const product = products.find((p) => p.articleNumber === articleNumber);

  if (!product) notFound();

  const { image, brandName, title, description, price, promotion } = product;
  const discountedPrice = promotion
    ? price * (1 - promotion.percentage / 100)
    : null;

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <Link href="/" className={styles.back}>
            ← All Products
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{title}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            {promotion && (
              <span className={styles.badge}>{promotion.name}</span>
            )}
            {image.url ? (
              <Image
                src={image.url}
                alt={image.altText}
                fill
                sizes="(min-width: 1280px) 50vw, 100vw"
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder} />
            )}
          </div>
        </div>

        <div className={styles.infoCol}>
          <span className={styles.brand}>{brandName}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
          <div className={styles.priceRow}>
            {discountedPrice ? (
              <>
                <span className={`${styles.price} ${styles.sale}`}>
                  {discountedPrice.toFixed(2)} PLN
                </span>
                <span className={styles.priceOrig}>{price} PLN</span>
                <span className={styles.discountPill}>
                  -{promotion!.percentage}%
                </span>
              </>
            ) : (
              <span className={styles.price}>{price} PLN</span>
            )}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
