export type Image = {
  link: string;
  altText: string;
};

export type Promotion = {
  name: string;
  percentage: number;
};

export type Product = {
  articleNumber: string;
  ean: string;
  link: string;
  image: Image;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion: Promotion | null;
};

export type ApiResponse = {
  title: string;
  logo: Image;
  products: Product[];
};
