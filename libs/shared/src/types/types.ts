export interface BankAccount {
  id: string;
  type: string;
  number: string;
  balance: number;
  currency: string;
}

export interface BankProduct {
  name: string;
  description: string;
  benefits: string[];
  icon: string;
  minAmount?: number;
  maxAmount?: number;
  coverage?: number | string;
}

export interface ProductCategory {
  category: string;
  items: BankProduct[];
}

export interface UserProduct {
  name: string;
  limit?: number;
  used?: number;
  amount?: number;
  remaining?: number;
  coverage?: number;
  premium?: number;
}

export interface Contact {
  id: number;
  name: string;
  bank: string;
  accountNumber: string;
  accountType: string;
  avatar: string;
}

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
}

export interface Transfer {
  id: number;
  recipient: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  concept: string;
}

export interface UserProfile {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    dni: string;
    birthDate: string;
    address: string;
  };
  bankingInfo: {
    customerSince: string;
    customerType: string;
    creditScore: number;
    monthlyIncome: number;
  };
}