export interface BusinessReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  avatarUrl?: string;
}

export interface BusinessOffering {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "cocina" | "postres" | "bebidas";
  categoryLabel?: string;
  image: string;
  images?: string[];
  isChefRecommendation?: boolean;
  pairsWellWith?: string[];
}

export interface BusinessProfile {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  logoText?: string;
  logoImage?: string;
  heroImage?: string;
  gmbUrl: string;
  category: string;
  specialtyTagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  rating: number;
  reviewCount: number;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  city: string;
  hours: string;
  isOpenToday?: boolean;
  mapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    website?: string;
  };
  features: string[];
  reviews: BusinessReview[];
  offerings: BusinessOffering[];
  accentColor?: string;
}
