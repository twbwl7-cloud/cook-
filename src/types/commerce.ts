export type CakeCategory = "gan" | "misparim" | "meutzavot";

export type ProductTag = "new" | "bestseller" | "kids" | "luxury" | "custom";

export type ProductVariant = {
  id: string;
  label: string;
  sku: string;
  priceIls: number;
  compareAtIls?: number;
  stock: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: CakeCategory;
  tags: ProductTag[];
  image: string;
  imageCredit: "real" | "mockup";
  featured: boolean;
  shape: "round" | "sheet" | "number" | "shaped";
  variants: ProductVariant[];
};

export type Collection = {
  id: string;
  slug: CakeCategory;
  title: string;
  description: string;
  productIds: string[];
  coverImage: string;
};

export type Review = {
  id: string;
  author: string;
  city: string;
  rating: number;
  body: string;
  productSlug?: string;
  source: "whatsapp" | "site";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SiteSettings = {
  brandName: string;
  legalName: string;
  businessId: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  tagline: string;
  shippingFlatIls: number;
  freeShippingFromIls: number;
  launchCouponCode: string;
  launchCouponPercent: number;
};

export type CartLine = {
  productId: string;
  variantId: string;
  quantity: number;
};
