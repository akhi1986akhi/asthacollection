export interface UserData {
  fullName: string;
  contactNo: string;
}

export interface LotteryResult {
  isWinner: boolean;
  message: string;
  prize?: string;
  drawDate?: string;
  serialNo: string;
  productType?: string;
}

export interface WinningNumber {
  prize: string;
  drawDate: string;
  productType: string;
}

export type WinningNumbersMap = {
  [key: string]: WinningNumber;
};

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  productType?: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  count: string;
  gradient: string;
  productType?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  purchase: string;
  verified: boolean;
  productType?: string;
}

export interface GoogleReview {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
  photos: number;
  helpful: number;
  productType?: string;
}

export interface AgeGroup {
  id: number;
  name: string;
  description: string;
  image: string;
  styles: string[];
  color: string;
  ageRange: string;
}

export interface PremiumItem {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  features: string[];
  productType?: string;
}

export interface TrendingItem {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
  likes: number;
  views: string;
  tags: string[];
  productType?: string;
}