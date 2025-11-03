export type TranslatableString = { en: string; ru: string; };

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: TranslatableString;
  price: number;
  description: TranslatableString;
  imageUrl: string;
  category: TranslatableString;
  specs: { en: string[]; ru: string[]; };
  specifications?: { en: Specification[]; ru: Specification[]; };
  originalPrice?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  nickname: string;
  email: string;
  password: string;
  phone?: string;
  avatarUrl?: string;
  dateOfBirth?: string;
}

export interface Review {
  id: string;
  productId: number;
  userId: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface Order {
  orderId: string;
  userId: string;
  productIds: number[];
  orderDate: string;
}

export interface OrderHistory {
  id: string;
  userId: string;
  date: string;
  totalAmount: number;
  items: {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }[];
}
