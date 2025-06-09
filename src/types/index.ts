
export interface Category {
  id?: string | number;
  name?: string;
  icon?: string;
  slug?: string;
  image?: string;
}

export interface Location {
  id: string;
  name: string;
  state: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  createdAt: Date;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  categoryId: string;
  locationId: string;
  userId: string;
  user?: User;
  createdAt: Date;
  featured: boolean;
   // isSold: boolean;
  // condition: string;
  // tags: string[];
  // views: number;
}

export type LayoutProps = {
  children: React.ReactNode;
};

