
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



export type Wallet = {
  id: string;
  name: string;
  type: 'personal' | 'business' | 'savings';
  balance: number;
  currency: string;
  createdAt: string;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  category?: 'income' | 'shopping' | 'transfer' | 'bills' | 'food';
};


export type ServiceType = {
  id: number;
  name: string;
  icon: string;
};

export type WalletType = {
  id: string;
  name: string;
  balance: number;
};

export type TransactionType = {
  id: string;
  service: ServiceType;
  amount: number;
  date: Date;
  status: 'completed' | 'failed' | 'pending';
  walletId: string;
};