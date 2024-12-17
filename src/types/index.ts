export interface Category {
  title: string;
  image?: string;
  image2?: string;
}

export interface Product {
  title: string;
  image?: string;
  image2?: string;
  video?: string;
  price: string | number;
  originalPrice: string | number;
  tag?: string;
  colors?: string[];
}

export interface ExperienceCenter {
  city: string;
  address: string;
  phone: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ScrollingProduct {
  title: string;
  image: string;
  type: string;
}