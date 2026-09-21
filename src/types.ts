export type Currency = 'PKR' | 'USD' | 'EUR';

export interface Dish {
  id: string;
  name: string;
  category: 'pasta' | 'grill' | 'breakfast' | 'dinner' | 'snacks' | 'burgers' | 'shawarma' | 'street-food' | 'dessert' | 'drinks' | 'wine';
  pricePKR: number;
  priceUSD: number;
  priceEUR: number;
  description: string;
  ingredients: string[];
  image: string;
  isPopular: boolean;
  isChefSpecial: boolean;
  isVegetarian: boolean;
  isGlutenFree: boolean;
  calories: number;
  prepTime: string;
  winePairing: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  visitedFor: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  persons: number;
  time: string;
  date: string;
  seatingArea: string;
  specialRequests?: string;
  createdAt: string;
}

export interface RestaurantInfo {
  name: string;
  byLine: string;
  tagline: string;
  address: string;
  landmark: string;
  colony: string;
  city: string;
  country: string;
  postalCode: string;
  plusCode: string;
  hours: string;
  closingTime: string;
  phone: string;
  phoneRaw: string;
  email: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  services: string[];
  story: string;
  menuStory: string;
  googleMapsUrl: string;
}
